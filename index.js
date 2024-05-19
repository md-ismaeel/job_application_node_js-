const express = require('express');
const mongoose = require('mongoose')
const jobRoutes = require('./Routes/jobRoutes')

const app = express()
const port = 8000;

app.use(express.json())


// Db Connecting
mongoose.connect('mongodb://localhost:27017/jobApp')
    .then(() => console.log('Connection with Database established successfully'))
    .catch((err) => console.log(`ERROR CONNECTING WITH DATABASE ${err}`))

app.use(jobRoutes)


app.listen(port, () => console.log(`Server is running on port ${port}`))