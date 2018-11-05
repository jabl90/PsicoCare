
function guardarResp(idx) {
    document.getElementById('res1').onclick = (function (evnt) {
        var radios = document.getElementsByName('question');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                // do whatever you want with the checked radio
                answer = (radios[i].value);

                // only one radio can be logically checked, don't check the rest
                break;
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

(function () {
    let respuestastest = []
    let respuestastestStr = window.localStorage.getItem('respuestasTest');

    if (respuestastestStr) {
        respuestastest = JSON.parse(respuestastestStr);
    }

    guardarResp(respuestastest.length)
})();
