//I plan to put the data for my graph here

outrageData = [];
assaultData = [];
year = [];

combinedData = [];

/*I'll also get document.getElementByID so I can make use of the data in Javascript to display text and 
visuals when certain buttons are clicked*/

function outrage() {
    document.getElementById("bodyText").innerHTML = "I talk about outrage";

    /*I will insert a chart.js code for the table into the functions when triggered, but I hope it wont 
    make the syntax too complicated to read*/
}

function assault() {
    document.getElementById("bodyText").innerHTML = "I talk about assault";
}

function overall() {
    document.getElementById("bodyText").innerHTML = "I talk about everything";
}