
// OBJECT
var a={
	fname:'manish',
	lname:'gupta',
	age:19,
	email:'guptamanis27@gmail.com',
	ary:['1st','2nd','3rd'],
	fn:function(){
		return 2500;
	},
	fullname:function(){
		// for callinf the fname and lname property this. is used
		return this.fname+' '+this.lname;
	},
	innerobj:{
		'city':'raniganj',
		country:'india'
	}
}
// [object Object] --return
document.write(a,'<br>');
// age: 25 --return
// email: "email"
// fname: "fname"
// lname: "lname"
console.log(a);
// manish --return
console.log(a.fname);
// manish --return
document.write(a.fname,'<br>');
// 1st,2nd,3rd --return
document.write(a.ary,'<br>');
// 1st --return
document.write(a.ary[0],'<br>');
// 2500 --return
document.write(a.fn(),'<br>');
// manish gupta --return
document.write(a.fullname(),'<br>');
// raniganj --return
document.write(a.innerobj.city,'<br>');
// india --return
document.write(a.innerobj.country);