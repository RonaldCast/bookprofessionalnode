'use strict'

var interval = 1000;

(function schedule() {
    setTimeout(function do_it() {
        my_async_function(function () {
            console.log('async is done!');
            schedule();
        });
    }, interval);
}());
