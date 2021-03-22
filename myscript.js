// DOM class list method
var a=document.querySelector('#header').classList;
// 0: "xyz" --show first
// length: 1
// value: "xyz"
console.log(a);
// DOM classList add method
document.getElementById('header')
.addEventListener('click',abc);
function abc(){
	this.classList.add('man','ish');
// 0: "xyz"
// 1: "man"
// 2: "ish"
// length: 3
// value: "xyz man ish"
// --when click on div of #header... then show
var a=this.classList;
console.log(a);
}
// DOM classList remove method
document.querySelector('#header')
.addEventListener('dblclick',rmv);
function rmv(){
	this.classList.remove('man');
// 0: "xyz"
// 1: "ish"
// length: 2
// value: "xyz ish"
// --when dblclick on div of #header... then show
var b=this.classList;
console.log(b);
}
// DOM classList length method
// show-- 1 --because firstly only xyz class avilable 
var a=document.getElementById('header').classList.length;
console.log(a);
// DOM classList toggle method
document.querySelector('#header')
.addEventListener('mouseenter',xxx);

function xxx(){
	this.classList.toggle('xyz');
// mouseenter on div of #header ... shows--
// DOMTokenList [value: ""]
// length: 0
// value: ""
// mouseleav and mouseenter again on div of #header... shows--
// DOMTokenList ["xyz", value: "xyz"]
// 0: "xyz"
// length: 1
// value: "xyz" --and continuously repeated...
var a=this.classList;
console.log(a);
}
// DOM classList item method
document.querySelector('#header2')
.addEventListener('click',function (){
// show index 1 class of div of #header2... .i.e;-- def --only shows
	var a=this.classList.item(1);
	console.log(a);
});
// DOM classList contains method
// return-- true
// check class abc if exists then show true else false
var a=document.querySelector('#header2')
.classList.contains('abc');
console.log(a);