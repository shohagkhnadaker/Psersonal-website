const express=require('express')
const router=express.Router()
const multer=require('multer')
const upload = multer({ dest: './uploads/' })


const { recevMail } = require('../controlars/User.controlar')



router.post('/user/recive-email', recevMail)


module.exports=router