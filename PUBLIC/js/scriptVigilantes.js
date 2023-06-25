
const formVigilante = document.querySelector('#formulariovigi')
const messagee = document.querySelector('#mostrar');
formVigilante .addEventListener('submit', (e) => {
  e.preventDefault();
  const expresionTelefono = /^[0-9]+$/
  const expresionDocumento = /^[0-9]+$/
  const expresionNombre = /^[a-zA-Z\s]+$/;
  const expresionEdad = /^[0-9]{2}$/

  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const documento = document.getElementById('numero').value;
  const edad = document.getElementById('edad').value;


  try {
    if (edad == '' || nombre == '' || telefono == '' || documento == '') {
      throw 'No se pueden dejar campos vacios';
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
    if (!expresionEdad.test(edad) || edad < 18) {
      throw 'Edad invalida'
    }
    messagee.innerHTML = 'Vigilante Registrado'
  } catch (e) {
    messagee.innerHTML = e
  }
})
