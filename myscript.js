// DOM set method
var element;
// innerText
element=document.getElementById('header')
.innerText='<h2>in text tag not works</h2>';
// innerHTML
element=document.getElementById('header')
.innerHTML='<h1>overwrited div</h1>i am visible';
// setAttribute --in #header class abc replace to pqr
document.getElementById('header')
.setAttribute('class','pqr');
// get after set attribute then work console.log
element=document.getElementById('header')
.getAttributeNode('class');
// more priority then these style inside HTML
document.getElementById('header')
.setAttribute('style',"border: 1px dotted blue");

element=document.getElementById('header')
.getAttributeNode('style');
// attributeof header of 1 index now  replace to xyz
document.getElementById('header')
.attributes[1].value='xyz';

element=document.getElementById('header').attributes[1];
// sort form direct set it to var elemet
element=document.getElementById('header')
.attributes[1].value="zxc";
// removeAttribute now #header's class removed from all 
document.getElementById('header')
.removeAttribute('class');
// show null in console because class name removed
element=document.getElementById('header')
.getAttributeNode('class');
console.log(element);
