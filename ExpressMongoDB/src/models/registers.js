const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    need:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true,
    }


})

const Register = new mongoose.model("Registers",employeeSchema);

module.exports = Register;