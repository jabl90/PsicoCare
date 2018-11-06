window.onload = function () {

    var dataPoints = [];
var chart = new CanvasJS.Chart("chartContainer",{
    title:{
        text:"Rendering Chart with dataPoints from External JSON"
    },
    data: [{
        type: "line",
        dataPoints : dataPoints,
    }]
});
// function  (data) {  
//     $.each(data, function(key, value){
//         dataPoints.push({x: value[0], y: parseInt(value[1])});
//     });
//     chart.render();
// }

    // var chart = new CanvasJS.Chart("chartContainer", {
    //     animationEnabled: true,
    //     theme: "light2",
    //     title: {
    //         text: "Anxiety progress"
    //     },
    //     axisX:{
    //         minimum: 0,
    //       },
    //     axisY: {
    //         includeZero: false,
    //         minimum: 0,
    //         maximum: 30
    //           },
    //     data: [{
    //         type: "line",
    //         dataPoints: [
    //             {y: guardarResp (1) 


            
    //         },

    //         ]
           
    //     }]
    // });
    // chart.render();

// }
// var dataPoints = [];
// $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json", function(data) {  
//     $.each(data, function(key, value){
//         dataPoints.push({x: value[0], y: parseInt(value[1])});
//     });
//     chart = new CanvasJS.Chart("chartContainer",{
//         title:{
//             text:"Live Chart with dataPoints from External JSON"
//         },
//         data: [{
//         type: "line",
//         dataPoints : dataPoints,
//         }]
//     });
//     chart.render();
//     updateChart();
// });



// localStorage.setItem("respuestasTest");

// for (let index = 0; index < localStorage.length; index++) {
//     const key = localStorage.key[index];

//     if key.indexOf("respuestasTest") === 0 {
//         let elem = localStorage.getItem(key);
//         console.log(elem)



    
    
