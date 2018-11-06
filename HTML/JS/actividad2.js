
document.getElementById( 'dropdown1' ).dropdown();

document.getElementById('submitboton').onclick = (function (evnt) {
    
 let formValid = document.getElementById('textform');
 textarray=[];      
 for (let index = 0; index < formValid.length-1; index++) {
textarray[index]= formValid[index].value;

 }
          
     if (formValid) {
            //ENVIAR
            $.ajax({
                method: "POST",
                url: "http://www.mocky.io/v2/5bd9731d2f00005e0006d11d",
               
                //url: "http:www.mocky.io/v2/5be0156b3200006100649400", //url false//
            }).done(function () {
                console.log(textarray)
                console.log("Request sent");
    
                //if (data.result) {
                  //  window.location.href = 'test2.html';
                //} else {
                    //mensaje de error
                  //  document.getElementById('mensaje').classList.remove('esconder');
                //}
            });
    
        } 
    
    
    });