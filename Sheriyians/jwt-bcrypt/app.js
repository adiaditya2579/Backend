const express = require('express')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const cookieparser  = require('cookie-parser')


const app = express()
app.use(cookieparser())

app.get('/',(req,res)=>{
  let token = jwt.sign({email:'adiaditya2579@gmail.com'},'shhhh')
  res.cookie('token',token)
  res.send('hello')
});

app.get('/read',(req,res)=>{
  let data = jwt.verify(req.cookies.token,'shhhh')
  console.log(data);
})




app.listen('3000')