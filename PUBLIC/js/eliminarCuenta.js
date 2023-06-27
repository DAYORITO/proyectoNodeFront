
const eliminar = (_id) => {
    
    Swal.fire({
      title: 'Confirmación',
      text: '¿Está seguro de realizar la eliminación?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        let cuenta = {
          _id: _id
        };
  
        fetch('https://apiproyecto.onrender.com/api/schema/cuentas', {
          method: 'DELETE',
          mode: 'cors',
          body: JSON.stringify(cuenta),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        })
          .then(response => response.json())
          .then(json => {
           
            Swal.fire({
              title: 'Éxito',
              text: json.mensaje,
              icon: 'success',
              confirmButtonText: 'Aceptar'
            }).then(() => {
              
              location.reload();
            });
          })
          .catch(error => {
           
            Swal.fire({
              title: 'Error',
              text: 'Ocurrió un error al eliminar la cuenta.',
              icon: 'error',
              confirmButtonText: 'Aceptar'
            });
            console.error(error);
          });
      }
    });
  };