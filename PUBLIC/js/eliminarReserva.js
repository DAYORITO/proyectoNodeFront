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
        let reserva = {
          _id: _id
        };
  
        fetch('https://apiproyecto.onrender.com/api/schema/reservas', {
          method: 'DELETE',
          mode: 'cors',
          body: JSON.stringify(reserva),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        })
          .then(response => response.json())
          .then(json => {
            Swal.fire({
              title: 'Eliminación exitosa',
              text: json.mensaje,
              icon: 'success',
              confirmButtonText: 'Aceptar'
            }).then(() => {
              location.reload();
            });
          })
          .catch(error => {
            console.error(error);
            Swal.fire({
              title: 'Error',
              text: 'Ocurrió un error al eliminar el cobro. Por favor, inténtalo de nuevo más tarde.',
              icon: 'error',
              confirmButtonText: 'Aceptar'
            });
          });
      }
    });
  };