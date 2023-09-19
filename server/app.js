const express =require('express')
const cors=require('cors')
const app=express()
const morgan =require("morgan")
const bodyparser=require('body-parser')
const createError = require('http-errors')
var xss = require('xss-clean')
const limit=require('express-rate-limit')

const UserRoute=(require('./routes/User.route'))

const limiter=limit({
    windowMs:1*60*1000,
    max:5,
  message:'TOO many request from this id. please try again later'  
})

// middle ware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(xss())

//
app.use(express.static(path.join(__dirname, './client/build')))

app.get("*",function (req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

//Router
app.use(UserRoute)



// http Erro
app.use((req,res,next)=>{
res.status(404).json({
    message:"Route not found"
})
})



// Route Error
app.use((req,res,next)=>{
   
    next(createError(404,'route not found'))
    })
    // server ERROR
    app.use((err, req, res, next) => {
      console.error(err.stack)
    return  res.status(err.status || 500).json({
        success:false,
        message:err.message
      })
      })


module.exports=app