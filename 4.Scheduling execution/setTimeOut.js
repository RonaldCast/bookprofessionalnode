   var clearTimeOut = setTimeout(() =>{
        console.log('Hello word')
    }, 2000)

setTimeout(() => {
    clearTimeout(clearTimeOut)
    console.log('Eliminada')
})
