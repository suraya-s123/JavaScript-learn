let x ="sur'SK'aya";
document.getElementById("demo").innerHTML=x;
console.log(x)

//lenth
let char="qwqweasdrf";
console.log(char.length);
document.getElementById("length").innerHTML=char.length;

// Escape Character

let escape_dq = "We are the so-called \"Vikings\" from the north.";
document.getElementById("escape_dq").innerHTML=escape_dq;

let escape_sq = "We are the so-called \'Vikings\" from the north.";
document.getElementById("escape_sq").innerHTML=escape_sq;

let esqcap_1= "gggf \f hggj";
let esqcap_2= "gggf \f hggj";
let esqcap_3= "gggf \n hggj";
let esqcap_4= "gggf \b hggj";
let esqcap_5= "gggf \t hggj";
let esqcap_6= "gggf \v hggj";
document.getElementById("escape_sq").innerHTML= esqcap_1 + " " + esqcap_2 +" " + esqcap_3 + " " +esqcap_4+ " "+ esqcap_5+ " " +esqcap_6 ;

let d= "abiya"
let y= new String("abiya");
document.getElementById("demo").innerHTML= (d==y);