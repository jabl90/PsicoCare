document.getElementById('res1').onclick = (function (evnt) {
    // evnt.preventDefault();

    let formValid = document.getElementById('loginform');


    var radios = document.getElementsByName('question1');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            question1 = (radios[i].value);

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    let respuestastest = [];
    
    respuestastest[0]=question1;

    window.localStorage.setItem('respuestasTest', JSON.stringify(respuestastest));
    console.log(question1);

    //[a,b,c,d,1]

    if (formValid) {
        //ENVIAR
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd9731d2f00005e0006d11d",
            data: question1,
        }).done(function () {
            console.log("La respuesta es " + question1);
        });

    }


});
