import * as express from 'express';

const app = express();

export class Product {

	constructor(
		public id:number,
		public title:string,
		public price:number,
		public rating:number,
		public desc:string,
		public cate:Array<string>

		) {

	}
}

const products:Array<Product> = [
	  		new Product(1, "M99", 1.99, 3.5, "M99 is RF", ["RF"]),
	  		new Product(2, "M1887", 4.99, 4.5, "M1887 is SG", ["SG"]),
	  		new Product(3, "G41", 6.99, 2.5, "G41 is AR", ["AR"]),
	  		new Product(4, "UMP45", 9.99, 5.0, "UMP45 is SMG", ["SMG"]),
	  		new Product(5, "M950A", 2.99, 3.0, "M950A is HG", ["HG"]),
	  		new Product(6, "MG4", 7.99, 1.5, "MG4 is MG", ["MG"]),
	  	];

app.get('/', (req, res) => {
  res.send("Hello Express");
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/product/:id', (req, res) => {
  res.json(products.find((product) => product.id == req.params.id));
});

const server = app.listen(8000, 'localhost', ()=> {
  console.log('Server is listening on localhost:8000');
});
