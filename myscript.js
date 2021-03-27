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
var id=setInterval(anime,1000);
function anime(){

	a=a+10;
	var target=document.getElementById('test');
	target.style.marginLeft=a+'px';
	console.log(a);
// clearInterval()
// if a=100 reach the after it setInterval() is cear
	if(a==100){
		clearInterval(id);
	}
}