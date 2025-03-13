
const express = require('express') ;
const mongoose = require('mongoose') ;
const router = express.Router();
const todoSchema = require('../schemas/todoSchema') ;
const Todo = new mongoose.model("Todo", todoSchema);
 


// Get tha all todos 

router.get('/', async (req, res) =>{

})


 // GET A TODO BY ID 

router.get('/:id', async (req, res) =>{

 })


 // POST A TODO

 router.post('/', async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();  // ✅ No callback needed
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

 })

 // PuT MULTIPOLE TODO 

router.put('/:id', async (req, res) =>{

 })

 // PuT Deleted TODO 

router.delete('/:id', async (req, res) =>{

 }) 


 module.exports = router ;