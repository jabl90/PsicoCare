document.getElementById('register').onclick = (function(event){

    event.preventDefault();
    document.querySelectorAll('.error').forEach(elem => {
        elem.classList.add('hide');
    });

let formValid = document.getElementById('loginform').checkValidity();
let passEqs = (document.getElementById('password').value == document.getElementById('confirm').value);

if (formValid && passEqs) {
    //enviar
    $.ajax({
        method: "POST",
        url: "http://www.mocky.io/v2/5be016cd320000110064940c",
     
        data: {
            yourname:document.getElementById('name').value,
            email:document.getElementById('email').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            confirmpassword:document.getElementById('confirm').value
        }
    }).done(function (data) {
        console.log(data);
        if (data.result) {
            window.location.href = 'menu.html';
        } else {
            document.getElementById('passwordnomatch').classList.remove('hide'); //mensaje de error
        }
    });

} else {

    if (!document.getElementById('name').checkValidity()) {
        document.getElementById('errorname').classList.remove('hide');
    }
    if (!document.getElementById('email').checkValidity()) {
        document.getElementById('erroremail').classList.remove('hide');
    }

    if (!document.getElementById('username').checkValidity()) {
        document.getElementById('errorusuario').classList.remove('hide');
    }
    if (!document.getElementById('password').checkValidity()) {
        document.getElementById('errorpassword').classList.remove('hide');
    }

    if(!passEqs){

        document.getElementById('passwordnomatch').classList.remove('hide');

    }

   /* if('password'!='confirm'){

        document.getElementById('passwordnomatch').checkValidity();
    }
   */
}


});
