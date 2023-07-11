//Obtengo los datos de la API 

url = '//pyban.pythonanywhere.com/juegos'
fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then((response) => response.json()) // convertir a json
    .then((data) => mostrarData(data)) //imprimir los datos en la consola
    .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores

// En esta funcion almaceno el la sesión los datos obtenidos para que sea más rápida la carga durante la sesión

const mostrarData = (data) => {
    let juegos = JSON.stringify(data)
    sessionStorage.setItem("juegos", juegos)
    console.log(data);
}
