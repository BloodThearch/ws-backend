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

const r_user = module.exports = mongoose.model('Register',Ruser)