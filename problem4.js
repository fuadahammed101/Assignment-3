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