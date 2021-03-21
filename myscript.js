function sum(math,eng,sci){
	var s=math+eng+sci;
	return s;
}
function percentage(tt){
	var p=tt/300*100;
	document.write(p);
}
var total=sum(2,3,7);
percentage(total);