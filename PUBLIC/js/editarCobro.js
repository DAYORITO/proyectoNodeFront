
const editarCobro = (cobro) =>{

    document.getElementById('_id').value = "";
    document.getElementById('codigoCE').value="";
    document.getElementById('tipoE').value="";
    document.getElementById('descripcionE').value="";
    document.getElementById('valorE').value="";
    document.getElementById('estadoE').value="";
    // console.log("llegue hasta aqui");

    document.getElementById('_id').value = cobro._id;
    document.getElementById('codigoCE').value = cobro.codigoCobro;
    document.getElementById('tipoE').value= cobro.tipoCobro;
    document.getElementById('valorE').value= cobro.valor;
    document.getElementById('descripcionE').value = cobro.descripcion;
    document.getElementById('estadoE').value= cobro.estado;
}

const actualizarCobro = async() =>{
    
    let codigoCobro = document.getElementById('codigoCE').value
    let tipoCobro = document.getElementById('tipoE').value
    let valor= document.getElementById('valorE').value
    let descripcion = document.getElementById('descripcionE').value
    let estado = document.getElementById('estadoE').value
    

    let cobro = {
        _id: document.getElementById('_id').value,
        codigoCobro: codigoCobro,
        tipoCobro: tipoCobro,
        valor: valor,
        descripcion: descripcion,
        estado: estado
    }

        fetch(URL, {
            method: 'PUT',
            mode: 'cors',
            body:JSON.stringify(cobro),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) 
        .then(json => {
           alert( "Cambios guardados")
           location.reload()
        })
}
if(document.querySelector('#actualizarCobro'))
{
    document.querySelector('#actualizarCobro')
.addEventListener('click', actualizarCobro)
}