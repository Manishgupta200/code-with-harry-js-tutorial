// array new method
var ary=new Array();
ary[0]=10;
ary[1]='harry';
ary[3]=true;
document.write("<ul>");
for(var a=0;a<=ary.length;a++){
	document.write('<li>',ary[a],'</li>');
}
document.write("</ul>");