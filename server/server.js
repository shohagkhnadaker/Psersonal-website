require('dotenv').config()
const app=require('./app')
const PORT=process.env.PORT

app.listen(PORT,async()=>{
    // console.log(colors.bgGray(`server running at http://localhost:${PORT}`));
// await Databage()
})