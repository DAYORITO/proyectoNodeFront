
const listarCobros = async() => {
    let body = document.getElementById('contenido_cobros')
    if(body){
        let mensaje = ''
        let acumulador=0;
        

        fetch('http://localhost:9092/api/schema/cobros')//Permite llamar la API
        .then(res => res.json())
        .then(function (data) {
            let listarCobros = data.cobro
            listarCobros.map((cobro) => {
                mensaje += 
                `<tr><td> ${acumulador+=1 } </td>`+
                `<td>${cobro.codigoCobro}</td>`+
                `<td>${cobro.tipoCobro}</td>`+
                `<td>${cobro.fechaCreacion}</td>`+
                `<td>${cobro.descripcion}</td>`+
                `<td>${cobro.valor}</td>`+
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