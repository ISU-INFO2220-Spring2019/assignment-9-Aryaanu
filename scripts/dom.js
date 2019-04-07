/*Anu Aryal
03/03/2019
INFO 2220
Prof. Jonathon Holmes
Assignment 5
Objective: This is to create an external JavaScript file for DOM.
*/

var firstNames = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "Bambam"];
var lastNames = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
var ages = ["36", "34", "7", "34", "32", "8"];

function showInnerText() {
    var innerText = document.getElementById("pOne").innerText;
    alert(innerText);
}

function showInnerHTML() {
    var innerHtml = document.getElementById("pOne").innerHTML;
    alert(innerHtml);

}

function numberList() {
    var ul = document.getElementsByTagName("ul")[0];
    liItems = ul.getElementsByTagName("li");
    var i = 0;
    for (i; i < liItems.length; i++) {
        var text = document.createTextNode(i + 1);
        liItems[i].appendChild(text);
    }
}

function markRows() {
    var tableRows = document.getElementById("tblMarkRows");
    var trs = tableRows.getElementsByTagName("tr");
    var i = 1;
    for (i; i < trs.length; i += 2) {
        trs[i].classList.add("other");
    }
}


function addRows() {
    var tableAdd = document.getElementById("tblAddRows");
    var i = 0;
    for (i; i < 6; i++) {
        var tr = document.createElement("tr");
        if (i % 2 == 0) tr.classList.add("other");

        var tdFirstName = document.createElement("td");
        var tdLastName = document.createElement("td");
        var tdAge = document.createElement("td");

        tdFirstName.innerText = firstNames[i];
        tdLastName.innerText = lastNames[i];
        tdAge.innerText = ages[i];

        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdAge);

        tableAdd.appendChild(tr);
    }
}

function addSuccess() {
    var divMessages = document.getElementById("divMessages");
    var divSuccess = document.createElement("div");
    divSuccess.classList.add("success");
    divSuccess.innerText = "This is Sucess Message.";
    divMessages.appendChild(divSuccess);
}

function addWarning() {
    var divMessages = document.getElementById("divMessages");
    var divWarning = document.createElement("div");
    divWarning.classList.add("warning");
    divWarning.innerText = "This is Warning Message.";
    divMessages.appendChild(divWarning);

}

function addError() {
    var divMessages = document.getElementById("divMessages");
    var divError = document.createElement("div");
    divError.classList.add("error");
    divError.innerText = "This is Error Message.";
    divMessages.appendChild(divError);
}