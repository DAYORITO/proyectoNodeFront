const formul = document.getElementById('formulariorol');
const message = document.querySelector('#registrorol');
formul.addEventListener('submit', (e) => {
  e.preventDefault();
  const expresionNombre = /^[a-zA-Z\s]+$/;
  const nombre = document.getElementById('nombrerol').value;
  const descripcion = document.getElementById('descripcion').value;
  const permisos = document.getElementById('permisos');
  const checkboxes = permisos.querySelectorAll('input[type="checkbox"]');

  try {
    if (nombre === '' || descripcion === '') {
      throw 'No se pueden dejar campos vacíos';
    }
    if (!expresionNombre.test(nombre)) {
      throw 'El nombre no cumple con la condición';
    }

    let permSeleccionado = false;
    checkboxes.forEach(checkbox => {
      if (checkbox.checked)//indica si el checkbox está seleccionado o no.
      {
        permSeleccionado = true;
      }
    });

    if (!permSeleccionado) {
      throw 'Debes seleccionar al menos un permiso';
    }

    message.innerHTML = 'Rol Registrado';
  } catch (e) {
    message.innerHTML = e;
  }
});