//The toString() method returns a number as a string.
let x = 123;
console.log(x.toString());

//exponential method
let y = 9.656;
console.log(y.toExponential(2));
console.log(y.toExponential(4));
console.log(y.toExponential(6));

//converting variabls to numbers
console.log(Number(true)); 
console.log(Number(false));  
console.log(Number("10"));     
console.log(Number("  10"));    
console.log(Number("10  "));    
console.log(Number(" 10  "));    
console.log(Number("10.33"));     
console.log(Number("10,33"));    
console.log(Number("10 33"));    
console.log(Number("John"));

//Number() can also convert a date to a number.
//The Number() method returns the number of milliseconds since 1.1.1970.
let a = new Date("2022-01-01");
console.log(Number(a));

//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
console.log(parseInt("-10"));   
console.log( parseInt("-10.33"));   
console.log( parseInt("10") );  
console.log(parseInt("10.33") );  
console.log(parseInt("10 6") );    
console.log( parseInt("10 years"));   
console.log( parseInt("years 10"));

//parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

console.log(parseFloat("-10"));   
console.log(parseFloat("-10.33"));   
console.log( parseFloat("10") );  
console.log(parseFloat("10.33") );  
console.log(parseFloat("10 6") );    
console.log(parseFloat("10 years"));   
console.log(parseFloat("years 10"));

//javascript min_value and max_value:
let m = Number.MAX_VALUE;
let n = Number.MIN_VALUE;
console.log(m);
console.log(n);
