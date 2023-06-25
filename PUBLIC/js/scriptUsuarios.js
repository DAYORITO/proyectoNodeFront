const formulario = document.querySelector('#formulariousuario')
const messag = document.getElementById('registrousuario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const expresionEmail = /^([a-zA-Z0-9]+)\@[a-zA-Z]+\.[a-zA-Z]+$/;
    const expresionTelefono = /^[0-9]+$/
    const expresionDocumento = /^[0-9]+$/
    const expresionNombre = /^[a-zA-Z\s]+$/;
    const expresionpassword = /^[a-zA-Z]{8}[0-9]{1}$/;
    const expresionCpassword = /^[a-zA-Z]{8}[0-9]{1}$/;

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const documento = document.getElementById('numero').value;
    const email = document.getElementById('correo').value;
    const password = document.getElementById('pass').value;
    const Cpassword = document.getElementById('confirmar').value;

    try {
        if (email == '' || password == '' || nombre == '' || telefono == '' || documento == '') {
            throw 'No se pueden dejar campos vacios';
        }
        if (!expresionEmail.test(email)) {
            throw 'El email no cumple con la condición'
        }
        if (!expresionTelefono.test(telefono)) {
            throw 'El telefono no cumple con la condición'
        }
        if (!expresionDocumento.test(documento)) {
            throw 'El documento no cumple con la condición'
        }
        if (!expresionNombre.test(nombre)) {
            throw 'El nombre no cumple con la condición'
        }
        if (password == Cpassword) {
            if (!expresionpassword.test(password)) {
                throw 'La contraseña no cumple con la condición'
            }
            if (!expresionCpassword.test(Cpassword)) {
                throw 'La contraseña no cumple con la condición'
            }
        } else {
            throw 'Las contraseñas tienen que ser iguales'
        }

        messag.innerHTML = 'Usuario Registrado'
    } catch (e) {
        messag.innerHTML = e
    }




})

