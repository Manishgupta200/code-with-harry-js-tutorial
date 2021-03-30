// arry map() fn.
// create a new array by calculating on all value  of array 
var ary=[10,20,30,40];
// 100,200,300,400 --return
var b=ary.map(test);
document.write(b,'<br>');
function test(x){
	return x*10;
}

var ary2=[
	{fname:'manish',lname:'gupta'},
	{fname:'manish1',lname:'gupta1'},
	{fname:'manish2',lname:'gupta2'}
];
var b2=ary2.map(test2);
document.write(b2);
function test2(x){
	return x.fname;
}