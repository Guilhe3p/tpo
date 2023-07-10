
function CargarDatos(){
    if (localStorage.getItem("usuario") == undefined){
        window.location = "index.html"
    }
    const USUARIO = JSON.parse(localStorage.getItem("usuario"))

    document.getElementById("user-name").innerHTML = USUARIO.nombre
    document.getElementById("user-fnas").innerHTML = USUARIO.f_nas
    document.getElementById("user-mail").innerHTML = USUARIO.correo
}

CargarDatos()