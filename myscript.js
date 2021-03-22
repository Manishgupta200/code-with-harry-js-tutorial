// DOM css styling method
var element;
// style of #header change from blue to tan
 // dosn't effect of border-radius
 document.querySelector('#header')
 .style.backgroundColor='tan';
// get method of style
element=document.querySelector('#header').style;
// return border-radius value 100px
element=document.querySelector('#header')
.style.borderRadius;
// DOM class name
// set class and removed xyz class
document.querySelector('#content').className="abc";
// return like this-- abc
element=document.querySelector('#content').className;
// set two class symeltaneously and removed xyz class
// we can style from .abc or .pqr
document.querySelector('#content').className='abc pqr';
// return like this(get method)-- abc pqr
element=document.querySelector('#content').className;
// DOM class list
// add multiple class and return in array form
document.querySelector('#content').classList='abc pqr xyz';
// shown like these--
// DOMTokenList(3) ["abc", "pqr", "xyz", value:"abc pqr xyz"]
// 0: "abc"
// 1: "pqr"
// 2: "xyz"
// length: 3
// value: "abc pqr xyz"
element=document.querySelector('#content').classList;
// add extra class in #content show like these--
// 0: "abc"
// 1: "pqr"
// 2: "xyz"
// 3: "man"
// length: 4
// value: "abc pqr xyz man"
document.querySelector('#content').classList.add('man');
// abc & xyz class now removed from div of #content show--
// DOMTokenList(2) ["pqr", "man", value: "pqr man"]
// 0: "pqr"
// 1: "man"
// length: 2
// value: "pqr man"
document.querySelector('#content')
.classList.remove('abc','xyz');
// DOM addEventListener method
// onclick on div of header2 bg-color shown red
document.getElementById('header2').onclick=abc;
// aso use-- document.querySelector('#header2').onclick=abc;
function abc(){
document.getElementById('header2')
.style.backgroundColor='red';
}
// mouseenter in div of id header2 function
 // sass run andcolor shown blue and border style not removed
 // If take abc function then above abc function shown
  // and color shown red
document.getElementById('header2')
.addEventListener('mouseenter',sass);
function sass(){
	document.querySelector('#header2')
	.style.backgroundColor='blue';
}
// direct insert a function in addEvent listener matod
// when mouseenter color shows blue & when enter here 
// border shows 5px dotted #84C9B1 and color changes to red
document.querySelector('#header2')
.addEventListener('click',function(){
	document.getElementById('header2')
	.style.border='5px dotted #84C9B1';
});
// use of-- this (very sorthand property)
// click on div of id header color chhange tan to red
document.querySelector('#header')
.addEventListener('click',function(){
	this.style.backgroundColor='red';
});
// DOM use capture-- true, false is default value
// with true in .outer and .inner click
// inner then 1st alert outer and then inner.
// without true in .outer and .inner click 
// inner then 1st alert inner and then outer.
document.querySelector(".outer")
.addEventListener('click',function(){
	alert('outer div');
},true);
document.querySelector('.inner')
.addEventListener('click',function(){
	alert('inner div');
},true);
// DOM removeEventListener method
// when leavemoouse without click on it then xxx 
// fn. run and color yellow shown on div of id header3 &
// when first click on div of id header3 then rmv fn. run 
// (which says on mouseleave xxx fn. removed) and now color 
// not change to yellow
document.querySelector('#header3')
.addEventListener('mouseleave',xxx);
function xxx(){
	document.querySelector('#header3')
	.style.backgroundColor='yellow';
}
document.querySelector('#header3')
.addEventListener('click',rmv);
function rmv(){

	this.removeEventListener('mouseleave',xxx);
}

console.log(element);
