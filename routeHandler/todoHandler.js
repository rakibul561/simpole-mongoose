
const express = require('express') ;
const mongoose = require('mongoose') ;
const router = express.Router();
const todoSchema = require('../schemas/todoSchema') ;
const Todo = new mongoose.model("Todo", todoSchema);
 


// Get tha all todos 

router.get('/', async (req, res) => { 
    try {
        const todos = await Todo.find(); // সব টাস্ক আনবে
        res.status(200).json({
            result: todos,
            message: "Todos were found successfully"
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server-side error",
            details: err.message
        });
    }
});


 // GET A TODO BY ID 
router.get('/:id', async (req, res) =>{ 
   
    try {
        const todos = await Todo.find({_id: req.params.id}); 
        res.status(200).json({
            result: todos,
            message: "Todos were found successfully"
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server-side error",
            details: err.message
        });
    }

 })


 // POST A TODO
 router.post('/', async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save(); 
        res.status(200).json({
            message: "Todo was inserted successfully"
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server-side error"
        });
    }
});

 // POST MULTIPOLE TODO 

router.post('/all', async (req, res) =>{ 
   
    try {
        const todos = await Todo.insertMany(req.body);
        res.status(200).json({
            message: "Todos were inserted successfully",
            data: todos
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server-side error",
            details: err.message
        });
    }
    

 })



 // PuT MULTIPOLE TODO 

router.put('/:id', async (req, res) =>{ 
    
    Todo.updateOne(
        { _id: req.params.id },
        { $set: { title: 'i am a frontend developer'} }
    )
    .then((result) => {
        res.status(200).json({
            message: "Todo was updated successfully",
            data: result
        });
    })
    .catch((err) => {
        res.status(500).json({
            error: "There was a server-side error!",
            details: err.message
        });
    });
    

 }) 

 // PuT Deleted TODO 

router.delete('/:id', async (req, res) =>{  


    Todo.deleteOne(
        {_id: req.params.id}
    ) 
    .then((result)=>{
        res.status(200).json({
         message:"todos deleted succesfull",
         data:result ,
        })
    })
    .catch((err)=>{
        res.status(500).json({
        error: "there was a server side error",
        message:err
        })
    })

    
    
    

     

 }) 


 module.exports = router ;