'use strict'

const path = require('path');
const fs = require('fs');

//normalizar la tuta antes de usarla o almacenarla 
//es una buena practica
    /*path.normalize('/foo/bar/baz/asdf/quux')*/

//para unir rutas
    /*path.join('/foo','bat','baz/asdf')
    console.log(path.join('/foo', 'bat', 'baz/asdf'));*/

//noa ayuda a unir y a buscar dicha ruta en nuestra pc
//desde el diectorio en el cual estamos 
//rutas absolutas 
    /*var p = path.resolve('/0.puntes','1.NPM.txt')
    console.log(p)
    fs.exists('p', (exists) => console.log('Hello', exists))*/

//relative('from', 'to')
//By using path.relative(), you can also determine
// how to get from one absolute path to another
//absolute path
    /*var p = path.relative('/1.Loading Module/Mymodules', '/app.js');
    console.log(p);*/

//path.dirname('path'): para extraer la ruta y no el archivo 
//si esta asi af/jlo/path.js solo se extrae af/jlo
    /*var dir = path.dirname('../1.Loading Module/Mymodules/loadModule.js')
    console.log(dir)*/


// para extraer solo el documento
//path basename('path')
//af/jlo/path.js => path.js
    /*var basePath = path.basename('../1.Loading Module/Mymodules/loadModule.js')
    console.log(basePath)*/

//para extraer solo el nombre del archivo sin la extension 
   /*var basePath = path.basename('../1.Loading Module/Mymodules/loadModule.js', '.js')
    console.log(basePath)*/

//path.extname('path'), para conoce la extension si es .js =, .json, etc. 
    /*fs.readdirSync('../1.Loading Module/Mymodules').forEach((Element) =>{
       if(path.extname(Element) == '.json'){
          console.log(Element)
       }
    })*/










