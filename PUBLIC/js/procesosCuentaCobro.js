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

const espacios=[
    {

    }
]


const ElementosApi = async() => {
    let select = document.getElementById('tipo')
    let descripcionInput = document.getElementById('descripcion');
    let valorInput = document.getElementById('valor');
    let agregarA = document.getElementById('botonA');
    let contenidoT = document.getElementById('contenido_cuentaC');
    if(select && descripcionInput && valorInput && agregarA && contenidoT) {
        let mensaje = ''
        let mensaje2= []
        let suma=0;
        let acumulador = 0;

        fetch('http://localhost:9097/api/schema/cobros')//Permite llamar la API
        .then(res => res.json())
        .then(function (data) {
            let listarCobros = data.cobro
            listarCobros.map((cobro) => {
                mensaje += 
                `<option value="${cobro._id}">${cobro.tipoCobro}</option>`
                select.innerHTML = mensaje
            });
            console.log(listarCobros)
            
            select.addEventListener('change', function(){
                const numeroOpcionSeleccionada = select.selectedIndex;
                console.log(numeroOpcionSeleccionada);
                descripcionInput.value = listarCobros[numeroOpcionSeleccionada].descripcion;
                valorInput.value=listarCobros[numeroOpcionSeleccionada].valor
            });
            

            $(document).ready(function() {
                $(document).on("click", ".eliminar-enlace", function() {
                    
                    var id = $(this).data("id");
                    let array = data.cobro;
                    for (var i = 0; i < array.length; i++) {
                      if (array[i]._id == id) {
                      console.log(array[i].valor);
                    }else {
                      console.log("no se encontro nada");
                    }
                  }
                    
                    
                    
                    console.log('este es el aray',array);
                    
                    console.log('este es el id',id);
                    console.log('esta es la suma',suma);
                    console.log('esta es la data',data);
                    
                    // suma-= array.find(objeto => objeto.id === id)
                    console.log(suma)
                
                    // Eliminar la fila correspondiente de la tabla
                    
                    $(this).closest("tr").remove();
                  });
                $("#botonA").click(function() {
                  
                  const numeroOpcionSeleccionada = select.selectedIndex;
                  const valorFormateado = listarCobros[numeroOpcionSeleccionada].valor.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
              
                  
                  descripcionInput.value = listarCobros[numeroOpcionSeleccionada].descripcion;
                  valorInput.value = listarCobros[numeroOpcionSeleccionada].valor;
                  suma+=listarCobros[numeroOpcionSeleccionada].valor;
                  mensaje2+={_id:listarCobros[numeroOpcionSeleccionada]._id, tipoCobro:listarCobros[numeroOpcionSeleccionada].tipoCobro, valor:listarCobros[numeroOpcionSeleccionada].valor }

                  document.getElementById('cuenta').innerHTML=suma
            
                  $("#contenido_cuentaC").append(
                  
                    `<tr>
                      <td>${acumulador += 1}</td>
                      <td>${listarCobros[numeroOpcionSeleccionada].tipoCobro}</td>
                      <td>${listarCobros[numeroOpcionSeleccionada].descripcion}</td>
                      <td>${valorFormateado}</td>
                      <td><a href="#" class="eliminar-enlace" data-id=("${listarCobros[numeroOpcionSeleccionada]._id}")'>Eliminar</a></td>
                    </tr>`
                    
                  );
                });
                // $('#botonA').on('click', function(){
                //   const tabla = document.getElementById("contenido_cuentaC");
                //   const filas = tabla.getElementsByTagName('tr')
                //   let suma=5;
                //   for (let i=0; i<filas.length; i++){
                //     const celdaValor = filas[i].querySelector('.Valor')
                //     const valor = parseFloat(celdaValor.textContent);
                //     if(!isNaN(valor)){
                //       suma += valor;
                //   }
                 
                // }
                // });
                document.getElementById('cuenta').innerHTML = suma;
                
              });





        });
        
}
}
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


 
window.addEventListener('DOMContentLoaded', () => {
    const fechaInput = document.getElementById('fechaC');
    const fechaActual = new Date().toISOString().split('T')[0];
    fechaInput.value = fechaActual;
  });