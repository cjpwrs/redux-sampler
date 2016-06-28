/**
 * Created by cjpowers on 6/25/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var db = massive.connectSync({db : "testdb"});
//console.log(db);
var app = express();
app.use(bodyParser.json());
app.use(cors());

var port = 3001;

var newUser = {
  email : "cj@test.com",
  first : "CJ",
  last : "Powers"
};

var newProduct = ['Bouncy Ball', 1.99, 15];

// db.dropTable(function(err, res){
//   console.log(res);
// })

// db.productTable(function(err, res){
//   console.log(res);
// })

// db.addProduct(newProduct, function(err, res){
//   if(err) console.log(err);
//   console.log(res);
// })

db.getProducts(function(err, res){
  console.log(res);
});






// db.saveDoc("doggies", {
//   "name": "red breasted merganser",
//   "order": "Anseriformes",
//   "status": "least concern",
//   "confirmed": true,
//   "numberSeen": 2
// }, function(err,doc){
//   //the new document, with id, is returned
// });
// console.log(db);
//
// db.run("select * from doggies", function(err, res){
//   console.log(res);
// });




app.post('/api/products', function(req, res) {
  //console.log(req);
  console.log(req.body);
  let title = req.body.title;
  let price = req.body.price;
  let quantity = req.body.quantity;
  console.log('POST product');
  db.addProduct(title, price, quantity, function(err, r){
    if(!err){
      return res.json(req.body);
    }
    else {
      return res.json(err)
    }
  })
});

app.get('/api/products', function(req, res) {
  db.getProducts(function(err, response){
    console.log(response);
    return res.json(response);
  });
  // console.log('GET sighting');
  // res.end();
});

db.deleteProduct(1, function(err, res){
  console.log(res);
})

app.delete('/api/products', function(req, res) {
  console.log(req.body);
  let id = req.body.id;
  db.deleteProduct(id, function(err, response){
    console.log(response);
    return res.end()
  })
  console.log('DELETE product');
  res.end();
});

app.put('/api/products', function(req, res) {
  let id = req.body.id;
  let title = req.body.title;
  let price = req.body.price;
  let quantity = req.body.quantity;
  db.updateProduct(id, title, price, quantity, function(err, response){
    return res.end()
  })
  console.log('PUT product');
  res.end();
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
