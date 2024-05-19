const express = require('express')

// const jobController = require("../Controller/jobController")
const { createJob, jobList, jobUpdate, deleteJob } = require("../Controller/jobController")

const router = express.Router()

router.post('/api/v1/jobs', createJob)
router.get('/api/v1/jobs', jobList)
router.put('/api/v1/jobs/:id', jobUpdate)
router.delete('/api/v1/jobs/:id', deleteJob)


module.exports = router;