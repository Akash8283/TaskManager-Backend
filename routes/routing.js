const express = require("express")
const taskController = require("../controllers/taskController")

const router = new express.Router()

// create task
router.post('/task',taskController.addTaskController)

// get all task
router.get('/task',taskController.getAllTaskController)

// delete task
router.delete('/task/:id',taskController.deleteTaskController)

module.exports = router