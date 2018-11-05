console.log("Esto es el script");



document.getElementById('res1').onclick = (function (evnt) {
let questionnumber = document.getElementById("total").value;

let formValid = document.getElementById('loginform');
   
var answer = $("#test5").val();


var questionid =  "question"+questionnumber; 

    if (formValid) {
        //ENVIAR
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd9731d2f00005e0006d11d",
           
            //url: "http:www.mocky.io/v2/5be0156b3200006100649400", //url false//
            data: questionid,
        }).done(function () {
            console.log("La respuesta de "+ questionid+ " es "+answer);

            //if (data.result) {
              //  window.location.href = 'test2.html';
            //} else {
                //mensaje de error
              //  document.getElementById('mensaje').classList.remove('esconder');
            //}
        });

    } 


});