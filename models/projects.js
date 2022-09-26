const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema({
    category: { type: String, required: false },
    state: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: true },
    tasksId: { type: Array, required: true },
    process: { type: Number, required: false },
    finishDate: { type: Date, required: false },
})


module.exports = mongoose.model('Projects', ProjectsSchema)