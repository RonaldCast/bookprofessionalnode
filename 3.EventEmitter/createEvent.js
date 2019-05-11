'use strict'

var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Pay(amount){
    this.amount = amount;
        setTimeout(() => {
            this.emit('discount')
        }, 0)
}

Pay.prototype.discount = function() {
     this.amount = this.amount - 10 ;
     return this.amount
  
}
util.inherits(Pay, EventEmitter)

var pay1 = new Pay(40);

pay1.on('discount', () =>{ 
   
    console.log("valor: ", pay1.discount())
})

