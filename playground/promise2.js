const request  = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject)=>{
    const encodeAddr = encodeURIComponent(address);
    console.log (encodeAddr);
    
    request({
        url: `https://maps.google.com/maps/api/geocode/json?address=${encodeAddr}&key=AIzaSyBsz7ns_gXieBPQhuGw0XqV758PXzjUngc`,
        json: true
    },(err,res, body)=>{
        if (err){
            reject('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS'){
            reject('Unable to find that address.');   
        } else if (body.status === 'OK'){
            resolve({
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
          }
      
    });
});
};

geocodeAddress('19146').then((location)=>{
   console.log(JSON.stringify(location,undefined,2));
}, (error) => {
    console.log(error);
})