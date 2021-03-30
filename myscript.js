// array method
var a=['1st','2nd','3rd','4th'];
// Sanjay,Aman,Ram,Karan --return
document.write(a+'<br>');
// Contat1 & Concat2 are added in last of a
 // Sanjay,Aman,Ram,Karan,Concat1,Concat2 --return
var b=a.concat('Concat1','Concat2');
document.write(b+'<br><br>');
// Sanjay,Aman,Ram,Karan,Sanjay,Aman,Ram,Karan,Concat1,Concat2 --return
var c=a.concat(b);
document.write(c+'<br>');
// Sanjay,Aman,Ram,Karan,Concat1,Concat2,Sanjay,Aman,Ram,Karan --return
var c=b.concat(a);
document.write(c+'<br><br>');
var d=['d1','d2'];
// concat a then b then d
// 1st,2nd,3rd,4th,1st,2nd,3rd,4th,Concat1,Concat2,d1,d2 --return
var c=a.concat(b,d);
document.write(c+'<br><br>');
// it makes a string value by joining all array value
var j=a.join('-');
document.write(j);