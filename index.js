const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const products_controller = require('./products_controller');

const app = module.exports = express();

const connectionString = "postgres://yclvuvrelxsxij:78a86282e644ee9c28f285446c54e67dffd00359ec19eb99db932ec7c202d38f@ec2-23-21-246-11.compute-1.amazonaws.com:5432/d4hc21515iuphb?ssl=true";
massive( connectionString ).then( dbInstance => {
    app.set('db', dbInstance);
    
    dbInstance.set_schema()
    .then( console.log("Table reset!") );
} );

app.use( bodyParser.json() );
app.use( cors() );

app.post( '/api/product', products_controller.create );
app.get( '/api/products', products_controller.getAll );
app.get( '/api/product/:id', products_controller.getOne );
app.put( '/api/product/:id', products_controller.update );
app.delete( '/api/product/:id', products_controller.delete );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );