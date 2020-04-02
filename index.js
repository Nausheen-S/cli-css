const my = require('./calculate.js');
var answer1 = process.argv[2];
var answer2 = process.argv[3];
var r = parseInt(process.argv[2])
var g = parseInt(process.argv[3])
var b = parseInt(process.argv[4])
if (answer1 === "hex"){
     console.log(my.converthex(answer2));
 }
 else {
     console.log(my.convertrgb(r,g,b));
 }