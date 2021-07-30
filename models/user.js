const express = require('express')
const mongoose = require('mongoose')

const User = mongoose.Schema({
    username:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    laitude:{
        type : Number,
        required : true
    },
    longitude:{
        type : Number,
        required : true
    },
    code:{
        type : String,
        required : true
    }
    
})

module.exports = mongoose.model('user', User);