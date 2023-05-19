fetch('https://api.boardgameatlas.com/api/search?client_id=JLBr5npPhV')
    .then(response => response.json())  // convertir a json
    .then(data => mostrarData(data))    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

const mostrarData = (data) => {
    //console.log(data.games)
    let body = ''

    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get("id");
    console.log("El id es:", id);


    for (let i = 0; i < data.games.length; i++) {
        if (id === data.games[i].id) {
            body += `<div class="resenia">
                            <div id="imagen">
                                <img src="${data.games[i].image_url}" alt=${data.games[i].name} />
                            </div>
                            <div id="datos_basicos">
                                    <h3>
                                    Nombre del Juego:  ${data.games[i].name}
                                    </h3>
                                    <p>
                                    <b>Tiempo de Juego:  </b>  ${data.games[i].playtime} minutos
                                    </p>
                                    <p>
                                    <b>Cantidad de Jugadores:  </b>  ${data.games[i].players} personas
                                    </p>
                            </div>
                            <div id="descripcion">
                                    <p><b>Descripción:  </b>  ${data.games[i].description}</p>
                            </div>
                    </div>`
        }
    }
    document.getElementById("list").innerHTML = body
}


