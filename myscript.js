// array method
var a=['A','B','C','D','E'];
// here index is 0,1,2,3,4 or -5,-4,-3,-2,-1
// A,B,C,D,E --return
document.write(a+"<br>");
// make a new array by taking one or more than one value in array.This like get method
// B,C,D --return
var b=a.slice(1,4);
document.write(b,'<br>');
// B,C,D,E --return
var b=a.slice(1);
document.write(b,'<br>');
// C,D --return
var b=a.slice(-3,-1);
document.write(b,'<br>');
// C,D,E --return
var b=a.slice(-3);
document.write(b,'<br><br>');

document.write(a+'<br>');
// splice(index,number,'newvalue')
// here index is the index no. from where i want to start to add and 
// number is how many no. of value after adding value which i want to delete
// after it write newvalue which i want to add in array
// A,B,add1,add2,C,D,E --return
// also write -3 index return-- A,B,add1,add2,C,D,E --return
// if one in place of 0 then C is deleted from array and return-- A,B,add1,add2,D,E
a.splice(2,0,'add1','add2');
document.write(a+'<br>');
// A,B,add2,C,D,E --return
// also use to delete array value
a.splice(2,1);
document.write(a+'<br><br>');


document.write(a+'<br>');
// indexOf('search item','starting index no. to search')
// check value in array and return it's index no.
// return-- 1
var b=a.indexOf('B');
document.write(b,'<br>');
var a=['A','B','A','C','A','D'];
document.write(a,'<br>');
// check value A is present in array after index 3 and return it's index no.
// return-- 4
// if not match value then return -1 always
var b=a.indexOf('A',3);
document.write(b+'<br>');
// same as indexOf() method but return from index last
// return-- 4
var b=a.lastIndexOf('A');
document.write(b,'<br><br>');
// --------------------------------T/F start----------------------
document.write(a+'<br>')
// Array.isArray() check a is array or not and return true and false
// true --return
// also use in iff statement
var b=Array.isArray(a);
document.write(b+'<br><br>');

// search item in array avilable or not and result shows true or false 
var b=a.includes('D');
document.write(b+'<br><br>');
// some() method
// check if any of athe element in an array are adult or not and result shows true or false
// min. one condition true then return show  true
var age=[10,13,18,20,25];
document.write(age+'<br>');
// return-- true
var b=age.some(checkAdult);
document.write(b+'<br>');
function checkAdult(g){
	return g>18
}
// checked with all value and true then result shows true else false
var c=age.every(checkAdult);
document.write(c+'<br><br>');
// --------------------------------T/F end----------------------
// find() method
// find() method returns the value of the first element in an array that pass the test
// return-- 20
var b=age.find(checkAdult);
document.write(b+'<br><br>');
// findIndex() method
// findIndex() method returns the index of the first element in an array that pass the test
// return-- 3
var b=age.findIndex(checkAdult);
document.write(b+'<br><br>');

// filter() method
// filter() method creates an array filled with all array elements that pass the test
// return-- 20,25
var b=age.filter(checkAdult);
document.write(b+'<br><br>');

document.write(a,'<br>');
// toString() method
// the toString() method converts an array into a string & returns the result
a.toString();
document.write(a,'<br><br>');

// this print array value & it's a default property
document.write(a.valueOf(),'<br><br>');

// fill() method
// the fill() method fills all the elements in an array  with a static value
a.fill('roudy');
document.write(a);
