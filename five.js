var teamNames = ["Manisha","Deeraj","Harish","Mayuri","Ahmed","Hariharan","Rafi"]; //array
console.log(teamNames.sort());
console.log(teamNames.reverse());
var enNumbers = [40, 100, 1, 5, 25, 10];
//sorting in ascending order
console.log(enNumbers.sort(function(a,b) 
{
return a-b;
}));
//sorting in descending order
console.log(enNumbers.sort(function(a,b) 
{
return b-a;
}));
