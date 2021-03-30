// BOM (browser object module)
// moveTo()
var myWindow;
function openWindow(){
	myWindow=window.open('https://www.amazon.com','hello','height=500px,width=700px,left=100px,top=100px');
	myWindow.document.write('<p>this is my paragraph</p>');
}
function moveWindow(){
// move mindow 200px from top and 200 px from left
	myWindow.moveTo(200,200);
// focus on new window after move in through 1st window
	myWindow.focus();
}


