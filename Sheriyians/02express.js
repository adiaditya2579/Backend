const express = require('express')
const app = express()

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
 