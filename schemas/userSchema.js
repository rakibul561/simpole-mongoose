 
 const mongoose = require('mongoose') 

 const userSchema = mongoose.Schema({
    //  create a user validation  
     name: {
         type: String ,
         required: true,
     },
     username: {
         type: String ,
         required: true,
     },
     password: {
         type: String ,
         required: true,
     },
    number: {
       type:Number ,
       required: true 
     },
     status : {
         type: String ,
         enum: ['active', 'inactive']
     },
     Date: {
         type: Date ,
         default: Date.now ,
     },
    
 })  
 

 
 
 
 module.exports = userSchema ;