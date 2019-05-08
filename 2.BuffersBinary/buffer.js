'use strict'
//creando buffer
    /*var buf = new Buffer.from('Hola')
    var buf1 = new Buffer.alloc(1024)
    console.log(buf.length)
    console.log(buf)
    buf1[10] = 85 
    console.log(buf1.toString('utf8')) */

//accediendo a los datos del buffer
    //console.log(buf[2]);

//iterando en el buffer

    /*var buf2 = new Buffer.alloc(100)

    for (let i = 0; i < buf2.length; i++) {
        buf2[i] = i;
    }
    console.log('buf2', buf2)*/

//slide buffer; el objecto segundario creado puede perder byte y le primariones modificado
    /*var buffer = new Buffer.from("this is the content of my buffer")
    var smallerBuffer = buffer.slice(1,19)
    buffer[1] = 99
    console.log(smallerBuffer.toString('utf8'));*/

// copiando buffer // si se modifica el prinipal no se modifica el segundario. 
    /*var buffer1 = new Buffer.from("this is the content of my buffer")
    var buffer2 = new Buffer.alloc(11)
    buffer1.copy(buffer2, 0, 0, 8);
    buffer1[1] = 99

    console.log(buffer2.toString());*/

//decoding buffer 

var buf = new Buffer.from('my string')
var b64Str = buf.toString("base64");
var buf1 = new Buffer.from(b64Str, "base64")
console.log(buf1.toString());








