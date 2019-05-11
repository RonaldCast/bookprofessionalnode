'use strict'
const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (res) => {
    let data = ''


    //writing the chunk of data
    res.on('data', (chunk) =>{
        data += chunk
        console.log(data)
    })

    res.on('end', () => {
       
        console.log(JSON.parse(data).explanation)

    })
}).on('erro', (err) => {
    console.log(`Error: ${err.message}`)
})
