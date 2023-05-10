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

    var log = false
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
    console.log(window.location)

}


