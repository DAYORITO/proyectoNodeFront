
const listarCuentas = async() => {
    let body = document.getElementById('contenido_cuentas')
    if(body){
        let mensaje = ''
        let acumulador=0;
        

        fetch('http://localhost:9092/api/schema/cuentas')//Permite llamar la API
        .then(res => res.json())
        .then(function (data) {
            let listarCuentas = data.cuenta
            listarCuentas.map((cuenta) => {
                const valorFormateado = cuenta.valortotal.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
                mensaje += 
                `<tr><td> ${acumulador+1 } </td>`+
                `<td>${cuenta.espacio}</td>`+
                `<td>${cuenta.NroCuenta}</td>`+
                `<td>${cuenta.fechaCreacion}</td>`+
                `<td>${cuenta.fechaLimite}</td>`+
                `<td>${valorFormateado}</td>`+
                `<td style="display:none">${cuenta.cobros}</td>`+

                `<td><a class="waves-effect waves-light btn modal-trigger" data-toggle="modal" data-target="#myModal" id="botonEditar" href="#" onclick='editarReporte(${JSON.stringify(cuenta)})'>Editar</a>
                 <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${cuenta._id}")'>Eliminar</a>
                </td></tr>`
                body.innerHTML = mensaje
            }   
            )
        })
    }
}

listarCuentas()