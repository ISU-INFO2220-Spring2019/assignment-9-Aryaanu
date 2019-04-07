/*Anu Aryal
03/03/2019
INFO 2220
Prof. Jonathon Holmes
Assignment 4
Objective: This is to create an external JavaScript file for objects.
*/


var personHolder;
var characters = [];

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age;
    this.stepsToTake;

    this.sequential = function () {
        var seq = "";
        for (i = 1; i <= this.stepsToTake; i++) {
            seq += i + " ";
        }
        return seq;
    };

    this.sumOdd = function () {
        var sum = 0;
        for (i = 1; i < this.age; i += 2) {
            sum += i;
        }
        return sum;

    };
}

function Converter() {
    // reference w3school 
    this.FtoC = function (f) {
        return c = (f - 32) * 5 / 9;
    };

    this.CtoF = function () {
        var c = arguments[0];
        return f = c * (9 / 5) + 32;
    };
}


function sayHello() {
    var name = prompt('What is your name');
    alert('Hello! ' + name);
}

function greet(hi) {
    var name = prompt('What is your name');
    alert(hi + ", " + name);
}

function doMaths(x, y) {
    var con = "" + x + y;
    var sum = x + y;
    var sub = x - y;
    var mul = x * y;
    var div = x / y;
    alert(con + "\n" + sum + "\n" + sub + "\n" + mul + "\n" + div);
}

function createPerson() {
    var firstName = prompt("What is your first name?");
    var lastName = prompt("What is your last name?");
    var age = prompt("What is your age?");
    //isNaN() method determines whether a value is NaN (Not-A-Number)
    if (isNaN(age) || age < 1 || age > 200) {
        alert("Please enter a valid number in range(1 - 200):");
    } else {
        personHolder = new Person(firstName, lastName);
        personHolder.age = age;
    }
}

function showSteps() {

    if (personHolder === "undefined") {
        alert("Object does not exist, please check the 'Fill Object' button first")
    } else {
        personHolder.stepsToTake = 10;
        alert(personHolder.firstName + " took steps  " + personHolder.sequential());
    }

}

function getDegreesInC(Far) {
    var converter = new Converter();
    converter.FtoC(Far);
    alert('The Boiling in Celcius is ' + c);
}

function getDegreesInF(Cel) {
    var converter = new Converter();
    converter.CtoF(Cel);
    alert('The Boiling in Fahrenheit is ' + f);
}


function fillCharacterArray() {

    var f_names = ["Fred", "Wimla", "Pebbles", "Barney", "Betty", "BamBam"];
    var l_names = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
    var ages = [36, 34, 7, 34, 32, 8];


    for (i = 0; i < 6; i++) {
        characters[i] = new Person(f_names[i], l_names[i]);
        characters[i].age = ages[i];
    }
}

function getCharacterAt(index) {

    if (characters.length == 0) {
        alert("Array has not been filled. Please click the 'Fill characters array' button");
    } else {
        alert(characters[index].firstName + " your odd age sum is " + characters[index].sumOdd())
    }
}
