const editarCuenta = (cuenta) =>{

    document.getElementById('_id').value = "";
    document.getElementById('espaE').value="";
    document.getElementById('nroCuE').value="";
    document.getElementById('valortE').value="";
    document.getElementById('fechaLE').value="";
    // console.log("llegue hasta aqui");
  
    document.getElementById('_id').value = cuenta._id;
    document.getElementById('espaE').value = cuenta.espacio;
    document.getElementById('nroCuE').value= cuenta.NroCuenta;
    document.getElementById('valortE').value= cuenta.valortotal;
    const fecha = new Date(cuenta.fechaLimite);
    const fechaFormateada = fecha.toISOString().split('T')[0];
    document.getElementById('fechaLE').value = fechaFormateada;
    
    
    console.log(fechaFormateada); // Output: 2023-10-04
    console.log(cuenta.fechaLimite)
    console.log(cuenta.cobros[0].tipoCobro);

    $('#bodyE').empty();
    cuenta.cobros.forEach(cobro => {
        $('#bodyE').append(`
          <tr>
            <td>${cobro.tipoCobro}</td>
            <td>${cobro.descripcion}</td>
            <td>${cobro.valor}</td>
          </tr>
        `);
      });
  
  const actualizarCuenta = async() =>{
    
    try{
        let f=new Date(document.getElementById('fechaLE').value);
        let fl = new Date()
        if(f<fl){
            throw new Error('La fecha no es valida')
        }
    
    
    
  
        let cuenta = {
        _id: document.getElementById('_id').value,
        fechaLimite: document.getElementById('fechaLE').value
        }
  
        fetch('https://apiproyecto.onrender.com/api/schema/cuentas', {
            method: 'PUT',
            mode: 'cors',
            body:JSON.stringify(cuenta),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) 
        .then(json => {
           Swal.fire(
            "Hecho!",
            "Se ha actualizado con exito",
            'success'
           ).then(function(result) {
            if (result.isConfirmed) {
              location.reload()
            }
          })
           
        })
    }catch(e){
        Swal.fire(
            'Error',
            e.message,
            'error'
        )
    }
  }
  if(document.querySelector('#actualizarCuenta'))
  {
    document.querySelector('#actualizarCuenta')
  .addEventListener('click', actualizarCuenta)
  }
}