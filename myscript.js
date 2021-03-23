// DOM append method
// h2 tag created
var newElement=document.createElement('h2');
// text created
var newText=document.createTextNode('i am text created in js');
// DOM appendChild
// means created text are now inserted in created h2 tag
newElement.appendChild(newText);
// <h2>i am text created in js</h2> --return
console.log(newElement);
// "i am text created in js" --return
console.log(newText);
// (i am text created in js) --return on bouwser page
// newElement means (<h2>i am text created in js</h2>) are now inserted in div of #text
// appendChild attach things in last  of any writing
document.getElementById('text').appendChild(newElement);
// DOM insertBefore
