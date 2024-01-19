let suscribtores = [];
//cargar datos json
fetch("modulos/Suscribtores/dataSuscribtores.json")
    .then(response => {
        return response.json();
    })
    .then(
        function(jsondata){
            suscribtores = jsondata;
            loadTable();
            document.getElementById("btnClear").classList.add("disabled");
            document.getElementById("btnDelete").classList.add("disabled");
        }
    )
//cargar la tabla
function loadTable(){
    let cuerpo = "";
    suscribtores.forEach(function(suscriptor){
        cuerpo += '<tr onclick="selectSuscriptor(' + suscribtores.indexOf(suscriptor) + ')">' +  
                    '<td>'+ suscribtores.indexOf(suscriptor) +'</td>'+
                    '<td>'+ suscriptor.nombre +'</td>'+
                '</tr>';
    });
    document.getElementById("tblSuscribtores").innerHTML = cuerpo;
}
//seleccionar un suscriptor
function selectSuscriptor(indice){
    document.getElementById("btnClear").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");

    document.getElementById("txtnombre").value = suscribtores[indice].nombre;
    document.getElementById("txtcorreo").value = suscribtores[indice].correo;
    document.getElementById("txttelefono").value = suscribtores[indice].telefono;
}
//limpiar campos
function limpiar(){
    document.getElementById("theform").reset();
    document.getElementById("txtnombre").focus();
    document.getElementById("btnClear").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");

}
//guardar datos
function guardar(){
    let suscriptor = {
        nombre: document.getElementById("txtnombre").value,
        correo: document.getElementById("txtcorreo").value,
        telefono: document.getElementById("txttelefono").value
    };
    suscribtores.push(suscriptor);
    //convierte el objeto a json
    let jsondata = JSON.stringify(suscribtores);

    //escriba los datos actualizados en el archivo json
    fetch("modulos/Suscribtores/dataSuscribtores.json",{
        method: "PUT",
        body: jsondata,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    loadTable();
    limpiar();
}
//eliminar datos
function eliminar(){
    let nombre = document.getElementById("txtnombre").value;
    suscribtores.forEach(function(suscriptor){
        if(suscriptor.nombre == nombre){
            suscribtores.splice(suscribtores.indexOf(suscriptor), 1);
        }
    });
    loadTable();
    limpiar();
}