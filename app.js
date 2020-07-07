const express = require('express');
const morgan = require('morgan');
const app = express();
var bodyParser = require('body-parser');
var multer = require('multer');


// parse application/json
app.use(bodyParser.json());                        

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse multipart/form-data
// app.use(multer());

app.use(morgan('short'));

const append_router = require('./routes/append.js');

app.use(append_router);

app.get('/',(req,res) => {
    res.send('Main Page');
});

app.listen(3000, () => console.log('Listening on port 3000'))