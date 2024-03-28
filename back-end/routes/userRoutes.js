const express = require('express');
const User = require('../modals/User')
const router = express.Router();

router.get('/',(req,res)=>{
res.send("USer routes are working")
})

//sign-up
//login-up

module.exports=router