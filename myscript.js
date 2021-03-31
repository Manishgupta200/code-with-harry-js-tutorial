// NUMBER METHOD
var a='99';
// 9910 --return
document.write(a+10,'<br>');
// 109 --return
var num=Number(a);
document.write(num+10,'<br>');
// return only onteger value
// 99 --return
var a='99 89 77';
// 10 --return
var a='10.88';
// NaN --return means nota number
var a='yr 099';
// 99 -return
var a='099 yr';
// 98 --return
var a='098yr';
var num=parseInt(a);
// same as parseInt()but return in float type
// 20.56 --return
var a=20.56;
var num=parseFloat(a);
document.write(num,'<br>');
// chek no. is finite or not and return true or false
// true --return
var a=-5.02;
// false --return
var a='0.22';
var a='hello';
var num=Number.isFinite(a);
document.write(num,'<br>');
// check no. is integer or not
// true --return
var a=10;
// false --return
var a=10.3;
// true --return
var a=10.00;
var num=Number.isInteger(a);
document.write(num,'<br>');
// means shows rwo digits after decimal point and also rounding off 
// 5.57 --return
var a=5.56789;
var num=a.toFixed(2);
document.write(num,'<br>');
// 5.6 --return
// means return allover two digit and rounding off also
var num=a.toPrecision(2);
document.write(num);