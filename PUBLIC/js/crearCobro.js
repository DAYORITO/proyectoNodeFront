const URL = 'http://localhost:9097/api/schema/cobros';
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
           alert("Cobro creado exitosamente")
        })
        location.reload();
    }
document.getElementById('createForm').addEventListener("submit", function(e){
    e.preventDefault();
    console.log("aqui llegue")
    crearCobro();
})