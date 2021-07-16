const chalk = require('chalk');
const test = require('./data')

console.log(chalk.blue(test));
console.log(chalk.blue(__dirname));
console.log(chalk.blue(__filename));
