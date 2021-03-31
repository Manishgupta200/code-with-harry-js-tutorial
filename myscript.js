// MATH METHOD
// works when no. is in float type
// for all no. upper value return
// like opposite of box of x in mathematics
// 6 --return
var a=Math.ceil(5.2);
// -1 --return
var a=Math.ceil(-1.45);
// works when no. is in float type
// for all no.lower value return
// 5 --return
var a=Math.floor(5.2);
// -2 --return
var a=Math.floor(-1.45);
// work with float data type
// if no. above .5 return upper value otherwise return lower value in integer type 
// 2 --return
var a=Math.round(2.40);
// 3 --return
var a=Math.round(2.55);
// it returns only integer value without any changes
// 2 --return
var a=Math.trunc(2.49);
// 2 --return
var a=Math.trunc(2.99);
// return max. no.
// 10 --return
var a=Math.max(-8,10,3,5,9,8);
// return min. no.
// -8 --return
var a=Math.min(-8,10,3,5,9,8);
// return square root of no.
// 5 --return
var a=Math.sqrt(25);
// return cubit root of no.
// 4 --return
var a=Math.cbrt(64);
// it returns 2 to the power 3 
// 8 --return
var a=Math.pow(2,3)
// by default return between 0-1
var a=Math.random();
// return between 0-10; only integer value return because of Math.floor() fn.
// by adding 1 ans goes fromm 0-10 otherwise ans. fron 0-9 any
var a=Math.floor(Math.random()*10)+1;
// return  absolute value
// 5.25 --return
var a=Math.abs(5.25);
// 5.65 --return
var a=Math.abs(-5.65);
// 0 --return
var a=Math.abs(null);
// 3 --return
var a=Math.abs(-5+2);
// return PI(22/7) value
// 3.141592653589793 --return
var a=Math.PI;
document.write(a);