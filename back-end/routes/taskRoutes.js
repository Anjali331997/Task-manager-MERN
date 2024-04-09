const express = require('express');

const router = express.Router();
const auth = require('../middleware/authenticationMiddleware')


router.get('/test',(req,res)=>{
res.send("task routes are working")
})

//curd task for authenticated users

//create a task
router.post('/',auth,async (req,res)=>{

})


module.exports=router