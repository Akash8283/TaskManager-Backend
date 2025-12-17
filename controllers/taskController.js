const tasks = require("../models/taskModel")

exports.addTaskController = async(req,res)=>{
    const {title} = req.body
    try{
        if (!title) {
            res.status(400).json("Please Enter the Task")
        }
        else{
            const task = await tasks.create({title})
            res.status(200).json(task)
            console.log(`Task Added Successfully: ${title}`);

        }
    }catch(err){
        console.log(err);
        res.status(500).json("Something went wrong")
    }
}

exports.getAllTaskController = async(req,res)=>{
    try{
        const task = await tasks.find().sort({createdAt: -1})
        res.status(200).json(task)
    }catch(err){
        console.log(err);
        res.status(500).json("Something went wrong")
    }
}

exports.deleteTaskController = async(req,res)=>{
    const {id} = req.params
    try{
        const deletedTask = await tasks.findByIdAndDelete(id)
        if (!deletedTask) {
            res.status(404).json("Task not found")
        }
        else{
            res.status(200).json("Task Deleted Successfully")
            console.log("Task Deleted Successfully");
            
        }
    }catch(err){
        console.log(err);
        res.status(500).json("Something went wrong")
    }
}

