const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
description: {
    type:String,
    require:true
},
complete: {
    type:Boolean,
    default:false
}
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;