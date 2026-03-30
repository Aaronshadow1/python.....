console.log(__filename);
console.log(__dirname);
var si=setInterval(function(){
    console.log("die")
},1000);
setTimeout(()=>{
    clearInterval(si)
},4000);