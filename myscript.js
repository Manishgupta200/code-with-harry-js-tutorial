// window location object method
// set method
function reloadFn(){
// when click on reloadFn btn then page refresh
	location.reload();
}
function assignFn(){
// when click on assignFn btn then google page open and previous page not deleted, when i want go backward
	location.assign('https://www.google.com');
}

function replaceFn(){
// when click on replaceFn btn then github page open and previous page now deleted and not able to go backward
	location.replace('https://www.github.com');
}