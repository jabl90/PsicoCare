console.log("Esto es el script");


document.getElementById('res1').onclick = (function (evnt) {
   
    // console.log(evnt);
   // evnt.preventDefault();

   // document.querySelectorAll('.error').forEach(elem => {
     //   elem.classList.add('esconder');
    //});

    let formValid = document.getElementById('loginform');
   

    var radios = document.getElementsByName('question1');

    for (var i = 0, length = radios.length; i < length; i++)
    {
     if (radios[i].checked)
     {
      // do whatever you want with the checked radio
      question1 = (radios[i].value);
    
      // only one radio can be logically checked, don't check the rest
      break;
     }
    }


    console.log(question1);



    if (formValid) {
        //ENVIAR
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd9731d2f00005e0006d11d",
           
            //url: "http:www.mocky.io/v2/5be0156b3200006100649400", //url false//
            data: question1,
        }).done(function () {
            console.log("La respuesta es "+ question1);

            //if (data.result) {
              //  window.location.href = 'test2.html';
            //} else {
                //mensaje de error
              //  document.getElementById('mensaje').classList.remove('esconder');
            //}
        });

    } 


});
