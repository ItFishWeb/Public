const mongoose = require("mongoose");

const rootSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
   })

const Login = new mongoose.model("Root",rootSchema);

module.exports = Login;