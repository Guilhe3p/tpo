/*obtengo los datos desde el sessionStore para usarlos en esta página*/

let arrayJuegos = JSON.parse(sessionStorage.getItem("juegos"))
console.log(arrayJuegos)
let body = ''

//const urlSearchParams = new URLSearchParams(window.location.search);
//const id = urlSearchParams.get("id");


for (let i = 0; i < arrayJuegos.length; i++) {

    body += `<div class="biblioteca">
        <a href="resenia_juego.html?id=${arrayJuegos[i].codigo}">
        <img src="//64ad39807c7bcc007c8afa87--tiny-mochi-864b31.netlify.app/${arrayJuegos[i].imagen}" alt="${arrayJuegos[i].nombre}" />
        </a>
        <div class="titulo">
        <a href="resenia_juego.html?id=${arrayJuegos[i].codigo}">
        <h1>
        ${arrayJuegos[i].nombre}
        </h1>
        </a>
        </div>
        <div class="caracteristicas">
            <div class="caracteristica">
                <img src="img/tiempo2.png" alt=""> 
                <p>${arrayJuegos[i].tiempo} minutos</p>
            </div>
            <div class="caracteristica">
                <img src="img/jugadores.png" alt="">
                <p>${arrayJuegos[i].jugadores} personas</p>
            </div>
        </div>

        </div>`;
}


document.getElementById("list").innerHTML = body;
