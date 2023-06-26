// const boton= document.getElementById("boton");
// boton.addEventListener("click", function(e){
//     e.preventDefault();
//     try{
//         if (document.getElementById("Fecha").value == false){
//             throw new Error("Debe ingresar la fecha limite");
//         }
//     const Fecha= document.getElementById("Fecha").value;
//     let fechaActual = new Date();
//     let fechaLimite = new Date(Fecha);
//     if (fechaLimite < fechaActual){
//         alert("La fecha limite es inferior a la echa de creacion por lo que es invalida, vuelvala a ingresar")
//     }

// }catch(error){
//     alert(error)
// }
// });

const cargarEventos = (listarCobros) => {
  
  const espacios=[
    301,302,303,304,305,306,307,308,401,402,403,404,501
  ]
  const fechaInput = document.getElementById('fechaC');
  const fechaActual = new Date()
  const fechaponer= fechaActual.toISOString().split('T')[0];
      fechaInput.value = fechaponer;
 

  let select = document.getElementById('tipo');
  let descripcionInput = document.getElementById('descripcion');
  let valorInput = document.getElementById('valor');
  let espacio = document.getElementById('espacio');
  
  let paquete = {}
  

  // Manipulaciones iniciales de los elementos
  espacios.forEach((espa)=>{
    espacio.innerHTML += `<option value="${espa}">${espa}</option>`;
  });

  listarCobros.forEach((cobro) => {
    select.innerHTML += `<option value="${cobro._id}">${cobro.tipoCobro}</option>`;
  });

  select.addEventListener('change', function() {
    const numeroOpcionSeleccionada = select.selectedIndex;
    descripcionInput.value = listarCobros[numeroOpcionSeleccionada].descripcion;
    valorInput.value = listarCobros[numeroOpcionSeleccionada].valor;
  });

  $(document).ready(function() {
    $("#createForm").submit(function(e) {
      e.preventDefault();
      
      let fechaL = document.getElementById('fechaL').value;
      const fechaLi = new Date(fechaL)

      try{
        if (fechaLi <= fechaActual || fechaL == ""){
          throw new Error("La fecha limite no puede ser menor a la de creacion");
        }
      const numeroOpcionSeleccionada = select.selectedIndex;
      const cobroSeleccionado = listarCobros[numeroOpcionSeleccionada];
      paquete ={
        _id: listarCobros[numeroOpcionSeleccionada]._id,
        tipoCobro: listarCobros[numeroOpcionSeleccionada].tipoCobro,
        descripcion: listarCobros[numeroOpcionSeleccionada].descripcion,
        valor: listarCobros[numeroOpcionSeleccionada].valor
      };
      let cuenta ={
        NroCuenta: $('#nroCuenta').val(),
        fechaCreacion: fechaActual,
        fechaLimite: fechaL,
        espacio: $("#espacio").val(),
        valortotal: listarCobros[numeroOpcionSeleccionada].valor,
        cobros: paquete

      }
      fetch('https://apiproyecto.onrender.com/api/schema/cuentas', {
        method: 'POST',
        mode: 'cors',
        body:JSON.stringify(cuenta),
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
            window.location.href = "cuentaI";
          }
        })
        
    })
      
    }catch(e){
      Swal.fire(
        'Error',
        e.message,
        'question'
      )
    }
      
    });
  });
};
const numero = async () => {
  const response = await fetch('https://apiproyecto.onrender.com/api/schema/cuentas');
  const data = await response.json();
  const cuentasCobro = data.cuenta;
  console.log("cagaste")

  if (cuentasCobro.length > 0) {
    const ultimoRegistro = cuentasCobro[cuentasCobro.length - 1];
    const nroCuentaActual = ultimoRegistro.NroCuenta;
    const nuevoNroCuenta = nroCuentaActual + 1;

    const nroCuentaInput = document.getElementById('nroCuenta');
    if (nroCuentaInput) {
      nroCuentaInput.value = nuevoNroCuenta;
      
    }
  }
};


const ElementosApi = async () => {
  fetch('https://apiproyecto.onrender.com/api/schema/cobros')
    .then((res) => res.json())
    .then(function(data) {
      let listarCobros = data.cobro;
      cargarEventos(listarCobros);
    });
};

numero();

ElementosApi();
// const URL = 'http://localhost:9092/api/schema/cuentas';
// const crearCobro = async () =>{
//     let codigoCobro = document.getElementById('codigoC').value;
//     let tipoCobro = document.getElementById('tipoC').value;
//     let valor = document.getElementById('valorC').value;
//     let descripcion = document.getElementById('descripcionC').value;

//     let cobro = {
//         codigoCobro: codigoCobro,
//         tipoCobro: tipoCobro,
//         valor: valor,
//         descripcion: descripcion
//     }
//     console.log(cobro)
//         fetch(URL, {
//             method: 'POST',
//             mode: 'cors',
//             body:JSON.stringify(cobro),
//             headers: {"Content-type": "application/json; charset=UTF-8"}     
//         })
//         .then(response => response.json()) //La respuesta del método POST de la API
//         .then(data => {
//             console.log(data);
//            alert("Cobro creado exitosamente")
//         })
//         location.reload();
//     }
// document.getElementById('createForm').addEventListener("submit", function(e){
//     e.preventDefault();
//     console.log("aqui llegue")
//     try{
//         if (document.getElementById("Fecha").value == false){
//             throw new Error("Debe ingresar la fecha limite");
//         }
//     const Fecha= document.getElementById("Fecha").value;
//     let fechaActual = new Date();
//     let fechaLimite = new Date(Fecha);
//     if (fechaLimite < fechaActual){
//         alert("La fecha limite es inferior a la echa de creacion por lo que es invalida, vuelvala a ingresar")
//     }

// }catch(error){
//     alert(error)
// }
//     crearCobro();
// })


 
