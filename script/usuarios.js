var USUARIOS = new Array()

class Usuario {
    constructor(id,nombre,contra){
        this.id = id
        this.nombre = nombre
        this.contra = contra
        USUARIOS.push(this)
    }
}

ur1 = new Usuario(1,"juan","kk")
ur2 = new Usuario(2,"guilhe","123")
ur3 = new Usuario(3,"gg","321")


function validarUsuario(){
    var log = false
    var usuario = document.getElementById("user").value
    var contra = document.getElementById("password").value

    if(usuario==""){
        alert("usuario requerido")
        return 0
    }
    if (contra==""){
        alert("contraseña requerida")
        return 0
    }

    for (let user in USUARIOS){
        if (usuario == USUARIOS[user].nombre){
            console.log("usuario correct")
            if (contra == USUARIOS[user].contra){
                console.log("contra correct")
                sessionStorage.setItem("Usuario",`${USUARIOS[user].nombre}`)
                log = true
            }
        }
        
    }

    if (log==true){
        window.location.href = "index.html"
        alert("usuario correcto")
        return 1
    }
    if (log==false){
        console.log("usuario o contra incorrectos")
        document.getElementById("incorrecto").style.opacity="1"
        return 0
    }
    console.log(window.location)

}


