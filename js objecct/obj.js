 let car = "Fiat";
 document.getElementById("demo").innerHTML=car;
 const car_2={type:"Fiat", model:"500", color:"red"};
 console.log(car_2.model);
 document.getElementById("demo").innerHTML= "The car type is " +car_2.type;

 const person= {fName:"Suraya", lName:"Sarmin", age:"23"};
document.getElementById("demo").innerHTML= person.fName + " " +person.lName +"is " + person.age +" yeares old.";
console.log(person["fName"]);
document.getElementById("demo").innerHTML= person["lName"];

//use in the function object

const pertion ={
    fName:"Suraya",
    lName:"Sarmin",
    age: 23,
    full_Name : function() {
        return this.fName +" "+this.lName; 

    }
};
document.getElementById("demo").innerHTML=pertion.full_Name();
const pertson={
    fName: "Suraya",
    lName: "Sarmin",
    age: 23,
    fullName: function(){
        return this.fName +" "+ this.lName; 
    }
};
document.getElementById("demo").innerHTML=pertson.age;

;
