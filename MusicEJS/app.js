const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.set('view engine',"ejs")
let songModle = require('./module/song')



app.get('/',(req,res)=>{
  res.render('form')
})

app.post('/create',async(req,res)=>{
  
    const { name, url, artistname } = req.body;
    const createdCard = await songModle.create({
      name,
      url,
      artistname,
    });
    res.send(createdCard)
});




app.get('/cards',(req,res)=>{
  res.render('cards')
})

app.listen(3000,()=>{
  console.log('app is running fine');
})