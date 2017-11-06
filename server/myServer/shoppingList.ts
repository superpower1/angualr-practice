import * as express from 'express';

const app = express();

export class Item {

	constructor(
		public isDone:boolean,
		public title:string,
		public expire:Date

		) {

	}
}

const shoppingList:Array<Item> = [
	  		new Item(true, 'cake', new Date()),
	  		new Item(true, 'meat', new Date()),
	  		new Item(true, 'coke', new Date()),

	  	];

app.get('/', (req, res) => {
  res.send('Server is working...')
});

app.get('/list', (req, res) => {
  res.json(shoppingList);
});

// app.get('/product/:id', (req, res) => {
//   res.json(shoppingList.find((product) => shoppingList.id == req.params.id));
// });

const server = app.listen(8000, '192.168.1.2', ()=> {
  console.log('Server is listening on localhost:8000');
});
