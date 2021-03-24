// animation property
// setInterval()
var a=0;
// after every 1000ms/(1s) of interval anime fn. run which says console.log(a) run continuously
// 10 --return
// 20
// 30
// .
// .
// . 
setInterval(anime,1000);

function anime(){
	a=a+10;
	console.log(a);

	var target=document.getElementById('test');
	target.style.marginLeft=a+'px';
}
