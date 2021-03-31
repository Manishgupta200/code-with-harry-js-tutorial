// STRING METHOD
var str='Javascript HTML';
// 15 --return
var a=str.length;
//  javascript html --return
var a=str.toLowerCase();
 // JAVASCRIPT HTML --return
var a=str.toUpperCase();
// seaech character in string 
// if TM then also return true 
 // true --return
var a=str.includes('HTML');
// search 1st word or character in string
// if java then true also 
// true --return
var a=str.startsWith('Javascript');
// search last word or character in string
// true --return
var a=str.endsWith('ML');
// sameasincludes but retuen index no.
// 8 --return
var a=str.search('pt');
//  find all same word name or character in a string and return in array form
// a,a --return
var a=str.match(/a/g);
// 1 --return
var a=str.indexOf('a');
// 3 --return
var a=str.lastIndexOf('a');
// at first search HTML exist or not in str.If exist then replace it by CSS
// Javascript CSS --return
var a=str.replace('HTML','CSS');

var str2='m m m m'
// replace only first one
// o m m m --return
var a2=str2.replace('m','o');
// replace all m to o globally
// o o o o --return
var a2=str2.replace(/m/g,'o');
document.write(a2,'<br>');

var str3='                  is  ';
// '                  is  ' --return
// alert(str3);
var a3=str3.trim();
// 'is' --return
// alert(a3);
// define any position by charAt(index no.) and return the value presnt in the mentioned index no.
// a --return
var a=str.charAt(3);
// it return ASCII code by giving index no. 
// 97 --retrn
var a=str.charCodeAt(1);
// return symbol character from ASCII code
// A --return
var a=String.fromCharCode(65);

var str4='PHP';
var str5='XML';
// add two or more string
// Javascript HTMLPHPXML --return
var a=str.concat(str4,str5);
// from where i want ot break this string use split()
// from all avilable space in string, string are break and space now removed from all 
// show in aray form 
// Javascript,HTML --return
var a=str.split(' ');
// 2 times string are repeated
// Javascript HTMLJavascript HTML --return
var a=str.repeat(2);
// except index 5 and above
// avas --return
var a=str.slice(1,5);
// return all string
// Javascript HTML --return
var a=str.slice(0);
// almost same as slice()
// Javascript HTML --return
var a=str.substr(2);
// return index 5 value also
// avasc --return
var a=str.substr(1,5);
// same as slice()
// except index 5 and above
// avas --return
var a=str.substring(1,5);

var str6=7;
// number --return
document.write(typeof str6,'<br>');
// string --return
var a6=str6.toString();
document.write(typeof a6,'<br>');
// default property
// Javascript HTML
var a=str.valueOf();
document.write(a);
