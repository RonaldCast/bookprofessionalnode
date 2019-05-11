var em = new (require('events').EventEmitter)()
em.emit('data', () =>{
    console.log('Hello word');
})
em.emit('error', new Error("My mistale"))