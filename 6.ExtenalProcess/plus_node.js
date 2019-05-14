'use strict'

const {
    spawn
} = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});