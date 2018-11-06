let path=1;


document.getElementById('test5').onclick = (function (evnt) {
    
    answer = document.getElementById('test5').value;
    console.log(answer);
    path=2;
    });
    
       
    



function botofuncion(number) {

    pregunta=document.getElementById(number);
    console.log(pregunta)
    numerorespuesta=(number);
    console.log(numerorespuesta)
    answer=numerorespuesta;
    console.log(answer);
    path=2;
    }


function guardarResp(idx) {
        document.getElementById('res1').onclick = (function (evnt) {

        if(path=1){         
        var radios = document.getElementsByName('question') 

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                // do whatever you want with the checked radio
                answer = (radios[i].value);

                // only one radio can be logically checked, don't check the rest
                break;
            }
        }
    }   
        // Guardamos respuesta
        let respuestastest = [];
        let respuestastestStr = window.localStorage.getItem('respuestasTest');
        

        if (respuestastestStr) {
            respuestastest = JSON.parse(respuestastestStr);
           
        }
        
        respuestastest[idx] = answer;
        window.localStorage.setItem('respuestasTest', JSON.stringify(respuestastest));
    });
}

guardarResp(5);


(function () {
    let respuestastest = []
    let respuestastestStr = window.localStorage.getItem('respuestasTest');

    if (respuestastestStr) {
        respuestastest = JSON.parse(respuestastestStr);
    }

    guardarResp(respuestastest.length)
})();