/*Anu Aryal
03/08/2019
INFO 2220
Prof. Jonathon Holmes
Assignment 6
Objective: This is to create an external JavaScript file for events.
*/



function moveMouse(evt) {
	var evt = evt || window.event;
	var x = evt.x;
	var y = evt.y;
	var mouseCoords = document.getElementById("mouseCoords");
	mouseCoords.innerText = "x: " + x + " y: " + y;
}

function mousePressed(x) {
	var x = x || window.event;
	if (x.target != x.currentTarget)
		x.target.className = "pressed";
}

function resetClass(y) {
	var y = y || window.event;
	y.target.className = "";
}

function mouseHeadOver(z) {
	var z = z || window.event;
	z.target.className = "overHead";
}

window.onload = function () {
	var secM = document.getElementById("secMouser");
	secM.addEventListener("mousemove", moveMouse);
	secM.addEventListener("mousedown", mousePressed);
	secM.addEventListener("mouseup", resetClass);

	var h1 = secM.getElementsByTagName("h1")[0];
	h1.addEventListener("mouseover", mouseHeadOver);
	h1.addEventListener("mouseout", resetClass);

	var button = document.getElementById("btnSayHello");
	button.addEventListener("click", function () {
		alert("Hello!");
	});
	button.addEventListener("mousemove", function (evt) {
		var evt = evt || window.event;
		document.getElementById("mouseCoords").innerText = "Mouse is over button.";
		evt.stopPropagation();
		evt.cancelBubble = true;
	});
}
