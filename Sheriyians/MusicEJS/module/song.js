const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/textapp')

const songSchema = mongoose.Schema({
  name:String,
  url:String,
  artistname:String,
})

module.exports = mongoose.model("song",songSchema)