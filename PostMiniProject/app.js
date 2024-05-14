const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser');

const app = express()
app.use(express.json())
app.use(cookieparser())
const userModel = require('./models/user')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public', )))


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/create', async (req, res) => {
  let {username,name,age,email,password} = req.body
  const user = await userModel.findOne({email})
  if (user) return res.status(500).send('You already have Account')
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, async function(err, hash) {
        let newUser = await userModel.create({
          username,
          name,
          age,
          email,
          password:hash
        })
        var token = jwt.sign({ email:email , userid:user._id}, 'shhhhh');
        res.cookie('token' ,token)
        res.redirect('/login')
      });
  });
})
app.get('/profile', islogin,(req, res) => {
  console.log(req.user);
})

app.get('/login', (req,res) => {
  res.render('login')
}) 
app.post('/login', async(req,res) => {
  let {email, password} = req.body
  let user = await userModel.findOne({email})
  if(!user) return res.status(404).send('Somthis went wrong')
  
  bcrypt.compare(password, user.password, function(err, result) {
    if(result){
      var token = jwt.sign({ email:email}, 'shhhhh');
      res.cookie('token' ,token)
      res.send('now you are logged in')
      
    }else{
      res.redirect('/login')
    }
  });
})

app.get('/logout',(req,res)=>{
  res.cookie('token', "")
  res.redirect('/')
})

function islogin(req,res,next){
  if(!req.cookies.token ||req.cookies.token === ' ') return res.send('Login is mendotry') 
  else{
    let data = jwt.verify(req.cookies.token ,'shhhhh')
    req.user = data
    }
    
  next()
}



app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})