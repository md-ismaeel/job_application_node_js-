const express = require('express')

const jobController = require("../Controller/jobController")

const router = express.Router()

router.post('/api/v1/jobs', jobController.createJob)
router.get('/api/v1/jobs', jobController.jobList)
router.put('/api/v1/jobs', jobController.jobUpdate)
router.delete('/api/v1/jobs', jobController.deleteJob)


module.exports = router;