// DOM query selector (css selector)
var element;
// 1st class of list select if many avilable
element=document.querySelector('.list');
// taking all list class in array form
element=document.querySelectorAll('.list');
// take index 1 of array of class list 
element=document.querySelectorAll('.list')[1];
// show only text without inside tag 
// of index 1 of array of class list
element=document.querySelectorAll('.list')[1].innerText;
// also work innerHTML
element=document.querySelectorAll('.list')[1].innerHTML;
// show in this type --<ul class="list">…</ul>
element=document.querySelector('ul');
// NodeList [ul.list] --show in this type
// 0: ul.list
// length: 1
element=document.querySelectorAll('ul');
// NodeList(2) [h2, h2] --show like these
// 0: h2
// 1: h2
// length: 2
element=document.querySelectorAll('#content h2');
// <h2>i'm 2nd heading2</h2> --show h2 of index 1
element=document.querySelectorAll('#content h2')[1];
console.log(element);