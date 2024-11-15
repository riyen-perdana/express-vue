// import express
const express = require('express');

// import cors
const cors = require('cors');

// import prisma client
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
module.exports = prisma;

// import BodyParser
const bodyParser = require('body-parser');

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

// run app
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});