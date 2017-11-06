"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var Item = (function () {
    function Item(isDone, title, expire) {
        this.isDone = isDone;
        this.title = title;
        this.expire = expire;
    }
    return Item;
}());
exports.Item = Item;
var shoppingList = [
    new Item(true, 'cake', new Date()),
    new Item(true, 'meat', new Date()),
    new Item(true, 'coke', new Date()),
];
app.get('/', function (req, res) {
    res.send('Server is working...');
});
app.get('/list', function (req, res) {
    res.json(shoppingList);
});
// app.get('/product/:id', (req, res) => {
//   res.json(shoppingList.find((product) => shoppingList.id == req.params.id));
// });
var server = app.listen(8000, '192.168.1.2', function () {
    console.log('Server is listening on localhost:8000');
});
