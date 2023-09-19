const express=require('express')
const router=express.Router()


const { recevMail } = require('../controlars/User.controlar')



router.post('/user/recive-email', recevMail)


module.exports=router