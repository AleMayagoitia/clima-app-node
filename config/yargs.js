const argv = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true

    }
}).help().argv;

module.exports = {
    argv
}