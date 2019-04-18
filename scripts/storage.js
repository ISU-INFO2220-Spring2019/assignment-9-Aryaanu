/*Anu Aryal
04 / 10 / 2019
INFO 2220
Professor Jonathon Holmes
Assignment 9
Objective: This assignment is to create an external javascript file for storage.
*/


var people = [];

function login() {


    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var chkBox = document.getElementById("Remember");


    if (username === "weaver" && password === "tester") {
        if (chkBox.checked === true) {
            localStorage.setItem('Username', username);
        }
        alert("Login was success!");
        location.reload();
    }
    else {
        alert("Login Failed.");
    }
}
function forget() {
    document.getElementById("username").value = "";
    localStorage.removeItem("Username");
}
function load() {
    var input = document.getElementById("username");
    input.value = localStorage.getItem("Username");
}

window.onload = remembermycache;

function remembermycache() {
    var storeUser = localStorage.getItem('Username');
    if (storeUser != null) {
        document.getElementById("username").value = storeUser;
    }
}

function addPerson() {

    var pname = document.getElementById("name").value;
    var pphone = document.getElementById("phone").value;
    var page = document.getElementById("age");
    var pgroup = document.getElementsByClassName("group");

    var storeObject = {};
    storeObject["name"] = pname.value;
    storeObject["phone"] = pphone.value;
    storeObject["age"] = page.value;
    storeObject["group"] = pgroup.checked.value;

    var storeObject = {
        name: pname,
        phone: pphone
    };
    alert("storeObject.name");
}