// Ways to create strings in js
var msg = 'Welcome to Edubridge';//Literal syntax
var msg1 = new String('Welcome to Edubridge');// object syntax
console.log(msg +" "+ msg1);

//How to find string length
console.log(msg.length);

//How to extract string part
//slice method
console.log(msg.slice(11,20));//Start position is inclusive end position is exclusive...
console.log(msg.slice(8));
console.log(msg.slice(-11,-8));//-11+8=-3

//sub-string method
console.log(msg.substring(11,20));
console.log(msg.substring(8));
console.log(msg.substring(-11,-8));

//sub-str method
console.log(msg.substr(11,5));//Starting value indicates position and end value indicates length of the characters

//How to replace the string content
//replace method
console.log(msg.replace("Edubridge","Edubridge India"));

var msg3 = "Welcome To Edubridge,Welcome to Fullstack Development";
console.log(msg3.replace(/Welcome/g,"Warm Welcome"));//g indicates globally means everywhere...
console.log(msg3.replace(/welcome/i,"Warm Welcome"));//i indicates in sensitive

//How to convert string content into uppercase and lower case

var msg4 = "EDUBRIDGE";
console.log(msg4.toLowerCase());

var msg5 = "edubridge";
console.log(msg5.toUpperCase());

//How to concate strings

var msg6 = "Welcome";
var msg7 = "to Edubridge";
var msg8 = "India";
console.log(msg6.concat(" ",msg7," ",msg8));

//string search

var msg9 = "Welcome to Java fullstack development,Welcome to Edubridge";
console.log(msg9.indexOf("Welcome",2));
console.log(msg9.lastIndexOf("Welcome",37));
console.log(msg9.search("Welcome"));
console.log(msg9.match(/Welcome/g));
console.log(msg9.startsWith("Welcome"));
console.log(msg9.startsWith("to"));
console.log(msg9.endsWith("Welcome"));
console.log(msg9.endsWith("Edubridge"));



