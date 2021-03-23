// DOM insertBefore
var newElement=document.createElement('h2');
var newText=document.createTextNode('i am text created in js');
newElement.appendChild(newText);
// firstly #text are takingthrough var target
var target=document.getElementById('text');
// and then insertBefore things where i want (i insert newElement (<h2>i am text created in js</h2>) in childNodes[0] pace)
target.insertBefore(newElement,target.childNodes[0]);


// <h2>i am text created in js</h2> --return
console.log(newElement);
// i am text created in js --return
console.log(newText);
