// DOM insertAdjacent method
// create and append symeltaneously
// DOM insertAdjacent position for append 
// beforebegin
// afterbegin
// beforeend
// afterend
// DOM insertAdjacentElement --only tag
var newElement=document.createElement('h1');
var newText=document.createTextNode('i am text created in js');
// "i am text created in js" is now inserted in created h1
newElement.append(newText);
// targeting div of #text
var target=document.getElementById('text');
// <h1>i am text created in js</h1> is now inserted in div of #text in beforebegin position
target.insertAdjacentElement('beforebegin',newElement);
// DOM insertAdjacentHTML --tag with text
// targeting div of #text2
var target2=document.getElementById('text2');
var newElement2='<h1>i am created in var newElement2</h1>';
// <h1>i am text created in js</h1> is now inserted in div of #text2 in afterend position
target2.insertAdjacentHTML('afterend',newElement2);
// DOM insertAdjacentText --only text
// targeting div of #text3
var target3=document.getElementById('text3');
var newElement3='i am created in var new Element3';
// 'i am text created in js' is now inserted in div of #text3 in afterbegin position
target3.insertAdjacentText("afterend",newElement3);

