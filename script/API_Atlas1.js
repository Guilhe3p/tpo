//Obtengo los datos de la API 

fetch("https://api.boardgameatlas.com/api/search?client_id=JLBr5npPhV")
    .then((response) => response.json()) // convertir a json
    .then((data) => mostrarData(data)) //imprimir los datos en la consola
    .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores

// En esta funcion almaceno el la sesión los datos obtenidos para que sea más rápida la carga durante la sesión

    const mostrarData = (data) => {
    let juegos = JSON.stringify(data.games)
    sessionStorage.setItem    ("juegos",juegos)
}