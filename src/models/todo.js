const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        trim:true
    },

   
    description: {
        type:String,
        required:true,
        trim:true,
        minlength:10,
        maxlength:300
    },

   
},  {timestamp: true})


module.exports = mongoose.model('Todo', todoSchema)