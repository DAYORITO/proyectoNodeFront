
const listarCobros = async() => {
    let body = document.getElementById('contenido_reservas')
    if(body){
        let mensaje = ''
        let acumulador=0;
        

        fetch('https://apiproyecto.onrender.com/api/schema/reservas')//Permite llamar la API
        .then(res => res.json())
        .then(function (data) {
            let listarReservas = data.reservas
            console.log(data)
            console.log(listarReservas.reservas)
            console.log(typeof(listarReservas.reservas))
            listarReservas.map((reserva) => {
                console.log(reserva)
                let f=new Date(reserva.fechaReservar)
                let fec = f.toISOString().split('T')[0];
                
                mensaje += 
                `<tr><td> ${acumulador+=1 } </td>`+
                `<td>${reserva.codigoReserva}</td>`+
                `<td>${reserva.tipoReserva}</td>`+
                `<td>${fec}</td>`+
                `<td>${reserva.espacio}</td>`+
                `<td>${reserva.propietario}</td>`+
                `<td>${reserva.vehiculo}</td>`+
                `<td><a class="waves-effect waves-light btn modal-trigger" data-toggle="modal" data-target="#myModal" id="botonEditar" href="#" onclick='editarReserva(${JSON.stringify(reserva)})'>Editar</a>
                 <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${reserva._id}")'>Eliminar</a>
                </td></tr>`
                body.innerHTML = mensaje
            }   
            )
        })
    }
}

listarCobros()
