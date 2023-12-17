let celsius = myyFunction(100);
function myyFunction(fahrenheit){
    return (5/9) *(fahrenheit-32);
}

// example of local variable
document.getElementById("demo").innerHTML= "Celsius = " + celsius;
let carName= "Volvo1";
let tex = "Outside carName " + typeof carName ;
document.getElementById("demo-1").innerHTML=tex;

function myFunction(){
    let carName="Volvo2";
    let tex= "Inside text " + typeof carName + " "+ carName;
    document.getElementById("demo-2").innerHTML= tex;
}
myFunction()