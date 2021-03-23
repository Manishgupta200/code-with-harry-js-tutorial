// DOM contains method
// returns true and false only
// By using this method we can find inner or inner of inner tag by targeting outer tag
var parentElement=document.getElementById('test');
var target=document.querySelector('#abc');
// true--return
var find=parentElement.contains(target);
console.log(find);
// DOM hasAttribute mtehod
// By using this method we can check another attribute's are avilable or not in same tag by targetting one specific attribute in same tag
var find2=parentElement.hasAttribute('class');
// true --return
console.log(find2);
// DOM hasChildNodes method
// check that is any child nodes avilable or not which i targetting (parentElement).If simple text,enter,comment etc avilable then also retrn true
var find3=parentElement.hasChildNodes();
// true --return
console.log(find3);
