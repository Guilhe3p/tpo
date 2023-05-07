var footerBody = `
<div class="footer_container">
    <div class="footer_grid">
        <div class="footer_item" id="footer_item_1">
            <p>Newsletter</p>
            <button name="Newsletter">Suscribirse</button>
        </div>
        <div class="footer_item" id="footer_item_2">
            <a href="https://www.facebook.com/">
                <img src="img/Facebook2.ico" alt="Facebook icon">
            </a>
            <a href="https://www.instagram.com/">
                <img src="img/Instagram2.ico" alt="Instagram icon">
            </a>
            
            <a href="https://www.twitter.com/">
                <img src="img/Twitter.ico" alt="Twitter icon">
            </a>
            <a href="https://www.youtube.com.ar">
                <img src="img/YouTube.ico" alt="Youtube icon">
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
<a href="#">
    <article>
        <img src="img/yu-gi-oh.jpg" alt="">
        <h5>El gran maestro Gregorio Messa retiene por decimoséptima vez el titulo de <i>Yu-gi-oh</i></h5>
    </article>
</a>
<a href="#">
    <article>
        <img src="img/viejo-vs-nuevo.jpg" alt="">
        <h5>Crece la enemistad entre la faccion Clasica y la Reformista por los derechos de los <i>"casuals"</i></h5>
    </article>
</a>
<a href="#">
    <article>
        <img src="img/vaca-aplasta4.jpg" alt="">
        <h5>TRAGEDIA: Campeon mundial de truco muere aplastado por una ternera</h5>
    </article>
</a>
<a href="#">
    <article>
        <img src="img/monopoly.jpeg" alt="">
        <h5>Los reformistas colorados buscan prohibir la usura en el Monopoly, azules entran en pánico</h5>
    </article>
</a>`


document.getElementById("footer").innerHTML = footerBody
document.getElementById("novedades").innerHTML = asideBody



//SlideHow
