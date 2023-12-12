let char="sdrfgtyhertretre";
var lenth=char.length
document.getElementById("demo").innerHTML= char.length;
console.log(lenth);

// String slice() use
let txt= "Apple, Banana, Kiwi";
let part= txt.slice(-13,-2);
console.log(part);
document.getElementById("slice_1").innerHTML= txt.slice(2,8)  + " / used (2,8)"; 
document.getElementById("slice_2").innerHTML= txt.slice(-15,-7)+ " / used (-15,-7)";
document.getElementById("slice_3").innerHTML= txt.slice(8) + " /  used (8)"; 
document.getElementById("slice_4").innerHTML= txt.slice(-7) +  " / used(-7)";

// JavaScript String substring()
let str= "Apple, Banana, Kiwi";
let result= str.substring(2,4);
document.getElementById("substring-1").innerHTML= str.substring(2,8)  + " / used (2,8)"; 
document.getElementById("substring-2").innerHTML= str.substring(-15,-7)  + " / used (-15,-7)"; 
document.getElementById("substring-3").innerHTML= str.substring(8)  + " / used (8)"; 
document.getElementById("substring-4").innerHTML= str.substring(-7)  + " / used (-71)"; 


let fff="0123456789"
console.log(fff)
console.log(fff.slice(3,-1));
console.log(fff.slice(-3-1))