const jobModel = require("../Models/jobModel")

const createJob = async (req, res) => {

    try {
        const obj = req.body;
        const newJob = new jobModel(obj)
        const savedDataJob = await newJob.save()
        // console.log(savedDataJob);
        res.json({
            sucess: true,
            message: 'job created successfully',
            jobData: savedDataJob
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong please try again after sometime',
        })
    }

}

const jobList = async (req, res) => {
    try {
        const { minSal, maxSal } = req.query;
        const jobListData = await jobModel.find({
            $and: [
                { salary: { $gte: minSal } },
                { salary: { $lte: maxSal } }
            ]
        })


        const ageData = await jobModel.find({
            $and: [
                { age: { $gt: 20 } },
                { age: { $lte: 100 } }
            ]
        })

        res.status(201).json({
            success: true,
            message: 'jobList api data',
            jobData: ageData
        })
    } catch (err) {
        res.status(500).json({
            sucess: false,
            message: 'Internal Server error'
        })
    }
}

const jobUpdate = async (req, res) => {
    try {
        const jobId = req.params.id;
        console.log(jobId);
        const findObj = {
            title: "Front-end Developer ismail",
            age: 23,
            "company": "microsoft",
            "location": "Hyderabad",
        }
        const updated = await jobModel.findByIdAndUpdate(jobId, findObj)
        // const updated = await jobModel.findOneAndUpdate(jobId, findObj)

        res.json({
            success: true,
            message: 'job Updated Successfully',
            updatedData: updated
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something wend wrong please try again'
        })
    }
}


const deleteJob = async (req, res) => {
    try {
        const jobId = req.params.id;
        console.log(jobId);

        // const deletedData = jobModel.findByIdAndDelete(jobId)
        const deletedData = await jobModel.findOneAndDelete(jobId)

        res.json({
            success: true,
            message: 'job deleted successfully',
            data: deletedData
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            sucess: false,
            message: "Something went wrong please try again"
        })
    }
}

const jobController = {
    createJob,
    jobList,
    jobUpdate,
    deleteJob
}

module.exports = jobController;