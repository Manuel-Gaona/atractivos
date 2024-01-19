let turisticos = [];
//cargar datos json
fetch("modulos/Atractivos/dataTuristicos.json")
    .then(response => {
        return response.json();
    })
    .then(
        function(jsondata){
            turisticos = jsondata;
            loadTable();
            document.getElementById("btnClear").classList.add("disabled");
        }
    )

//cargar la tabla
function loadTable(){
    let cuerpo = "";
    turisticos.forEach(function(turistico){
        cuerpo += '<tr onclick="selectAtractivo(' + turisticos.indexOf(turistico) + ')">' +  
                    '<td>'+ turistico.ubicacion.lugar +'</td>'+
                    '<td>'+ turistico.nombre +'</td>'+
                    '<td>'+ turistico.descripcion +'</td>'+
                '</tr>';
    });
    document.getElementById("tblTuristicos").innerHTML = cuerpo;
}

//seleccionar un turistico
function selectAtractivo(indice){
    document.getElementById("btnClear").classList.remove("disabled");

    document.getElementById("txtlugar").value = turisticos[indice].ubicacion.lugar;
    document.getElementById("txtnombre").value = turisticos[indice].nombre;
    document.getElementById("txtdescripcion").value = turisticos[indice].descripcion;
    document.getElementById("txtlatitud").value = turisticos[indice].ubicacion.latitud;
    document.getElementById("txtlongitud").value = turisticos[indice].ubicacion.longitud;
}

//limpiar campos
function limpiar(){
    document.getElementById("theform").reset();
    document.getElementById("btnClear").classList.add("disabled");
}