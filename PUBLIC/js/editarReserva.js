const editarReserva = (reserva) =>{
    console.log(reserva);

    document.getElementById('_id').value = "";
    document.getElementById('codigoE').value="";
    document.getElementById('tipoE').value="";
    document.getElementById('fechaE').value="";
    document.getElementById('apartamentoE').value="";
    document.getElementById('personaE').value="";
    document.getElementById('vehiculoE').value="";
    // console.log("llegue hasta aqui");
    let fechah=new Date(reserva.fechaReservar);

    document.getElementById('_id').value = reserva._id;
    document.getElementById('codigoE').value = reserva.codigoReserva;
    document.getElementById('tipoE').value= reserva.tipoReserva;
    document.getElementById('fechaE').value= fechah.toISOString().split('T')[0]
    document.getElementById('apartamentoE').value = reserva.espacio;
    document.getElementById('personaE').value= reserva.propietario;
    document.getElementById('vehiculoE').value= reserva.vehiculo;
    
}

const actualizarReserva = async() => {
    try {
      let codigoReserva = document.getElementById('codigoE').value;
      let espacio = document.getElementById('apartamentoE').value;
      let persona = document.getElementById('personaE').value;
      let vehiculo = document.getElementById('vehiculoE').value;
      const fechaActual = new Date();
        let fechaL = document.getElementById('fechaE').value;
        const fechaLi = new Date(fechaL)
        let reserva={}
  
      
      if (fechaLi < fechaActual) {
        throw new Error('La fecha no es valida');
      }
      if(vehiculo!=""){
        if( !regexMatricula.test(vehiculo)){
            throw new Error('La matricula no es valida');
        }
      }
        reserva ={
        _id: document.getElementById('_id').value, 
        codigoReserva: codigoReserva,
        fechaReservar: fechaL,
        espacio: espacio,
        propietario: persona,
        vehiculo: vehiculo
        }
      
  
      fetch('http://localhost:9092/api/schema/reservas', {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(reserva),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
        .then(response => response.json())
        .then(json => {

          console.log(json)
          
          Swal.fire({
            title: 'Éxito',
            text: 'Cambios guardados',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then(() => {
           location.reload()
          });
        });
    } catch (error) {
      console.log("Error actualizar");
      
      Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      console.error(error);
    }
  };
  if(document.querySelector('#actualizarReserva'))
  {
      document.querySelector('#actualizarReserva')
  .addEventListener('click', actualizarReserva)
  }
