/*obtengo los datos desde el sessionStore para usarlos en esta página*/

let arrayJuegos = JSON.parse(sessionStorage.getItem("juegos"))

let body = "";


for (let i = 0; i < arrayJuegos.length; i++) {

    body += `<div class="biblioteca">
        <a href="resenia_juego.html?id=${arrayJuegos[i].id}">
        <img src="${arrayJuegos[i].images.small}" alt="${arrayJuegos[i].name}" />
        </a>
        <div>
        <h3>
        Nombre del Juego:  ${arrayJuegos[i].name}
        </h3>
        <p>
        <b>Tiempo de Juego:  </b>  ${arrayJuegos[i].playtime} minutos
        </p>
        <p>
        <b>Cantidad de Jugadores:  </b>  ${arrayJuegos[i].players} personas
        </p>
        </div>
        </div>`;
}


document.getElementById("list").innerHTML = body;
