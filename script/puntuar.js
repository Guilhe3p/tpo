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

const mostrarData = (data) => {
    let juegos = data//JSON.stringify(data)
    console.log(juegos);

    let opciones = ''

    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get("id");
    console.log(juegos.length)

    const puntuados = JSON.parse(sessionStorage.getItem("puntuaciones"))

    for (let i = 0; i < juegos.length; i++) {
        // let esta_puntuado = false
        // for(let j=0;j<puntuados.length;j++){
        //     if(puntuados[j].juego === juegos[i].codigo){
        //         esta_puntuado = true
        //         console.log("el juego",puntuados[j].juego,"esta puntuado")
        //     }
        // }
        // if (esta_puntuado==false){
        //     opciones += `<option value=${juegos[i].codigo}>${juegos[i].nombre}</option>`
        // }
        opciones += `<option value=${juegos[i].codigo}>${juegos[i].nombre}</option>`
    }
    document.getElementById("juegos").innerHTML = opciones
}



// Capturamos el evento de envío del formulario
document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault() // Evitamos que se recargue la página

    const radio = document.getElementsByName("targetgroup");

    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            var radioseleccionado = i + 1;
        }
    }

    // Obtenemos los valores del formulario
    var codigo = document.getElementById('juegos').value
    var puntajes = radioseleccionado
    console.log(codigo, puntajes)
    // Creamos un objeto con los datos del juego
    var puntos = {
        'codigo_usuario': JSON.parse(localStorage.getItem("usuario")).codigo,
        'codigo_juego': codigo,
        'puntaje': puntajes,
    }
    // Realizamos la solicitud POST al servidor
    url = '//pyban.pythonanywhere.com/puntuar' 
    console.log(url)
    fetch(url, {
        method: 'POST',
        //mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(puntos)
    })
        .then(function (response) {
            if (response.ok) {
                return response.json() // Parseamos la respuesta JSON
            } else {
                throw new Error('Error al puntuar el juego.')
            }
        })
        .then(function (data) {
            alert('la puntuacion del juego se realizó correctamente.')
        })
        .catch(function (error) {
            console.log('Error:', error)
            alert('Error al puntuar el juego.')
        })
})