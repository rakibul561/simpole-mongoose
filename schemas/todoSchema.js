 
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
todoSchema.methods = {
   findInActive: function() {
    return mongoose.model("Todo").find({status: 'active'}) ;
   },
   findInActiveCallback: function(cb) {
    return mongoose.model("Todo").find({status: 'active'}, cb) ;
   }
} 



module.exports = todoSchema ;