// main.js

var num1 = 4443423434;
var num2 = 439439439;

var sum = num1 + num2;

// Psuedocode 2.1

document.getElementById("outputOne").innerText = "input num1 = " + num1;
document.getElementById("outputTwo").innerText = "input num2 = " + num2;

document.getElementById("sums").innerText = "The sum of num1 and num2 is " + sum;

// Psuedocode 2.2 


fah = prompt("Please input a Fahrenheit temperature: ");
document.getElementById("promptFah").innerText =  "input fahrenheitReading = " + fah;

ansfah = (fah-32) * 5/9;

document.getElementById("ansFah").innerText = "The temperature in Degrees Celsius is: " + ansfah;

// Psuedocode 2.3 

m = document.getElementById("takeM").innerText;
document.getElementById("displayM").innerHTML = "Value of m: " + m;

c = document.getElementById("takeC").innerText;
document.getElementById("displayC").innerHTML = "Value of c: " + c;

document.getElementById("displayE").innerText = "The value of E is: " + m*c*c;


var myElement = document.getElementById("demo");

//Question 3

//function declaration
// maps x in  the interval [a,b] into the interval [m, n]
let map =function (x, a, b, m, n){
    let range = n-m;
    // x is 'proportion' of the way from a to b
    // e.g. if a=10, b=20, and x=15, x is half (.5) of the way from a to b
    let proportion = (x-a)/(b-a); 
    return (m + proportion*range);
}
console.log(map(2, 1, 3, 4, 5))


