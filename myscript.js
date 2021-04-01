// DETE METHOD
// get method
var now=new Date();
// that's came from system not server
// js is clint site script which load in system first and then run
// Wed Mar 31 2021 18:14:20 GMT+0530 (India Standard Time) --return
document.write(now,'<br>');
// Wed Mar 31 2021 --return
document.write(now.toDateString(),'<br>');
// 31 --return
document.write(now.getDate(),'<br>');
// 2021 --return
document.write(now.getFullYear(),'<br>');
// in js jan:0,fab:1,...
// 2 --return
document.write(now.getMonth(),'<br>');
// in js sun:0,mon:1,...
// 3 --return
document.write(now.getDay(),'<br>');
// returnin 24 hr format
// 18 --return
document.write(now.getHours(),'<br>');
// 34 --return
document.write(now.getMinutes(),'<br>');
// 7 -return
document.write(now.getSeconds(),'<br>');
// 564 --return
document.write(now.getMilliseconds(),'<br>');

// set method
var now=new Date('April 1 2021');
var now=new Date('april 1 2021');
// 4 --return which means thursday
document.write(now.getDay(),'<br>');
// 0 --return
document.write(now.getHours(),'<br>');

var now=new Date();
// date are set 20
// Tue Apr 20 2021 10:43:36 GMT+0530 (India Standard Time) --return
now.setDate(20);
// month are set january
// Wed Jan 20 2021 10:45:03 GMT+0530 (India Standard Time) --return
now.setMonth(0);
document.write(now,'<br>');

var now=new Date();
document.write(now.getDate(),'/',1+now.getMonth(),'/',now.getFullYear());