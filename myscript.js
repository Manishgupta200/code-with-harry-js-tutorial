// DOM create method
// with the hel of javascript create tag,text,comment inside HTML file
// <h2></h2> --return
// here h2 tag are creates not insertd in html
var newElement=document.createElement('h2');
// here  text are creates not insertd in html
// "this is text node" --return
var newText=document.createTextNode('this is text node');
// here  comment are creates not insertd in html
// <!--this is comment--> --return
var newComment=document.createComment('this is comment');

console.log(newElement);
console.log(newText);
console.log(newComment);