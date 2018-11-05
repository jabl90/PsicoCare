document.getElementById('res1').onclick = (function (evnt) {
    evnt.preventDefault();

    let formValid = document.getElementById('loginform');


    var radios = document.getElementsByName('question1');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            question2 = (radios[i].value);

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    let respuestastest = [];
    
    respuestastest[0]=question2;

    window.localStorage.setItem('respuestasTest', JSON.stringify(respuestastest));
    console.log(question2);