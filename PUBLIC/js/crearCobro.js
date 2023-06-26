const URL = 'https://apiproyecto.onrender.com/api/shema/cobros';
const crearCobro = async () =>{
    let codigoCobro = document.getElementById('codigoC').value;
    let tipoCobro = document.getElementById('tipoC').value;
    let valor = document.getElementById('valorC').value;
    let descripcion = document.getElementById('descripcionC').value;

    let cobro = {
        codigoCobro: codigoCobro,
        tipoCobro: tipoCobro,
        valor: valor,
        descripcion: descripcion
    }
    console.log(cobro)
        fetch(URL, {
            method: 'POST',
            mode: 'cors',
            body:JSON.stringify(cobro),
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
                  window.location.href = "cobros";
                }
              })
    })
}
document.getElementById('createForm').addEventListener("submit", function(e){
    e.preventDefault();
    console.log("aqui llegue")
    crearCobro();

})