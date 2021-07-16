const os = require('os');

console.log('Operation system: ', os.platform());
console.log('Processor architecture: ', os.arch());
console.log('Info about CPUs: ', os.cpus());
console.log('Free memory: ', os.freemem());
console.log('All memory: ', os.totalmem());
console.log('Home dir: ', os.homedir());
console.log('Uptime: ', os.uptime());