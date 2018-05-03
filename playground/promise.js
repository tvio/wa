var asyncAdd = (a,b)=>{
  return new Promise((resolve,reject) =>{
   setTimeout(() => {
     if (typeof a === 'number' && typeof b === 'number'){
         resolve(a+b);
    } else {
        reject('Hele neni to cislo, nemuzu slouzit');
    } 
   },1500);
  });
};

asyncAdd(5,'7').then((res) => {
    console.log('Vysledek:,',res);
    return asyncAdd(res,'33');
},   (error) => {
    console.log(error); 

}).then((res)=>{
    console.log ('Po dalsi secteni by to melo byt 45=>',res);
}).catch((error)=>{
    console.log(error);
});


// var somePromise = new Promise((resolve, reject) => {
//  setTimeout(() => { 
//     resolve('Hey. It worked!');
//     reject('Unable to fullfill promise');
//  },2500);
// });

// somePromise.then((message) => {
//  console.log('Success:',message);
// },(error)=> {
//     console.log(' Heh Error', error);
// })