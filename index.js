// import express
const express = require('express');

// import cors
const cors = require('cors');

// import BodyParser
const bodyParser = require('body-parser');

//import router
const router = require('./routes')

// init app
const app = express();

// use cors
app.use(cors());

// use BodyParser
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// set port
const port = 3000;

// set route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//define routes
app.use('/api', router);

// run app
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});