// array new method
var ary=new Array(3);
for(var a=0;a<ary.length;a++){
	ary[a]=prompt('Enter the value: ');
}
document.write("<ul>");
for(var a=0;a<ary.length;a++){
	document.write('<li>',ary[a],'</li>');
}
document.write("</ul>");