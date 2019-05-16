'use strict'

const fs = require('fs');

var readStream = fs.createReadStream('../0.Apuntes/1.NPM.txt', {start:20, end:30, encoding: 'utf8'})


readStream.on('data', (data) =>{
    console.log(data)
})