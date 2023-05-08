const express = require('express')
const aboutRouter = express.Router()
aboutRouter.get('/',(request,response)=>{

    response.send("this is about page")
})

module.exports = aboutRouter