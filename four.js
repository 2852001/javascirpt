var teamNames = ["Manisha","Deeraj","Harish","Mayuri","Ahmed","Hariharan","Rafi"]; //array
var teamNames1 = new Array ("Manisha","Deeraj","Harish","Mayuri","Ahmed","Hariharan","Rafi", "Edubridge"); //array
console.log(teamNames[8]);
console.log(teamNames1[teamNames1.length-1]);
//for loop will help you to get all the information of array
for(var i = 0;i<teamNames.length;i++) 
{
    console.log(teamNames[i] + " ");
}
//add element into an existing array(end of array)
teamNames.push("Santosh");
console.log("new array:"+teamNames);
//add element into an existing array(beginning of array)
teamNames.unshift("Santosh");
console.log("new array1:"+teamNames);
//how to add at any specific position
teamNames[3] = "Ajay";
console.log("new array2:"+teamNames);
//add element into any specific position
teamNames[12] = "Harish";
console.log("new array3:"+teamNames);
//to remove element from an array (end of the array)
teamNames.pop();
console.log("new array4:"+teamNames);
//to remove element from an array (starting of the array)
teamNames.shift();
console.log("new array5:"+teamNames);
//to remove any specific element
delete teamNames[1];
console.log("new array6:"+teamNames);
//how to add two or more arrays
var teamNames2 = ["Manisha","Deeraj","Harish"];
var teamNames3 = ["Mayuri","Ahmed","Hariharan"];
console.log(teamNames2.concat(teamNames3));
//how to add new elements into array without deleting previous element
teamNames2.splice(1,0,"Santosh","Rahul");
console.log(" teamNames2 is:"+teamNames2);
//how to add new elements into array with deleting previous element
teamNames3.splice(1,2,"Ajay","Shahrukh");
console.log(" teamNames3 is:"+teamNames3);
//how to get specific elements from array
console.log(" required teamNames3 is:"+teamNames3.slice(1));
console.log(" required teamNames3 is:"+teamNames3.slice(0,2));
//how to join array elements
console.log(teamNames3.join("*"));

