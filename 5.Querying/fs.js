'use strict'

const fs = require('fs');

//para requerir metainformacion sobre los archivos 
//fs.stact
   /* fs.stat('../0.Apuntes/1.NPM.txt', (err, stats) => {
        if(err)
            throw err

        console.log(stats)
    })*/

// para abrir un archivo y manipularlo 
//fs.open(path, flags, callback)
//flags: r, r+, w, w+, a, or a+
    /*fs.open('../0.Apuntes/1.NPM.txt', 'r' ,(err, df) =>{
        console.log()
    })*/

//leyendo el archivo 
    /*fs.open('../0.Apuntes/1.NPM.txt', 'r', (err, fd) =>{
        if (err) {
            throw err
        }

        let readBuffer = new Buffer.alloc(2024)
        let bufferOffSet = 0
        let  bufferLenght = 255
        let filePosition = 0
        fs.read(fd, readBuffer, bufferOffSet, bufferLenght, filePosition, (err, readBytes) =>{
            if (err) {
                    throw err;
                }
            if(readBytes > 0){
                console.log(readBuffer.slice(0, readBytes).toString())
            }
        
        })
    })*/

// Escribiendo un archivos 
/*fs.open('../0.Apuntes/proof.txt','a' ,(err, df) =>{
    if(err)
        throw err
    
    let writeBuffer = new Buffer.from(" Hello lola pepe"),
        bufferPosition = 0,
        bufferLength = writeBuffer.length,
        filePosition = null;
    fs.write(df, writeBuffer, bufferPosition, bufferLength, filePosition, (err, written) =>{
        if(err) 
            throw err;
        
        console.log('wrote ' + written + ' bytes')
    })

})*/


//para cerrar el archivo en cuention 
 /*function notifyError(err) {
     fs.close(fd, function () {
         callback(err);
     });
 }*/



//Se encarga de cerrar el archivo y de enviar un mensaje
// de error 
/*openAndWriteToSystemLog(
        new Buffer('writing this string'),
        function done(err) {
            if (err) {
                console.log("error while opening and writing:", err.message);
                return;
            }
            console.log('All done with no errors');
    }
*/

/*function openAndWriteToSystemLog(writeBuffer, callback) {
    fs.open('./my_file', 'a', function opened(err, fd) {
        if (err) {
            return callback(err);
        }

        function notifyError(err) {
            fs.close(fd, function () {
                callback(err);
            });
        }
        var bufferOffset = 0,
            bufferLength = writeBuffer.length,
            filePosition = null;
        fs.write(fd, writeBuffer, bufferOffset, bufferLength, filePosition,
            function wrote(err, written) {
                if (err) {
                    return notifyError(err);
                }
                fs.close(fd, function () {
                    callback(err);
                });
            }
        );
    });
}
openAndWriteToSystemLog(
    new Buffer('writing this string'),
    function done(err) {
        if (err) {
            console.log("error while opening and writing:", err.message);
            return;
        }
        console.log('All done with no errors');
    }
);*/










