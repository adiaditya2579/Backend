const fs = require('fs')
const http = require('http')
// fs.writeFile('hey.txt','hey,I am create this using node write file',(err)=>{
//   if(err) console.error(err);
//   else console.log('done');
// })



// fs.appendFile('hey.txt','\nhey I am appending this using append file',(err)=>{
//   if(err) console.error(err);
//   else console.log("done");
// })



// fs.rename('hey.txt','Text.txt',(err)=>{
//   if(err) console.error(err);
//   else console.log('Done');
// })



// fs.copyFile('Text.txt','./copy/Text.txt',()=>{
//   console.log('ho gya');
// })  



// fs.unlink('./copy/Text.txt',(err)=>{
//   if(err) throw(err)
//   console.log("./copy/Text.txt was deleted");
// })


// rmdir not remove those file witch is are not empty so for those file we have to give recursive as true because it is by defult felse



// fs.rmdir('./copy',{recursive:true},(err)=>{
//   if(err) throw(err.message)
//   console.log("Direactry deleted");
// })


const server = http.createServer((req,res)=>{
  res.end("chandrakala world")
})

server.listen(3000)