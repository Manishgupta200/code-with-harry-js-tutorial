// DOM isEqualNode()
var target1=document.getElementById('list1').firstElementChild;
var target2=document.getElementById('list2').children[1];
// true --return
// actually it compare two things if match then return true else false
var comp=target1.isEqualNode(target2);

console.log(target1);
console.log(target2);
console.log(comp);
