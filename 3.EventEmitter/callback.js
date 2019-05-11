const fs = require('fs');

fs.readFile('../0.Apuntes/1.NPM.txt', (err, content) => {
    if(err){
        throw err;
    }
    
    console.log('file content', content.toString('base64'))
    writeFileBase64(content.toString('base64'))
})

writeFileBase64 = (content)  => {
    fs.writeFile('../0.Apuntes/proof', content, (err) =>{
        if(err)
            throw err
        console.log('The file has been saved');
    })
}