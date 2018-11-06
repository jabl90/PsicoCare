path=1;
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
        
        respuestastest[idx] = answer
        window.localStorage.setItem('respuestasTest', JSON.stringify(respuestastest));
    });
}

guardarResp(5);


(function () {
    let respuestastest = []
    let respuestastestStr = window.localStorage.getItem('respuestasTest');

    if (respuestastestStr) {
        respuestastest = JSON.parse(respuestastestStr);
        console.log(respuestastest);
    }

    guardarResp(respuestastest.length)
})();