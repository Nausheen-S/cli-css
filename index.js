const my = require('./calculate.js');
var answer1 = process.argv[2];
var answer2 = process.argv[3];
var r = parseInt(process.argv[3]);
var g = parseInt(process.argv[4]);
var b = parseInt(process.argv[5]);
var h = parseInt(process.argv[3]);
var s = parseInt(process.argv[4]);
var l = parseInt(process.argv[5]);

if (answer1 === "hex"){
     console.log(my.converthex(answer2));
 }
 else if (answer1 === "rgb") {
     console.log(my.convertrgb(r,g,b));
 }
 else{
     console.log(my.rgb2hsl(h,s,l));
 }