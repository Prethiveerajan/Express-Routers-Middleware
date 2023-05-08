const express = require('express')
const userRouter = express.Router()
const listofUser = [
    {
        'name' : 'gameDeveloper',
        
    },
    {
        'name' : 'webDesigner',
        
    },
    {
        'name' : 'backendDeveloper',
        
    },
    {
        'name' : 'FrontendDeveloper',
        
    },
    {
        'name' : 'UiDesigner',
        
    }
]
userRouter.get('/',(response,request)=>{
    response.send('this is user page')
})
userRouter.get('/:id',(request,response)=>{
    response.send(request.user.name)
})
userRouter.param('id',(request,response,next,id)=>{
    request.user = listofUser[id-1]
    next()


})


module.exports   =  userRouter;