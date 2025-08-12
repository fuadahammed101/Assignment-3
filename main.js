/** Problem -01 ( Divide the Asset ) */ 
var area = 800; 
//write your code here 

var DividedAsset = area/2;
console.log(DividedAsset);

/*Output: PS E:\MERN Stack\Assignment3> node problem1.js
400  */



/** Problem -02 ( Cycle or Laptop ) */ 
var money = 10000; 
//write your code here 

if (money >= 25000) {
    console.log("Laptop");
}
else if(money >= 10000){
    console.log("Cycle");
}
else{
    console.log("Chocolate");
}
/*Output: PS E:\MERN Stack\Assignment3> node problem2.js
Cycle */


/** Problem -03 ( Medicine Planner ) */ 
var lastDay = 11 ; 
//write your code here 
for(var day=1; day<=lastDay;day++){
    if(day % 3 === 0){
        console.log(day+ " -medicine");
        }
    else{
        console.log(day + "-rest");
    }
}

/*PS E:\MERN Stack\Assignment3> node problem3.js
1-rest
2-rest
3 -medicine
4-rest
5-rest
6 -medicine
7-rest
8-rest
9 -medicine
10-rest
11-rest */


/** Problem 04 - (Delete / Store) */ 
var fileName= "pdfData.jpg"; 
//write your code here 
if (fileName.startsWith("#") || fileName.endsWith(".pdf") || fileName.endsWith(".docx")){
    console.log("Store");
}else{
    console.log("Delete");
}

/*PS E:\MERN Stack\Assignment3> node problem4.js
Delete */


/** Problem 05 - ( PH Email Generator )  */ 
var student= { name: "jhankar" , roll: 1014 ,department: "cse" }; 
//write your code here 

var email = student.name + student.roll+ "." + student.department + "@ph.ac.bd";
console.log(email);

/*PS E:\MERN Stack\Assignment3> node problem5.js
jhankar1014.cse@ph.ac.bd */



