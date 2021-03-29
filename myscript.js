// BOM (browser object module)
// window height and width method
function resizeFn(){
	console.clear();
// when resize browser height then in console iHeight and oHeight shows and 
// because of console.clear() previous is cleared continuously
	var iHeight=window.innerHeight;
	console.log('Inner Height: ' + iHeight);

	var oHeight=window.outerHeight;
	console.log('Outer Height: ' + oHeight);
}
// same for width