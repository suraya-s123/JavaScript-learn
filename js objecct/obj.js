
// object

 const student ={firstName:"suraya",
  class:"BSE in CSE", 
  age:23};
 console.log(student);
 document.getElementById("demo-1").innerHTML= student.age; // 23

 //JavaScript Object Declaration

const person= {fName:"Suraya", lName:"Sarmin", age:"23"};
document.getElementById("demo-2").innerHTML= person.fName + " " +person.lName +"is " + person.age +" yeares old."; // Suraya Sarminis 23 yeares old.
document.getElementById("demo-3").innerHTML= typeof person; // object

// Accessing Object Properties(1. Using dot Notation)
const man={
    name: "Suraya",
    age: 23,
};
console.log(man.name);
//2. Using bracket Notation
const maan={
    id : 34,
    quantity:45,
}
console.log(maan["quantity"]);

//JavaScript Nested Objects

const students={
    name:"jhon-1",
    classs:"10-12",
    mark:{
        eng:45,
        math:50
    }
}
console.log(students.mark)
document.getElementById("demo-6").innerHTML= students.mark;


//JavaScript Object Methods
const pertions ={
    f_Name:"Suraya",
    l_Name:"Sarmin",
    age_: 23,
    full_Name : function() {
        return this.f_Name +" "+this.l_Name; 

    }
};
document.getElementById("demo-7").innerHTML=pertions.full_Name();
const pertson={
    fName: "Suraya",
    lName: "Sarmin",
    age: 23,
    fullName: function(){
        return this.fName +" "+ this.lName; 
    }
};
document.getElementById("demo-5").innerHTML=pertson.age;

;
