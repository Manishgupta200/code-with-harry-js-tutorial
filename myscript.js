// BOM (browser object module)
// resizeTo()
var myWindow;
function openWindow(){
	myWindow=window.open('','','width=500px,height=300px');
}
function resizeWindow(){
// window heght and width ate change to width=400px & height=400px
	myWindow.resizeTo(400,400);
}