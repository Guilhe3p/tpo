/*obtengo los datos desde el sessionStore para usarlos en esta página*/

let arrayJuegos = JSON.parse(sessionStorage.getItem("juegos"))

let body = ''

const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");
console.log("El id es:", id);


for (let i = 0; i < arrayJuegos.length; i++) {
    if (id === arrayJuegos[i].id) {
        body += `<div class="resenia">
                            <div id="imagen">
                                <img src="${arrayJuegos[i].image_url}" alt=${arrayJuegos[i].name} />
                            </div>
                            <div id="datos_basicos">
                                    <h1>
                                    ${arrayJuegos[i].name}
                                    </h1>
                                    <p>
                                    <b>Tiempo de Juego:  </b>  ${arrayJuegos[i].playtime} minutos
                                    </p>
                                    <p>
                                    <b>Cantidad de Jugadores:  </b>  ${arrayJuegos[i].players} personas
                                    </p>
                            </div>
                            <div id="descripcion">
                                    <p><b>Descripción:  </b>  ${arrayJuegos[i].description}</p>
                            </div>
                    </div>`
    }
}
document.getElementById("list").innerHTML = body



