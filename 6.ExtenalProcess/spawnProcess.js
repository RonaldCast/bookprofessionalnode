'use strict'

//para poder leer stdin se tiene que llama process.stding.resume()
//process.stdin.resume();
 var number;
process.stdin.on('data', function (data) {
    number;
    try {
        // parse the input data into a number
        number = parseInt(data.toString());
        number += 1;

        // output the number
        process.stdout.write(number + "\n");
    } catch (err) {
        process.stderr.write(err.message + "\n");
    }
});
