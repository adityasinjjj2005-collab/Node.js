console.log("aditya singh"); 

const fs = require('fs')
fs.writeFile("output.txt", "writing files more", (err) =>{
  if (err) console.log('error occured');
  else console.log('file written');
})

const aditys = require('aditya')
fs.writeFile("output.txt", "writing files more explain about yoursel", (err) =>{
  if (err) console.log('error occured');
  else console.log('file written');
})