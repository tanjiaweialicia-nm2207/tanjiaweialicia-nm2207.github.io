//Raw Data for ChartJS
femaleOutrage = [1417, 1349, 1365, 1279, 1267, 1556, 1733, 1590];
maleOutrage = [89, 86, 85, 90, 101, 116, 125, 173];

femaleRape = [138, 123, 166, 167, 151, 189, 215, 289];
maleRape = [0, 0, 0, 0, 0, 0, 0, 0];

year = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

//Empty arrays contain total calculated values
combinedMale = maleOutrage
combinedFemale = [];
combinedOutrage = [];
combinedRape = femaleRape
combinedOverall = [];

//Calculated Data for ChartJS

for (var i = 0; i < femaleOutrage.length; i++){
    combinedFemale.push(femaleOutrage[i]+femaleRape[i]);
}

for (var i = 0; i < femaleOutrage.length; i++){
    combinedOutrage.push(femaleOutrage[i]+maleOutrage[i]);
}

for (var i = 0; i < combinedOutrage.length; i++){
    combinedOverall.push(combinedOutrage[i]+combinedRape[i]);
}

//Overall statistics chart

new Chart("overall", {
    type: "line",
    data: {
      labels: year,
      datasets: [
        { 
            data: combinedFemale,
            label: "Females",
            backgroundColor: "#d986d2",
            borderColor: "#d986d2",
            fill: false
        },
        {
            data: combinedMale,
            label: "Males",
            backgroundColor: "#3e95cd",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: combinedOverall,
            label: "Total",
            backgroundColor: "#8e5ea2",
            borderColor: "#8e5ea2",
            fill: false
        }
      ]
    },
    options:{
        responsive: false,
        plugins: {
            title:{
                display: true,
                text: "Number of Sexual Assault Cases reported between 2012 and 2019",
                fontSize: 24,
                fontFamily: "Times New Roman",
                fontColor: "black",
            },
        },
        scales: {
            xAxes: [{
               stacked: true
            }],
            yAxes: [{
               stacked: true
            }]},
  }});

//Outrage of Modesty Chart
new Chart("outrage", {
    type: 'line',
    data: {
      labels: year,
      datasets: [
        { 
            data: femaleOutrage,
            label: "Females",
            borderColor: "#d986d2",
            fill: false
        },
        {
            data: maleOutrage,
            label: "Males",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: combinedOutrage,
            label: "Total",
            borderColor: "#8e5ea2",
            fill: false
        }
      ]
    },
    options:{
        responsive: false,
        title:{
            display: true,
            text: "Number of Outrage of Modesy Cases reported between 2012 and 2019",
            fontSize: 24,
            fontFamily: "Times New Roman",
            fontColor: "black",
        }
    }
  });

  //Rape Chart

  new Chart("rape", {
    type: 'line',
    data: {
      labels: year,
      datasets: [
        { 
            data: femaleRape,
            label: "Females",
            borderColor: "#d986d2",
            fill: false
        },
        {
            data: maleRape,
            label: "Males",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: combinedRape,
            label: "Total",
            borderColor: "#8e5ea2",
            fill: false
        }
      ]
    },
    options:{
        responsive: false,
        title:{
            display: true,
            text: "Number of Rape Cases reported between 2012 and 2019",
            fontSize: 24,
            fontFamily: "Times New Roman",
            fontColor: "black",
        }
    }
  });
