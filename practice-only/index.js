//demo return funtion 
function $_function1_$Name(parameter1, parameter2, parameter3){
return (parameter1+parameter2)*parameter3;
}
var value= $_function1_$Name(10,20,30);
document.getElementById("demo").innerHTML=value;


// the () operator function
function toCelsius(fahrenheit){
    return (5/9)*(fahrenheit-32);
}
let CelsiusDegree =toCelsius(103);
document.getElementById("celsius").innerHTML= "Celsius = "+ CelsiusDegree;


// Functions Used as Variable Values
let text="The Temperature is:" + toCelsius(100) + "degree Celsius";
var x= toCelsius(99);
function toCelsius(f){
    return (5/9)*(f-32);
}
document.getElementById("celsius-2").innerHTML= text  +  " <br> " +  x + " <br> "+" <br> "+" <br> "+" <br> ";


//local variable declear
let car_Name = 3455;
let massage = "Outside " + typeof car_Name +"<br>";
document.getElementById("localV1").innerHTML= massage;
function myFunction(){
    let car_Name="BMW";
    let massage = "inside function : " + typeof car_Name + " "+ car_Name;
    document.getElementById("localV2").innerHTML=massage;
    console.log("massage")
}
myFunction();

