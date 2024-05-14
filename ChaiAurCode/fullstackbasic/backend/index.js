import  express  from "express";

const app = express();



app.get('/', (req,res)=>{
  res.send("server is ready")
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`server at https://localhost:${port}`);
})
app.get("/api/jokes", (req,res)=>{
  const jokes = [
    {
      id:1,
      name: "A first Joke",
      joke: "This is a joke"
    },
    {
      id:2,
      name: "A second Joke",
      joke: "This is a joke"
    },
    {
      id:3,
      name: "A third Joke",
      joke: "This is a joke"
    },
    {
      id:4,
      name: "A forth Joke",
      joke: "This is a joke"
    }
  ]
  res.send(jokes)
})


// const port = process.env.PORT || 3000;

// app.listen(port,()=>{
//   console.log(`server at httpa://localhost:${port}`);
// })