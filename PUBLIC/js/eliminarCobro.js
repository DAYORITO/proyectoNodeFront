const eliminar =(_id) => {
    if(confirm('¿Está seguro de realizar la eliminación?') == true){
            
    let cobro = {
        _id: _id
    }

       fetch('https://apiproyecto.onrender.com/api/schema/cobros', {
            method: 'DELETE',
            mode: 'cors',
            body:JSON.stringify(cobro),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json())
        .then(json => {
           alert(json.mensaje)
        })
        location.reload()
    }
}