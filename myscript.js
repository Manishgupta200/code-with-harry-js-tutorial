// BOM (browser object module)
// resizeBy()
var myWindow;
function openWindow(){
	myWindow=window.open('','','width=500px,height=300px');
}
function resizeWindow(){
// same as resizeTo() method width and height are added relative to previous new window size
	myWindow.resizeBy(400,400);
}