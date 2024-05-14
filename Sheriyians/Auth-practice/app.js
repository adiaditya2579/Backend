const express = require("express");
const path = require("path");
const userModel = require('./model/user')
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser')
var jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render('register')
});
app.post('/create',async (req,res)=>{
  let {name,email,password,age} = req.body

  bcrypt.genSalt(10,  (err, salt)=> {
    bcrypt.hash(password, salt, async(err, hash)=> {
      let newuser = await userModel.create({
        name,
        email,
        password:hash,
        age
      })
      var token = jwt.sign({ email }, 'shhhhh');
      res.cookie('mycookie',token)
      res.redirect('/login')
  });
  });
})

app.get('/login',(req,res)=>{
  res.render('login')
})
app.post('/login', async(req,res)=>{
  let user = await userModel.findOne({email:req.body.email})
  if(!user) return res.send('Sonthing went wrong')
    bcrypt.compare(req.body.password, user.password, function(err, result) {
      if(result){
        var token = jwt.sign({user:user.email }, 'shhhhh');
        res.cookie('mycookie',token)
        res.send('Now you are login')
      }
  });

})

app.get('/logout',(req,res)=>{
  res.cookie('mycookie','')
  res.redirect('/login')
})

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
