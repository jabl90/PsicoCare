window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Anxiety progress"
        },
        axisX:{
            minimum: 0,
          },
        axisY: {
            includeZero: false,
            minimum: 0,
            maximum: 30
              },
        data: [{
            type: "line",
            data: [
        
            ]
           
        }]
    });
    chart.render();

}

localStorage.setItem("respuestasTest");

for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key[index];

    if key.indexOf("respuestasTest") === 0 {
        let elem = localStorage.getItem(key);
        console.log(elem)



    }
    
}