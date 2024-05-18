const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({

    tittle: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    company: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    salary: {
        type: Number,
        require: true,
        default: 0
    },
    age: {
        type: Number,
        default: 0
    }
})

const jobModel = mongoose.model('jobApp', jobSchema)

module.exports = jobModel;