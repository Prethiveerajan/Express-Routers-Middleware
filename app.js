// const express = require('express')
// const app = express ()
// const userRouter = require('./user')
// const service = require('./service')
// const about = require('./about')

// app.get('/',(request,response)=>{
//     response.send('from app.js')
//     response.sendStatus(200)
// }

// )
// app.use('/user',userRouter)
// app.use('/service',service)
// app.use('/about',about)

// app.listen(3400)


const express = require('express');
const app = express();
const userRouter = require('./user');
const serviceRouter = require('./service');
const aboutRouter = require('./about');

app.get('/', (request, response) => {
  response.send('from app.js');
});

app.use('/user', userRouter);
app.use('/service', serviceRouter);
app.use('/about', aboutRouter);

app.listen(3400, () => {
  console.log('Server is running on port 3400');
});

