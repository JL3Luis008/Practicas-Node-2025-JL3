const express = require('express');
const router = express.Router();

const { 
    getTasks,
    createTask,
    updateTasks,
    deleteTask
} = require('../controlers/taskController');


router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTasks);
router.delete('/tasks/:id', deleteTask);

module.exports = router;