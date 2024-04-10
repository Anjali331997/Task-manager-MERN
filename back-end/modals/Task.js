const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: { typpe: String, required: true },
    completed: { type: Boolean, default: false },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

const Task = mongoose.model('task', taskSchema);

module.exports = Task;