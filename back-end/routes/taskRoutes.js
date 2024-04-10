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
    }
})


module.exports = router