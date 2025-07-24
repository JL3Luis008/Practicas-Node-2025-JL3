const Task = require('../models/task');

async function getTasks(req, res) {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (err) {
        console.log('Error:', err);
         res.status(400).send({error: err});
    }
}

async function createTask(req, res) {
    try {
        const task = new Task(
            { description: req.body.description });
        await task.save();
        res.status(201).send(task);
    } catch (err) {
        console.log('Error:', err);
        res.status(400).send({error: err});

    }
}

async function updateTasks(req, res) {
    try {
       const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true });
        if (!task) {
      res.status(404).send({message: 'Task not found'});
        }
      res.status(200).send(task);
    } catch(err) {
         console.log('Error:', err);
        res.status(400).send({error: err});
    }
}

async function deleteTask(req, res) {
    try {  
    const task = await Task.findByIdAndDelete(req.params.id);
        if(!task) {
      res.status(404).send({message: 'Task not found'});
        } else {
      res.status(204).send();
    }
      } catch (err) {
        console.log('Error:', err);
        res.status(400).send({error: err});

    }
}

module.exports = {
  getTasks,
  createTask,
  updateTasks,
  deleteTask
}