
function CargarDatos(){
    if (localStorage.getItem("usuario") == undefined){
        window.location = "index.html"
    }
    const USUARIO = JSON.parse(localStorage.getItem("usuario"))

    document.getElementById("user-name").innerHTML = USUARIO.nombre
    document.getElementById("user-fnas").innerHTML = USUARIO.f_nas
    document.getElementById("user-mail").innerHTML = USUARIO.correo

    if (USUARIO.imagen != ""){
        document.getElementById("agregar-foto").style.display = "none"
        document.getElementById("foto-perfil").src = "img/"+USUARIO.imagen
    }

    puntuaciones = document.getElementById("puntuados")
    if (Object.keys(USUARIO.puntuados) = []){
        puntuaciones.innerHTML = "<h1>Parece que no tienes juegos puntuados todavía!</h1>"
    }
    for (let puntuado in Object.keys(USUARIO.puntuados)){
        puntuaciones.innerHTML += `
            <div class="juego-puntuado">
                <span><h1>{puntuado}</h1></span><span><h1>{USUARIO.puntuados[puntuado]}</h1></span>
            </div>
            `
    }
}



CargarDatos()