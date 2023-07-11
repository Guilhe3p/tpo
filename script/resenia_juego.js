/*obtengo los datos desde el sessionStore para usarlos en esta página*/

let arrayJuegos = JSON.parse(sessionStorage.getItem("juegos"))

let body = ''

const urlSearchParams = new URLSearchParams(window.location.search);
const codigo = parseInt(urlSearchParams.get("id"));

console.log("El id es:", codigo);
console.log(arrayJuegos.length);

for (let i = 0; i < arrayJuegos.length; i++) {
    if (codigo === arrayJuegos[i].codigo) 
        body += `<div class="resenia">
                            <div id="imagen">
                                <img src="//64ad39807c7bcc007c8afa87--tiny-mochi-864b31.netlify.app//${arrayJuegos[i].imagen}" alt=${arrayJuegos[i].nombre} />
                            </div>
                            <div id="datos_basicos">
                                    <h1>
                                    ${arrayJuegos[i].nombre}
                                    </h1>
                                    <p>
                                    <b>Tiempo de Juego:  </b>  ${arrayJuegos[i].tiempo} minutos
                                    </p>
                                    <p>
                                    <b>Cantidad de Jugadores:  </b>  ${arrayJuegos[i].jugadores} personas
                                    </p>
                            </div>
                            <div id="descripcion">
                                    <p><b>Descripción:  </b>  ${arrayJuegos[i].descripcion}</p>
                            </div>
                    </div>` 
    
}
document.getElementById("list").innerHTML = body



