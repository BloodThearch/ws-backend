const express = require('express')
const router = express.Router()
const Users = require('../models/user')
const R_user = require('../models/reg')

router.get('/',(req,res)=>{
    res.send("gay")

})

module.exports = router
