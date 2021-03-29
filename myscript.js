// BOM (browser object module)
// window open
// window.open('URL','(eg:- _blank,_self,_parent,_top) or any name','width=100px,height,left,top');
function openWindow(){
// blank new window open of same browser window on other tab
	// window.open();
// amazon site open in new window of same browser in anothet tab
	// window.open('https://www.amazon.com');
// new window open of amazon in in new browser window in top left position of screen with width=500px and height 200px
	// window.open('https://www.amazon.com','','width=500px,height=200px');
// new window open of amazon in in new browser window in top=100px left=200px position of screen with width=500px and height 200px	
	// window.open('https://www.amazon.com','hello','width=500px,height=300px,top=100px,left=200px');
}

// window close
function openWindow(){
	open=window.open('https://www.amazon.com','hello','width=500px,height=300px,top=100px,left=200px');
}
function closeWindow(){
// opened window is now closed and after it again click on openWindow button then not open new window
	open.close();
}