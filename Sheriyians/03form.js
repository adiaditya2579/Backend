// form handling and working with form

// handal backend process of form and making sure the data coming from any frontend library fw , tamplating engine we still handle it at the backend 

// hum log kuchh bhi data frontend par browser per rakh sakte hai and jab bhi aap kuchh bhi request backend per karoge wo fe par saved data automatically backend per chala jaayega


const express = require('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended:true}))

app.use(function(req, res, next){
  console.log("middlewaree chala");
  next()
})
app.use(function(res,req,next){
  console.log("middlewaree for another route");
  next()
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/about',function(req, res,next) {
  return next( new Error("not implemented"))
  
})

app.use((err,req,res,next)=>{
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.listen(3000)