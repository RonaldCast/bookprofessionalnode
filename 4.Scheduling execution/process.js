'use strict'
/*process.nextTick(() =>{
    console.log("ddd")
})*/


//Eventos bloqueantes 

         process.nextTick(() => {
             var a = 0
             while (true) {
                 a++
             }
         })





process.nextTick(() => {
    console.log('next tick')
})
setTimeout(function timeout() {
    console.log("timeout");
}, 1000);

