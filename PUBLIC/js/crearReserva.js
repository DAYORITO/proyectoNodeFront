

    const datos = [
        { espacio: 301, propietario: "Sara Carrillo" },
        { espacio: 302, propietario: "Ana Lopez" },
        { espacio: 303, propietario: "Carlos Rodriguez" },
        { espacio: 401, propietario: "Juan Perez" },
        { espacio: 402, propietario: "Maria Garcia" },
        { espacio: 403, propietario: "Luis Hernández" },
        { espacio: 501, propietario: "Laura Torres" },
        { espacio: 502, propietario: "Pedro Sanchez" },
        { espacio: 503, propietario: "Carlo Loaiza" }
      ];
    
      
   
  
    let select = document.getElementById('apartamento');
    let propietario = document.getElementById('persona');
    let tipo = document.getElementById('tipoC');
    let vehiculo = document.getElementById('vehiculoC');
    const regex = /^[A-Za-z\s]+$/;
    const regexMatricula = /^[A-Za-z]{3}\d{3}$/
    
  
    // Manipulaciones iniciales de los elementos
    datos.forEach((dato) => {
      select.innerHTML += `<option value="${dato.espacio}">${dato.espacio}</option>`;
    });
  
    select.addEventListener('change', function() {
      const numeroOpcionSeleccionada = select.selectedIndex;
      propietario.value = datos[numeroOpcionSeleccionada].propietario;
    });
  
    $(document).ready(function() {
      $("#createForm").submit(function(e) {
        e.preventDefault();
        const fechaActual = new Date();
        let fechaL = document.getElementById('fechaC').value;
        const fechaLi = new Date(fechaL)
        let reserva={}
  
        try{
          if (fechaLi <= fechaActual || fechaL == "" ){
            throw new Error("Fecha ingresada no valida");
          }
          if(!regex.test(tipo.value) || !tipo.value ){
            throw new Error("Tipo de cobro no aceptado");
          }
          if(vehiculo.value!=""){
            if(!regexMatricula.test(vehiculo.value)){
                throw new Error("Matricula no valida");
            }
          }
          if (vehiculo.value==""){
            reserva ={
                codigoReserva: $('#codigoC').val(),
                tipoReserva: $('#tipoC').val(),
                fechaReservar: fechaL,
                espacio: $("#apartamento").val(),
                propietario: $("#persona").val(),
            }

          }else{
            reserva ={
            codigoReserva: $('#codigoC').val(),
            tipoReserva: $('#tipoC').val(),
            fechaReservar: fechaL,
            espacio: $("#apartamento").val(),
            propietario: $("#persona").val(),
            vehiculo: vehiculo.value
            }
          }
        
        fetch('https://apiproyecto.onrender.com/api/schema/reservas', {
          method: 'POST',
          mode: 'cors',
          body:JSON.stringify(reserva),
          headers: {"Content-type": "application/json; charset=UTF-8"}     
      })
      .then(response => response.json()) //La respuesta del método POST de la API
      .then(data => {
          console.log(data);
          Swal.fire(
            'Muy bien!',
            'Cuenta creada exitosamente',
            'success'
          ).then(function(result) {
            if (result.isConfirmed) {
              // Redireccionar a una página específica cuando se hace clic en "Aceptar"
              location.reload();
            }
          })
          
      })
        
      }catch(e){
        Swal.fire(
          'Error',
          e.message,
          'question'
        )
      }
        
      });
    });

  const numero = async () => {
    const response = await fetch('https://apiproyecto.onrender.com/api/schema/reservas');
    const data = await response.json();
    const reservas = data.reservas;
    console.log("cagaste")
  
    if (reservas.length > 0) {
      const ultimoRegistro = reservas[reservas.length - 1];
      const nroCuentaActual = ultimoRegistro.codigoReserva;
      const nuevoCodReserva = nroCuentaActual + 1;
  
      const codigoReservaInput = document.getElementById('codigoC');
      if (codigoReservaInput) {
        codigoReservaInput.value = nuevoCodReserva;
        
      }
    }
  };

  
  numero();
  
