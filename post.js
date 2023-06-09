var footerBody = `
<div class="footer_container">
    <div class="footer_grid">
        <div class="footer_item" id="footer_item_1">
            <p>Newsletter</p>
            <button name="Newsletter">Suscribirse</button>
        </div>
        <div class="footer_item" id="footer_item_2">
            <a href="https://www.facebook.com/">
                <img src="../img/Facebook2.ico" alt="Facebook icon">
            </a>
            <a href="https://www.instagram.com/">
                <img src="../img/Instagram2.ico" alt="Instagram icon">
            </a>
            
            <a href="https://www.twitter.com/">
                <img src="../img/Twitter.ico" alt="Twitter icon">
            </a>
            <a href="https://www.youtube.com.ar">
                <img src="../img/YouTube.ico" alt="Youtube icon">
            </a>
        </div>
        <div class="footer_item" id="footer_item_3">
            <a href="https://policies.google.com/privacy?hl=es">
                Política de privacidad
            </a>
            <br>
            <a href="https://support.google.com/?hl=es">Ayuda</a>
        </div>
    </div>
</div>`

var asideBody = `
<h1 style="margin: 5px auto;">Novedades</h1>
<a href="../novedades/yugioh.html">
    <article>
        <img src="../img/yu-gi-oh.jpg" alt="">
        <h5>El gran maestro Gregorio Messa retiene por decimoséptima vez el titulo de <i>Yu-gi-oh</i></h5>
    </article>
</a>
<a href="../novedades/enemistad-por-casuals.html">
    <article>
        <img src="../img/viejo-vs-nuevo.jpg" alt="">
        <h5>Crece la enemistad entre la faccion Clasica y la Reformista por los derechos de los <i>"casuals"</i></h5>
    </article>
</a>
<a href="../novedades/tragedia-truco.html">
    <article>
        <img src="../img/vaca-aplasta4.jpg" alt="">
        <h5>TRAGEDIA: Campeon mundial de truco muere aplastado por una ternera</h5>
    </article>
</a>
<a href="../novedades/usura-monopoly.html">
    <article>
        <img src="../img/monopoly.jpeg" alt="">
        <h5>Los reformistas colorados buscan prohibir la usura en el Monopoly, azules entran en pánico</h5>
    </article>
</a>
<a href="../novedades/barbie-ludo.html">
    <article>
        <img src="../img/ludo-barbie.jpg" alt="">
        <h5>El ludo de Barbie que causa furor entre los ludocas más veteranos</h5>
    </article>
</a>`

var headerBody = `
<a href="../index.html" class="cont-logo">
    <img class="head-logo" src="../img/logo.png" alt="Inicio">
</a>
        
<nav>
    <a class="navi" href="../eventos.html">Eventos</a></li>
    <a class="navi" href="../nosotros.html">Nosotros</a></li>
    <a class="navi" href="../biblioteca.html">Biblioteca</a></li>
</nav> 
<div class="logs">
    <a class="login" href="../register.html">Registrarme</a>
    <a class="login" href="../login.html">Acceder</a>
</div>
<div class="usua">
    
</div>
`

//colocando si existen los elementos header, footer, aside
header_doc = document.getElementById("header").innerHTML = headerBody
footer_doc = document.getElementById("footer")
aside_doc = document.getElementById("novedades")
if (header_doc != null){header_doc.innerHTML = headerBody}
if (footer_doc != null){footer_doc.innerHTML = footerBody}
if (aside_doc  != null){ aside_doc.innerHTML = asideBody }


//funciones para usuario
if (localStorage.getItem("usuario") != undefined){
    let datos = JSON.parse(localStorage.getItem("usuario"))

    if(datos.imagen==""){datos.imagen="sin_foto.jpeg"}
    logs = document.querySelector(".logs")
    logs.style.display = "none"
    usuarioRef = document.querySelector(".usua")
    usuarioRef.innerHTML += `
    <div class="perfil_data">
        <img src="../img/${datos.imagen}" alt="">
        <h2>${datos.nombre}</h2>
    </div>
    <div class="usua_options">
        <a href="perfil.html"><h3>Mi Perfil</h3></a>
        <h3 onclick="cerrarSesion()">Cerrar sesion</h3>
    </div>`
    usuarioRef.style.display = "flex"
}

function cerrarSesion(){
    localStorage.removeItem("usuario")
    window.location.href = "index.html"
}




//Carrusel
calesita = document.querySelector(".calesita")
imagenes = document.getElementsByClassName("caballito")
var cont = document.querySelector(".contenedor-calesita")
var contadorImagen = 0
console.log(contadorImagen)
var DerechaAplicada = false

function CambiarEstado(){
    console.log("cambiando:",DerechaAplicada,"a",!DerechaAplicada)
    DerechaAplicada = !DerechaAplicada
}

function moverDerecha(){
    console.log("entro como",DerechaAplicada)
    if(DerechaAplicada==true){
        // setTimeout(CambiarEstado,500,DerechaAplicada)
        return 0
    }
    if (contadorImagen < 0){
        contadorImagen = 3
    }
    if (contadorImagen > 6){
        contadorImagen = 0
    }
    if (contadorImagen>2){
        contadorImagen = 0
        calesita.scrollLeft = 0
    }else{calesita.scrollLeft += imagenes[contadorImagen].clientWidth +3;contadorImagen+=1}

    console.log("me ejecute")
    DerechaAplicada = true
    console.log("ahora soy",DerechaAplicada)
    setTimeout(CambiarEstado,1000,DerechaAplicada)
}

function moverIzquierda(){
    if (contadorImagen < 0){
        contadorImagen = 3
    }
    if (contadorImagen > 6){
        contadorImagen = 0
    }
    if (calesita.scrollLeft == 0){
        contadorImagen = 3
        calesita.scrollLeft = calesita.clientWidth
    } else{calesita.scrollLeft -= imagenes[contadorImagen].clientWidth+1;contadorImagen-=1}
    console.log(contadorImagen)
}

var texto = false

function mostrarTexto(objeto){
    if (texto==false){
        titulo=document.querySelector(`#${objeto.id} > h1`)
        if (titulo.textContent.length>30){
            objeto.innerHTML+=`<p>${titulo.textContent.substr(0,27)}...</p>`
        } else{
            objeto.innerHTML+=`<p>${titulo.textContent}</p>`
        }
        
        texto = true
    }
}
function quitarTexto(objeto){
    texto = false
    parrafos = document.querySelectorAll(`#${objeto.id} > p`)
    parrafos[0].remove();
}

//agrega los iconos en todas las paginas
function setFavicons(favImg){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',favImg);
    headTitle.appendChild(setFavicon);
}
setFavicons("../img/icono.ico")

//Ajustar el viewport en caso de que el with del celular sea menor al minimo establecido para el body
window.onload = function () {
    if(window.innerWidth <= 420) {
        var mvp = document.getElementsByTagName('meta')[2];
        mvp.setAttribute('content','width=400');
    }
}