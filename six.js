// JS program to get length of strings
let sentence = "";
let len = sentence.length;
console.log(len); // 0
sentence = "I love Programiz.";
len = sentence.length;
console.log(len); // 17
// no effect if try to assign value to length
sentence.length = 5;
console.log(sentence); // I love Programiz.

const message = "ball bat";
// replace the first b with c
let result = message.replace('b', 'c');
console.log(result);

const text = "Java is awesome. Java is fun."
// passing a string as the first parameter
let pattern = "Java";
let new_text = text.replace(pattern, "JavaScript");
console.log(new_text);
// passing a regex as the first parameter
pattern = /Java/;
new_text = text.replace(pattern, "JavaScript");
console.log(new_text);