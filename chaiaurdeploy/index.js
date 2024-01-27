require('dotenv').config()
const express = require('express')
const app = express()
const port = 8080

const githubData = {
    "login": "adiaditya2579",
    "id": 144024145,
    "node_id": "U_kgDOCJWiUQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/144024145?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/adiaditya2579",
    "html_url": "https://github.com/adiaditya2579",
    "followers_url": "https://api.github.com/users/adiaditya2579/followers",
    "following_url": "https://api.github.com/users/adiaditya2579/following{/other_user}",
    "gists_url": "https://api.github.com/users/adiaditya2579/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/adiaditya2579/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/adiaditya2579/subscriptions",
    "organizations_url": "https://api.github.com/users/adiaditya2579/orgs",
    "repos_url": "https://api.github.com/users/adiaditya2579/repos",
    "events_url": "https://api.github.com/users/adiaditya2579/events{/privacy}",
    "received_events_url": "https://api.github.com/users/adiaditya2579/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-09-04T12:04:49Z",
    "updated_at": "2023-12-28T04:58:11Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("hello twitter user")
})

app.get('/login', (req,res)=>{
    res.send("<h1>welcome to login page</h1>")
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>welcome to chai aur code</h2>")
})

app.get('/github', (req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})