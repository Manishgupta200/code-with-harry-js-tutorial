// multidimensional array
var ary=[
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12],
	[13,14,15,16]
];
document.write(ary.length);
document.write('<table border="1px" cellspacing="0">');
for(var a=0;a<ary.length;a++){
	document.write('<tr>');
	for(var b=0;b<ary[a].length;b++){
		document.write('<td>',ary[a][b],'</td>');
	}
	document.write('</tr>');
}
document.write('</table>');




for(var a=0;a<ary.length;a++){
	document.write(ary[a] + '<br>');
}



for(var a=0;a<ary.length;a++){
	for(var b=0;b<ary[a].length;b++){
		document.write(ary[a][b]+' ');
	}
	document.write('<br>');
}