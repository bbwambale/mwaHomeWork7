var crypto = require('crypto');
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var enc;
/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoClient.connect('mongodb://localhost:27017/', function(error, client){
    if(error)throw error;
    console.log('Connected Sucessfully to the Server');
    const db = client.db('MyFirstDataBase');
    db.collection('homeWork7').findOne({},function(error, doc){
       if(error)throw error;
       var key = 'asaadsaad';
       var text = doc.message;
       enc = crypto.createDecipher('aes256', key).update(text, 'hex', 'utf-8');
       //console.dir(enc);
       client.close();
    });
});

  res.send(enc);
});

module.exports = router;
