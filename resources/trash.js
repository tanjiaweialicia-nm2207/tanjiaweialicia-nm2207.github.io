//I plan to put the raw data for my graph here
femaleOutrage = [1417, 1349, 1365, 1279, 1267, 1556, 1733, 1590];
maleOutrage = [89, 86, 85, 90, 101, 116, 125, 173];

femaleRape = [138, 123, 166, 167, 151, 189, 215, 289];
maleRape = [0, 0, 0, 0, 0, 0, 0, 0];

year = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

//These empty arrays will contain the total calculated values
maleCombined = maleOutrage;
femaleCombined = [];
outrageData = [];
rapeData = femaleRape;
combinedData = [];

// Summing the total number of cases
for (var i = 0; i < femaleOutrage.length; i++){
    outrageData.push(femaleOutrage[i]+maleOutrage[i]);
}

for (var i = 0; i < outrageData.length; i++){
    combinedData.push(outrageData[i]+rapeData[i]);
}

for (var i = 0; i < femaleOutrage.length; i++){
    femaleCombined.push(femaleOutrage[i]+femaleRape[i]);
}

function outrage() {

    document.getElementById("bodyText").innerHTML = "I talk about outrage";

    /*I will insert a chart.js code for the table into the functions when triggered*/

    const dataObj = {
        labels: year,
        datasets: [
            {
                label: "Female",
                data: femaleOutrage,
                borderColor: "hsla(6,100%,50%,1)",
                fill: false
            },
            {
                label: "Male",
                data: maleOutrage,
                borderColor: "hsla(0,100%,50%,1)",
                fill: false
            },
            {
                label: "Total",
                data: outrageData,
                borderColor: "hsla(45,100%,50%,1)",
                fill: false
            }
        ]
    };

    new Chart("sm-line-chart", {//!--Notice here we put the id of the "new chart" we created in the html part.
        type: "line",
        data: dataObj,
        options: { // configure options here
            responsive: false,
            title: {
                display: true,
                text: "Number of Outrage of Modesty Cases",
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            }
        }
    });
}


function rape() {
    document.getElementById("bodyText").innerHTML = "I talk about rape";

    const dataObj = {
        labels: year,
        datasets: [
            {
                label: "Female",
                data: femaleRape,
                borderColor: "hsla(6,100%,50%,1)",
                fill: false
            },
            {
                label: "Male",
                data: maleRape,
                borderColor: "hsla(0,100%,50%,1)",
                fill: false
            },
            {
                label: "Total",
                data: rapeData,
                borderColor: "hsla(45,100%,50%,1)",
                fill: false
            }
        ]
    };

    new Chart("sm-line-chart", {//!--Notice here we put the id of the "new chart" we created in the html part.
        type: "line",
        data: dataObj,
        options: { // configure options here
            responsive: false,
            title: {
                display: true,
                text: "Number of Rape Cases",
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            }
        }
    });
}

function overall() {
    document.getElementById("bodyText").innerHTML = "I talk about everything";

    const dataObj = {
        labels: year,
        datasets: [
            {
                label: "Female",
                data: femaleCombined,
                borderColor: "hsla(6,100%,50%,1)",
                fill: false
            },
            {
                label: "Male",
                data: maleCombined,
                borderColor: "hsla(0,100%,50%,1)",
                fill: false
            },
            {
                label: "Total",
                data: combinedData,
                borderColor: "hsla(45,100%,50%,1)",
                fill: false
            }
        ]
    };

    new Chart("sm-line-chart", {//!--Notice here we put the id of the "new chart" we created in the html part.
        type: "line",
        data: dataObj,
        options: { // configure options here
            responsive: false,
            title: {
                display: true,
                text: "Number of Overall Cases",
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            }
        }
    });
}