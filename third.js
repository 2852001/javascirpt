//Functions in Javascript
function display()
{
    console.log("Hi");
}
display();
//Function with single parameter
function show(a)
{
    console.log("a value is: "+ a);
}
show(10);
//Function with two parameters
function add(a,b)
{
    console.log("Sum is:"+(a+b));
}
add(10,20);
//Function with return value

function result(a,b)
{
    return a+b;
}
var sum = result(30,5);
console.log("Result is:"+sum);