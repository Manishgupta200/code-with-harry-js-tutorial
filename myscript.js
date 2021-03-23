// DOM traversal method
// DOM parentElement
// return-- <body>...</body>
// actually return the 1st outer parent element
var a=document.getElementById('outer').parentElement;
// return full html code
var a=document.body.parentElement;
// div of #inner's color show red 
document.querySelector("#child-c")
.parentElement.style.backgroundColor='red';
// <div id="inner" style="background-color: red;">…</div> --return
var a=document.getElementById('child-c').parentElement;
// return-- null
var a=document.getElementById('main').parentElement;
// DOM parentNode
// return-- #document
// same work as parentElement but never return null
var a=document.getElementById('main').parentNode;
// DOM children
// 0: span --return
// 1: div
// 2: div
// 3: div#child-c
// 4: div
// 5: div
// length: 6
var a=document.querySelector('#inner').children;
// <div>a</div> --return
var a=document.querySelector('#inner').children[1];
// color of a is set blue
document.querySelector('#inner')
.children[1].style.backgroundColor='blue';
// <div style="background-color: blue;">a</div> --return
var a=document.querySelector('#inner').children[1];
// DOM childNodes
// 0: text --return text,space,comment also
// 1: span
// 2: comment
// 3: text
// 4: div
// 5: text
// 6: div
// 7: text
// 8: div#child-c
// 9: text
// 10: div
// 11: text
// 12: div
// 13: text
// length: 14
// also we can't apply style on text node we can apply only on html tag only
var a=document.getElementById('inner').childNodes;
// <!-- for childNodes -->  --return inner comment
var a=document.getElementById('inner').childNodes[2];
// inner color shows green 
var a=document.getElementById('inner')
.childNodes[1].style.backgroundColor="green";

// DOM firstElementChild
// <span style="background-color: green;">inner1</span> --return
// it target the first tag inside #inner
var a=document.getElementById('inner').firstElementChild;
// DOM lastElementChild
// <div>e</div> --return
// same work as first element child but target the last tag only
var a=document.getElementById('inner').lastElementChild;
// DOM first child
// #text --return like (childNodes) property but return first one only
var a=document.getElementById('inner').firstChild;
// DOM lastChild
// #text --return like (childNodes) property but return last one only
var a=document.getElementById('inner').lastChild;
// DOM previous ElementSibling
// <div>b</div> --return one previous tag element of #child-c
var a=document.getElementById('child-c').previousElementSibling;
// DOM nextElementSibling
// <div>d</div> --return one next tag element of #child-c
var a=document.getElementById('child-c').nextElementSibling;
// DOM previousSibling
// #text --return like (childNodes) property but return previous one
var a=document.getElementById('child-c').previousSibling;
// DOM nextSibling
// <!-- for nextSibling --> --return like (childNodes) property but return next one
var a=document.getElementById('child-c').nextSibling;


console.log(a);
