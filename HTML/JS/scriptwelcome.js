console.log('hola');
document.getElementById('register').onclick = (function(event){

    event.preventDefault();
    document.querySelectorAll('.error').forEach(elem => {
        elem.classList.add('hide');
    });

let formValid = document.getElementById('loginform').checkValidity();

if (formValid) {
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
            document.getElementById('mensaje').classList.remove('hide'); //mensaje de error
        }
    });

}

});
