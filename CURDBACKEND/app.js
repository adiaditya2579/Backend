const express = require('express')
const app  = express()
const userModel = require('./usermodel')

app.get('/',function(req,res){
  res.send('this is all goode')
})

app.get('/create',async (req,res)=>{
   let newuser  = await userModel.create({
    name:'Sarthak',
    username:'sarhrakshukla',
    email  :'sarthakshuka2579@gmail.com'
  })
  res.send(newuser)
})

app.get('/update',async (req,res)=>{
  let updateuser = await userModel.findOneAndUpdate({ username:'adiaditya'}, {name:'Anurag'}, {new:true})
  res.send(updateuser)

})
app.get('/read',async(req,res)=>{
  let readuser = await userModel.find()
  res.send(readuser)
})

app.get('/delete',async(req,res)=>{
  let users  = await userModel.findOneAndDelete({usename:'sarhrakshukla'})
  res.send(users)
})




app.listen("3000",()=>{
  console.log('All good');
})