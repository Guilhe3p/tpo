//fetch('https://api.boardgameatlas.com/api/lists?username=trentellingsen&client_id=JLBr5npPhV')
fetch("https://api.boardgameatlas.com/api/search?client_id=JLBr5npPhV")
    .then((response) => response.json()) // convertir a json
    //.then(res => console.log(res))
    .then((data) => mostrarData(data)) //imprimir los datos en la consola
    .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores

const mostrarData = (data) => {
    console.log(data.games);
    //console.log(data.lists.length)
    let body = "";
    for (let i = 0; i < data.games.length; i++) {
        body += `<div class="biblioteca">
                        <a href="resenia_juego.html?id=${data.games[i].id}">
                            <img src="${data.games[i].image_url}" alt="${data.games[i].name}" />
                        </a>
                        <div>
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
                 </div>`;
    }
    console.log(body);
    document.getElementById("list").innerHTML = body;
};
