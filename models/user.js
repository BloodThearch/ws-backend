const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
        
        default : 0.00
    },
    longitude:{
        type : Number,
        
        default : 0.00
    },
    code:{
        type : String,
        
    },
    mobile:{
        type:Number
    }

    
})
User.pre('save',async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password,10)
        this.password = hashedPassword
        next()

    }
    catch(error){
        next(error)
    }
})

module.exports = mongoose.model('user', User);