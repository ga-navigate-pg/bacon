const opts = {
    a: {
        demandOption: true
    },
    b: {
        demandOption: true
    }
}

const argv = require('yargs')
    .command('sum', 'Sum a + b = c', opts)
    .command('rest', 'Rest a - b = c', opts)
    .command('divide', 'Divide a / b = c', opts)
    .help()
    .argv;

module.exports = {
    argv
}