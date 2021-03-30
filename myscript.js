// array of object
var student=[
	{name:'ram',age:15},
	{name:'karan',age:13},
	{name:'rahish',age:9}
];
// 0: {name: "ram", age: 15} --return
// 1: {name: "karan", age: 13}
// 2: {name: "rahish", age: 9}
// length: 3
console.log(student);
// [object Object],[object Object],[object Object] --return
document.write(student,'<br>');

for(var a=0;a<student.length;a++){
	document.write(student[a].name,'<br>');
}