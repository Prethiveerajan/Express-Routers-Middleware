// const express = require('express')
// const userRouter = express.Router()
// const listofUser = [
//     {
//         'name' : 'gameDeveloper',
        
//     },
//     {
//         'name' : 'webDesigner',
        
//     },
//     {
//         'name' : 'backendDeveloper',
        
//     },
//     {
//         'name' : 'FrontendDeveloper',
        
//     },
//     {
//         'name' : 'UiDesigner',
        
//     }
// ]
// userRouter.get('/',(response,request)=>{
//     response.send('this is user page')
// })
// userRouter.get('/:id',(request,response)=>{
//     response.send(request.user.name)
// })
// userRouter.param('id',(request,response,next,id)=>{
//     request.user = listofUser[id-1]
//     next()


// })


// module.exports   =  userRouter;

const express = require('express');
const serviceRouter = express.Router();

const listofServices = [
  {
    name: 'gameDeveloper',
  },
  {
    name: 'webDesigner',
  },
  {
    name: 'backendDeveloper',
  },
  {
    name: 'FrontendDeveloper',
  },
  {
    name: 'UiDesigner',
  },
];

serviceRouter.get('/', (request, response) => {
  response.send('This is the service page');
});

serviceRouter.get('/:id', (request, response) => {
  const id = parseInt(request.params.id);
  if (id > 0 && id <= listofServices.length) {
    const serviceName = listofServices[id - 1].name;
    response.send(serviceName);
  } else {
    response.status(404).send('Service not found');
  }
});

module.exports = serviceRouter;
