console.log(window.localStorage.getItem('datosUsuario'));

let perfilusuario = window.localStorage.getItem('datosUsuario');

let usuario = JSON.parse(perfilusuario);



document.getElementById('first_name').value=yourname;
document.getElementById('user_name').value=username;
document.getElementById('password').value=password;
document.getElementById('email').value=email;


/*usuario.forEach(element => {
    generarperfil += [element.usuario.getElementById('name').value = 'first_name',
    element.usuario.getElementById('email').value = 'email',
    element.usuario.getElementById('username').value = 'user_name',
    element.usuario.getElementById('password').value = 'password']

});
return generarperfil;
     });*/
