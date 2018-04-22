console.log('starting app');

setTimeout(()=>{
    console.log('Inside of callback');
},2000);

setTimeout(() =>{
    console.log('Inside of callback delay 0');
},0);

console.log('Finishing up');