// DOM cloneNode method
var target=document.getElementById('list-a').children[0];
// it copy <li></li> from #lisa-a
// if nothing say true and false then default value it false which copies only tags and attributes not inner text
var copyElement=target.cloneNode();

// it copy <li>list-a1</li> from #lisa-a
var copyElement=target.cloneNode(true);
// <li>list-a1</li>
console.log(copyElement);

document.getElementById('list-b').appendChild(copyElement);
