// array
var sum=0;
var ary=[10,20,30,40,50,10];
document.write("<ul style='font-weight:bold'>");
for(var a=0;a<ary.length;a++){
	document.write("<li>",ary[a],'</li>');
	sum=sum+ary[a];
}
document.write('</ul>');
document.write("SUM is: ",sum);