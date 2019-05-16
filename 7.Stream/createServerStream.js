'use strict'
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    var rs = fs.createReadStream('./hola')

    //metodo corto
    rs.pipe(res, {end:false})

    rs.on('end', () => {
        res.write("And that's all, folks!");

        console.log("hello")
        res.end()
    })

    //metodo largo
    // rs.on('data', (data) => {
    //     if(!res.write(data)){
    //         rs.pause()
    //     }
    // })

    // res.on('drain', () => {
    //     rs.resume()
    // })

    // rs.on('end', () => {

    // })
}).listen(3000)

console.log("http://localhost:3000")