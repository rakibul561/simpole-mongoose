 const express = require('express')
 const mongoose  = require('mongoose') 
 const todoHandler = require("./routeHandler/todoHandler")

//  express app initialization 
 const app = express();
 app.use(express.json());
  
 //   connect with mongoose 
   

   mongoose.connect('mongodb://localhost:27017/todos')
   .then( () => console.log('connection succesfully '))
   .catch(err => console.log(err)
   )




//   application route 


app.use('/todo',todoHandler);
   
   
//  default error handeling 
   function errorHandler (err, req, res, next) {
    if(res.headersSent){
       
        return next(err);
    }
    res.status(500).json({error: err})
   } 


   
   app.listen(3000, () =>{
     console.log("app listening at port 3000");
     
   })



