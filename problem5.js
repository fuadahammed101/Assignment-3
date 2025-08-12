/** Problem 05 - ( PH Email Generator )  */ 
var student= { name: "jhankar" , roll: 1014 ,department: "cse" }; 
//write your code here 

var email = student.name + student.roll+ "." + student.department + "@ph.ac.bd";
console.log(email);

/*PS E:\MERN Stack\Assignment3> node problem5.js
jhankar1014.cse@ph.ac.bd */