const fs = require('fs');

const readStream = fs.createReadStream('../0.Apuntes/2.InstroducingNode.txt')
const writeStream = fs.createWriteStream('../0.Apuntes/proof')

readStream.pipe(writeStream)

var func = () => {
        console.log('Finalizada la lectura');
}
readStream.on('data', (chunk) => {
    console.log(`He leido ${chunk.length} datos`);
})
readStream.on('data', func)
//en cualquiermomento se va a eliminar. 
readStream.removeListener('data', func)

// readStream.once('data', (chunk) =>{
//     console.log(chunk.toString())
// })

readStream.on('end', () =>{
    console.log('Finalizada la lectura');
   // console.log(`Duracion del proceso ${process.}`);
})


