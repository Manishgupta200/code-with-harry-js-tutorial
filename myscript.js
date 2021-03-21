// DOM get methods

// get innertext
var element;
element=document.getElementById('menu').innerText;
// innerHTML
element=document.getElementById('menu').innerHTML;
// grtAttribute, getAttributeNode
element=document.getElementById('header')
.getAttributeNode('style').name;
// attributes
element=document.getElementById('header').attributes;

console.log(element);
function xyz(){
	console.warn('it"s dangerous');
}
// .name & .value works in getAttributeNode, attributes