// DOM replaceChild
var newElement=document.createElement('li');
var newText=document.createTextNode('new list1');
newElement.appendChild(newText);

var target=document.querySelector('#list');
var oldElement=target.children[0];
// list1 is replaced new list1 is comming
target.replaceChild(newElement,oldElement);
