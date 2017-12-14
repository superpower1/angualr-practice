import * as express from 'express';
import { Server } from 'ws';

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

export class Comment {

	constructor(
		public id:number,
		public productID:number,
		public timeStamp:string,
		public user:string,
		public rating:number,
		public content:string

		) {

	}
}

const products:Array<Product> = [
	  		new Product(1, "M99", 1.99, 3.5, "M99 is RF", ["RF"]),
	  		new Product(2, "M1887", 4.99, 4.5, "M1887 is SG", ["SG"]),
	  		new Product(3, "G41", 6.99, 2.5, "G41 is AR", ["AR"]),
	  		new Product(4, "UMP45", 9.99, 5.0, "UMP45 is SMG", ["SMG"]),
	  		new Product(5, "M950A", 2.99, 3.0, "M950A is HG", ["HG"]),
	  		new Product(6, "MG4", 7.99, 1.5, "MG4 is MG", ["MG"])
	  	];

const comments:Array<Comment> = [
	  		new Comment(1, 1, "2017-9-20 12:45", "sp1", 4, "Great"),
	  		new Comment(2, 2, "2017-9-20 12:45", "sp1", 3, "Good"),
	  		new Comment(3, 1, "2017-9-20 12:45", "sp1", 2.5, "Fair"),
	  		new Comment(4, 3, "2017-9-20 12:45", "sp1", 5, "Excellent"),
	  		new Comment(5, 2, "2017-9-20 12:45", "sp1", 1, "Bad"),
	  		new Comment(6, 3, "2017-9-20 12:45", "sp1", 4, "Great")
	  	];

app.get('/', (req, res) => {
  res.send("Hello Express");
});

app.get('/api/products', (req, res) => {
	let result = products;
	let params = req.query;

	if(params.title) {
		result = result.filter((p) => p.title.indexOf(params.title) !== -1);
	}

	if(params.price && result.length > 0) {
		result = result.filter((p) => p.price <= parseInt(params.price));
	}

	if(params.category !== "-1" && result.length > 0) {
		result = result.filter((p) => p.cate.indexOf(params.category) !== -1);
	}

  res.json(result);
});

app.get('/api/product/:id', (req, res) => {
  res.json(products.find((product) => product.id == req.params.id));
});

app.get('/api/product/:id/comments', (req, res) => {
  res.json(comments.filter((comment) => comment.productID == req.params.id));
});

const server = app.listen(8000, 'localhost', ()=> {
  console.log('Server is listening on localhost:8000');
});

const wsServer = new Server({port: 8085});
wsServer.on("connection", websocket => {
	websocket.send('Connection established');
	websocket.on("message", msg => {
		console.log("Recieved message:"+msg);
	});
});

setInterval(() => {
	if(wsServer.clients) {
		wsServer.clients.forEach(client => {
			client.send("Hello");
		})
	}
}, 2000);
