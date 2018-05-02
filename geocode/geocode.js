
const request  = require('request');

var geocodeAddress = (address) => {

var encodeAddr = encodeURIComponent(address);
console.log (encodeAddr);

request({
    url: `https://maps.google.com/maps/api/geocode/json?address=${encodeAddr}&key=AIzaSyBsz7ns_gXieBPQhuGw0XqV758PXzjUngc`,
    json: true
},(err,res, body)=>{
    if (err){
        cosnole.log('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS'){
        console.log('Unable to find that address.');   
    } else if (body.status === 'OK'){
        console.log('Načteno');
          console.log(`Address:${body.results[0].formatted_address}`);
          console.log(`Souřadnice šířka: ${body.results[0].geometry.location.lat}`);
          console.log(`Souřadnice délka: ${body.results[0].geometry.location.lng}`);
    }
  
});
};

//https://maps.google.com/maps/api/geocode/json?address=Prague,Czech%20Republic&key=AIzaSyBsz7ns_gXieBPQhuGw0XqV758PXzjUngc


module.exports.geocodeAddress = geocodeAddress;