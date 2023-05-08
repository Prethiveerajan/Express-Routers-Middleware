const express = require('express')
const userRouter = express.Router()

userRouter.get('/',(request,response)=>{

    response.send("this is user page")
})

module.exports = userRouter