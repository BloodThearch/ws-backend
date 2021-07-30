const express = require('express')
const mongoose = require('mongoose')

const Ruser = mongoose.Schema({
    username:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    mobile:{
        type : Number,
        required : true,
    },


})

module.exports = mongoose.model('Register',Ruser)