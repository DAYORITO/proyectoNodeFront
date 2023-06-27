const URL = 'https://apiproyecto.onrender.com/api/schema/cobros';
const crearCobro = async () => {
  let codigoCobro = document.getElementById('codigoC').value;
  let tipoCobro = document.getElementById('tipoC').value;
  let valor = document.getElementById('valorC').value;
  let descripcion = document.getElementById('descripcionC').value;

  // Validar que ningún campo esté vacío, excepto el campo "valor"
  if (!codigoCobro || !tipoCobro || !descripcion) {
    Swal.fire({
      title: 'Error',
      text: 'Todos los campos son obligatorios, excepto el valor',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    return;
  }

  // Validar que codigoCobro esté compuesto por 2 a 3 letras seguidas de 3 números
  let codigoCobroRegex = /^[A-Za-z]{2,3}\d{3}$/;
  if (!codigoCobroRegex.test(codigoCobro)) {
    Swal.fire({
      title: 'Error',
      text: 'El código de cobro debe estar compuesto por 2 a 3 letras seguidas de 3 números',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    return;
  }

  // Validar que tipoCobro solo acepte letras y espacios
  let tipoCobroRegex = /^[A-Za-z\s]+$/;
  if (!tipoCobroRegex.test(tipoCobro)) {
    Swal.fire({
      title: 'Error',
      text: 'El tipo de cobro solo debe contener letras y espacios',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    return;
  }

  let cobro = {
    codigoCobro: codigoCobro,
    tipoCobro: tipoCobro,
    valor: valor,
    descripcion: descripcion
  };

  fetch(URL, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(cobro),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      Swal.fire({
        title: '¡Muy bien!',
        text: 'Cuenta creada exitosamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(function(result) {
        if (result.isConfirmed) {
          // Redireccionar a una página específica cuando se hace clic en "Aceptar"
          window.location.href = "cobros";
        }
      });
    })
    .catch(error => {
      console.error(error);
      Swal.fire({
        title: 'Error',
        text: 'Ocurrió un error al crear el cobro. Por favor, inténtalo de nuevo más tarde.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    });
};
document.getElementById('createForm').addEventListener("submit", function(e){
    e.preventDefault();
    console.log("aqui llegue")
    crearCobro();

})