const express = require('express')
const router = express.Router()
const Users = require('../models/user')

router.get('/',(req,res)=>{
    res.send("gay")

})

module.exports = router
