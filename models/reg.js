const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Ruser = mongoose.Schema({
    username:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    
    


})
Ruser.pre('save',async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password,10)
        this.password = hashedPassword
        next()

    }
    catch(error){
        next(error)
    }
})

module.exports = mongoose.model('Register',Ruser)