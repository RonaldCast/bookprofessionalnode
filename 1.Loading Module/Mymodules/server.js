'use strict'
const http = require('http');

function handlerServer(req, res) {
        res.end("Hello world")
}

var server = http.createServer(handlerServer)

    server.listen(3000, () => {
        console.log("http://localhost:3000")
    })

module.exports.server = server


