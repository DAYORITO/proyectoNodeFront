
const listarCobros = async() => {
    let body = document.getElementById('contenido_cobros')
    if(body){
        let mensaje = ''
        let acumulador=0;
        

        fetch('https://apiproyecto.onrender.com/api/schema/cobros')//Permite llamar la API
        .then(res => res.json())
        .then(function (data) {
            let listarCobros = data.cobro
            listarCobros.map((cobro) => {
                let f=new Date(cobro.fechaCreacion)
                let fec = f.toISOString().split('T')[0];
                const valorFormateado = cobro.valor.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
                mensaje += 
                `<tr><td> ${acumulador+=1 } </td>`+
                `<td>${cobro.codigoCobro}</td>`+
                `<td>${cobro.tipoCobro}</td>`+
                `<td>${fec}</td>`+
                `<td>${cobro.descripcion}</td>`+
                `<td>${valorFormateado}</td>`+
                `<td>${cobro.estado}</td>`+
                `<td><a class="waves-effect waves-light btn modal-trigger" data-toggle="modal" data-target="#myModal" id="botonEditar" href="#" onclick='editarCobro(${JSON.stringify(cobro)})'>Editar</a>
                 <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${cobro._id}")'>Eliminar</a>
                </td></tr>`
                body.innerHTML = mensaje
            }   
            )
        })
    }
}

listarCobros()