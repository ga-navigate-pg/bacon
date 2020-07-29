//requires
const operations = require('./operations/basicOperations');
const argv = require('./config/yargs').argv;

const fs = require('fs');
var colors = require('colors/safe');
// set theme
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});




let command = argv._[0];
let data = '';
switch (command) {
    case 'sum':
        data = operations.sum(argv.a, argv.b)
        console.log(`The ${command} of a:${argv.a} and b:${argv.b} is ${data}`);
        break;
    case 'rest':
        data = operations.rest(argv.a, argv.b)
        console.log(`The ${command} of a:${argv.a} and b:${argv.b} is ${data}`);
        break;
    case 'divide':
        data = operations.divide(argv.a, argv.b)
        console.log(`The ${command} of a:${argv.a} and b:${argv.b} is ${data}`);
        break;
    default:
        break;
}


fs.writeFile('./tmp/result.txt', String(data), (err) => {
    if (err) {
        console.log(err);
    }
});