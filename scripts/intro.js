/*Anu Aryal
03/03/2019
INFO 2220
Prof. Jonathon Holmes
Assignment 3
Objective: This is to create an external JavaScript file.
*/


alert("The Script in the header has run");
var loadLast = "I loaded last";
var anu = [];


if (anu == undefined || anu.length == 0) {
    anu = 'empty array'
}

else {
    alert("Array was not undefined");
}

anu = [34];
anu.push(5.5);
anu.push(33.5);
anu.push(46.5);
anu.push(59);
anu.push(64);
anu.push(43);
anu.push(64);
anu.push(48);
anu.push(49);
anu.push(40);
anu.push(59);
anu.push(44);
anu.push(54);
anu.push(19.5);
anu.push(25);
anu.push(69);
anu.push(23);



var i, sum = 0;

for (i = 0; i < anu.length; i++) {
    sum += anu[i];
}
sum = sum / anu.length;

alert(sum);


function name() {

    return "Anu Aryal";
}
