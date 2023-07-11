/*obtengo los datos desde el sessionStore para usarlos en esta página*/

let arrayJuegos = JSON.parse(sessionStorage.getItem("juegos"))

let body = "";


for (let i = 0; i < arrayJuegos.length; i++) {

    body += `<div class="biblioteca">
        <a href="resenia_juego.html?id=${arrayJuegos[i].id}">
        <img src="${arrayJuegos[i].images.small}" alt="${arrayJuegos[i].name}" />
        </a>
        <div class="titulo">
        <a href="resenia_juego.html?id=${arrayJuegos[i].id}">
        <h1>
        ${arrayJuegos[i].name}
        </h1>
        </a>
        </div>
        <div class="caracteristicas">
            <div class="caracteristica">
                <img src="img/tiempo2.png" alt=""> 
                <p>${arrayJuegos[i].playtime} minutos</p>
            </div>
            <div class="caracteristica">
                <img src="img/jugadores.png" alt="">
                <p>${arrayJuegos[i].players} personas</p>
            </div>
        </div>

        </div>`;
}


document.getElementById("list").innerHTML = body;
