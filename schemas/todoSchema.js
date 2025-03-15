 
 const mongoose = require('mongoose') 

const todoSchema = mongoose.Schema({
   
    title: {
        type: String ,
        required: true,
    },

    description:  String ,
    status : {
        type: String ,
    },
    Date: {
        type: Date ,
        default: Date.now ,
    },
   
})  

//   instance methods
todoSchema.methods = {
   findInActive: function() {
    return mongoose.model("Todo").find({status: 'active'}) ;
   },
  
}  

//  static methods 

 todoSchema.statics = {
   findByJs: function(){
    return this.find({title: /js/i });
   }
 }



module.exports = todoSchema ;