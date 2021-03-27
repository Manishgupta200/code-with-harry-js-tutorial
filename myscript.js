// animation property
// clearInterval()
var a=0;
var set=setInterval(anime,1000);
function anime(){
	a=a+10;
	console.log(a);
	if(a==100){
		clearInterval(set);
	}
	else{
		var target=document.getElementById('test');
		target.style.marginLeft=a+'px';
	}
}