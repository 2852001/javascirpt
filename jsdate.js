var todaydate = new Date(); //by using date object
console.log(todaydate);

var todaydate1 = new Date(2022,04,23); //in js,month value start from 0 to 11(0-Jan, 11-Dec)
console.log(todaydate1);

var todaydate2 = new Date(2022,04); //in js,month value start from 0 to 11(0-Jan, 11-Dec)
console.log(todaydate2.toString());

var todaydate3 = new Date(2022); //in js,month value start from 0 to 11(0-Jan, 11-Dec)
console.log(todaydate3);  //don't pass only year.It will be treated as milliseconds time.

var date4 = new Date(10,11,24);
console.log(date4.toString()); // in JS, the year starts from 1900

var date5 = new Date("November 24,2021");
console.log(date5.toString()); 

//date object methods
var date6 = new Date();
date6.setFullYear(2020);
date6.setMonth(7);
date6.setDate(22);
console.log(date6.toString());
console.log(date6.getFullYear());
console.log(date6.getMonth());
console.log(date6.getDate());
