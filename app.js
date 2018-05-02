const request = require('request');
const yargs = require('yargs');

const geocode = require ('./geocode/geocode');

const argv = yargs
 .options({
  a: {
      demanded: true,
      alias: 'address',
      describe: 'Address to fetch weather app',
      string: true
     }
 })
 .help()
 .alias('help','h')
 .usage('Usage: -a [address]')
 .demandOption('a')
 .argv;

geocode.geocodeAddress(argv.address);

//console.log(argv);

