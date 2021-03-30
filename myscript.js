// for/in loop
var obj={
	fname:'yahoo',
	lname:'baba',
	age:25,
	email:'java@23.com'
};
// yahoo --return
// baba
// 25
// java@23.com
for(var i in obj){
	document.write(obj[i],'<br>');
}

document.write('<br>');

// fname --return
// lname
// age
// email
for(var key in obj){
	document.write(key,'<br>');
}