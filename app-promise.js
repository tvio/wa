const request = require('request');
const yargs = require('yargs');
const axios = require('axios');
const small = require('./small/dateformat');

const argv = yargs
 .options({
  a: {
      demanded: false,
      alias: 'address',
      describe: 'Address to fetch weather app',
      string: true
     }
 })
 .help()
 .alias('help','h')
 .usage('Usage: -a [address] or without address for location Prague')
// .demandOption('a')
 .argv;
console.log(argv);


if (typeof(argv.a) == 'undefined') {
 var encodeAddr = ('Prague, Czechia');
} else {
 var encodeAddr = encodeURIComponent(argv.a);
};

 var geocodeUrl = `https://maps.google.com/maps/api/geocode/json?address=${encodeAddr}&key=AIzaSyBsz7ns_gXieBPQhuGw0XqV758PXzjUngc`;

axios.get(geocodeUrl).then((response) => {
  if (response.data.status ==='ZERO_RESULTS'){
      throw new Error('Unable to find that address.');
  }

  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/f10d0bf15317047407d1de6aaa9b3714/${lat},${lng}?lang=cs&units=si`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
})
.then((response) =>{
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`je tato teplota ${temperature}, pocitove je jeko ${apparentTemperature}`); 
 // console.log(`Cas ${response.data.hourly.data[0].time}`);
  for (var i in response.data.hourly.data) {
    console.log(`Cas ${small.cformat(response.data.hourly.data[i].time)}, teplota ${response.data.hourly.data[i].temperature}`);
 }

})
.catch((e)=>{
   if (e.code === 'ENOTFOUND'){
   console.log('Neni mozne se dostat na Google server');
   }else  {
   console.log(e.message);
   }
   
});




