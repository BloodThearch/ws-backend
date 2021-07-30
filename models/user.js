const express = require('express')
const mongoose = require('mongoose')

const user = mongoose.Schema({
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

const User = module.exports = mongoose.model('USER',user)