const request = require('request');
const yargs = require('yargs');

const geocode = require ('./geocode/geocode');
const weather = require ('./weather/weather');

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


geocode.geocodeAddress(argv.address, (err,res)=>{
    if (err) {
        console.log(err);
    } else{
        console.log(res.address);
        weather.getWeather(res.lat,res.lng, (res,err)=>{
            if (err) {
                console.log(err);
            } else{
                console.log(JSON.stringify(res,undefined,2));
            }
        });
    }
});






