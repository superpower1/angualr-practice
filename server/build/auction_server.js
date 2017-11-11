"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var app = express();
var Product = (function () {
    function Product(id, title, price, rating, desc, cate) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.cate = cate;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, "M99", 1.99, 3.5, "M99 is RF", ["RF"]),
    new Product(2, "M1887", 4.99, 4.5, "M1887 is SG", ["SG"]),
    new Product(3, "G41", 6.99, 2.5, "G41 is AR", ["AR"]),
    new Product(4, "UMP45", 9.99, 5.0, "UMP45 is SMG", ["SMG"]),
    new Product(5, "M950A", 2.99, 3.0, "M950A is HG", ["HG"]),
    new Product(6, "MG4", 7.99, 1.5, "MG4 is MG", ["MG"]),
];
app.get('/', function (req, res) {
    res.send("Hello Express");
});
app.get('/api/products', function (req, res) {
    res.json(products);
});
app.get('/api/product/:id', function (req, res) {
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
var server = app.listen(8000, 'localhost', function () {
    console.log('Server is listening on localhost:8000');
});
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on("connection", function (websocket) {
    websocket.send('Connection established');
    websocket.on("message", function (msg) {
        console.log("Recieved message:" + msg);
    });
});
setInterval(function () {
    if (wsServer.clients) {
        wsServer.clients.forEach(function (client) {
            client.send("Hello");
        });
    }
}, 2000);
