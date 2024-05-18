const express = require('express');
const mongoose = require('mongoose')
const router = require('./Routes/jobRoutes')
// console.log("x",router);

const app = express()
const port = 8000;

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/jobApp')
    .then(() => console.log('this is the promise it will take to resolve the data form module'))
    .catch((err) => console.log(`Error fetching data ${err}`))


app.listen(port, () => console.log(`Server is running on port ${port}`))