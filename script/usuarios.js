var USUARIOS = new Array()

class Usuario {
    constructor(id,nombre,contra,foto){
        this.id = id
        this.nombre = nombre
        this.contra = contra
        this.foto = foto
        USUARIOS.push(this)
    }
}

ur1 = new Usuario(1,"JuanPablo","Codo","../img/profe.jpg")
ur2 = new Usuario(2,"guilhe","123","../img/sin_foto.jpeg")


function validarUsuario(){
    var log = false
    var usuario = document.getElementById("user")
    var contra = document.getElementById("password")

    if(usuario.value==""){
        document.getElementById("falta-user").style.opacity="1"
        return 0
    } else{
        document.getElementById("falta-user").style.opacity="0"
    }
    if (contra.value==""){
        document.getElementById("falta-contra").style.opacity="1"
        return 0
    } else{
        document.getElementById("falta-contra").style.opacity="0"
    }

    for (let user in USUARIOS){
        if (usuario.value == USUARIOS[user].nombre){
            console.log("usuario correct")
            if (contra.value == USUARIOS[user].contra){
                console.log("contra correct")
                sessionStorage.setItem("Usuario",`${USUARIOS[user].nombre}`)
                sessionStorage.setItem("Foto",`${USUARIOS[user].foto}`)
                log = true
            }
        }
        
    }

    if (log==true){
        window.location.href = "index.html"
        return 1
    }
    if (log==false){
        console.log("usuario o contra incorrectos")
        document.getElementById("incorrecto").style.opacity="1"
        return 0
    }
    console.log(window.location)

}


