const express = require('express');

const router = express.Router();
const auth = require('../middleware/authenticationMiddleware')
const Task = require('../modals/Task')

router.get('/test', (req, res) => {
    res.send("task routes are working")
})

//curd task for authenticated users

//create a task
router.post('/', auth, async (req, res) => {

    try {
        //description,complted from req.body
        //try to get owner:req.user._id
        const task = new Task({
            ...req.body,
            owner: req.user._id
        })
        await task.save();
        res.status(200).json({
            task,
            meassage: "New task added successfully"
        })
    }
    catch (error) {
        res.status(400).send({ error: error.message })
        console.log(error.message)
    }
})

//get the tasks
router.get('/', auth, async (req, res) => {
    try {
        const tasks =await Task.find({ owner: req.user._id })
        res.status(200).send({ tasks })
    } catch (error) {
        res.status(404).send({ error: error.meassage })
        console.log(error.message)
    }
})


module.exports = router