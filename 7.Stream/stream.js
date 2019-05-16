'use strict'
const fs = require('fs')

var readStream = fs.createReadStream('../0.Apuntes/1.NPM.txt')
var writeStream = fs.createWriteStream('hola')
//para establecer el tipo de caracter de envio
    //readStream.setEncoding('utf8')

readStream.pipe(writeStream)

readStream.on('data', (data) =>{
    console.log("Data:", data)
})

//para cuando finalice la lectura

readStream.on('end', () =>{
   console.log('lectura finaliza;');
})

// los argumetos de la funcion createReadStream(path, {arg: value})
// > encoding, 
// > fd: Si ya tiene un descriptor de archivo abierto, puede pasarlo aquí y la secuencia lo asumirá
// > bufferSize: para especificar la cantidad de bytes por cada chunck 
// > start: la posicion del primer byte que se va a leer
// > end: para dejar de leer en dicha posicion 





