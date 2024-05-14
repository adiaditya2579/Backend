const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt')
const cookieparser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const userModel = require('./model/user')



const app = express()
app.use(cookieparser())
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))

app.get('/',(req,res)=>{
  res.render('index')
})
app.post('/create',async(req,res)=>{
  let {username,email,password,age} = req.body
  bcrypt.genSalt(10 ,(err,salt)=>{
    bcrypt.hash(password, salt, async (err,hash)=>{
      let createUser = await userModel.create({
        username,
        email,
        password:hash,
        age,
      })

      let token = jwt.sign({email},"shuuuuuuu")
      res.cookie('token',token)
      res.send(createUser)
      
    })
  })
  
})

app.get('/login',(req,res)=>{
  res.render('login')
})

app.post('/login',async (req,res)=>{
  let user = await userModel.findOne({email:req.body.email})
  if(!user) return res.send('Somthing went worng')
    bcrypt.compare(req.body.password, user.password, function(err, result) {
      if(result) {
        let token = jwt.sign({user:user.email}, 'shuuuu')
        res.cookie("token",token)
        res.send("You can Login")
      }
      else res.send("Wrong password")
      
  });
  
})

app.get('/logout',(req,res)=>{
  res.cookie("token" , "")
  res.redirect('/')
})

app.listen(3000,()=>{
  console.log('app is runnig well');
})