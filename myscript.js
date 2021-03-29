// CSS animation property
// setTimeout()
// after 3s target.style.width='10px';and stop parmanently
// here only one time animation occur
// 3000 is animation delay time
var id=setTimeout(anime,3000);
function anime(){
	var target=document.getElementById('test');
	target.style.width='10px';
}
// clearTimeout()
function stopAnimation(){
// click on button between 3s then animation stop and setTimeout(anime,3000); removed now
	clearTimeout(id);
// click on button between 3s then animation stop and setInterval(anime2,1000); removed now
	clearInterval(id2);
}
// also use inbuild fn. in clearTimeout()
// -------------------for checking only-------------------
var a=0;
console.log(a)
var id2=setInterval(anime2,1000)
function anime2(){
	if(a==3){
		clearInterval(id2);
	}
	else{
		a=a+1;
		console.log(a);
	}
}