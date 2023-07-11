//Codigo para la animacion del puntaje y asignacion de valor

// Capturamos el evento de envío del formulario
document
    .getElementById("formulario")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Evitamos que se recargue la página

        // Obtenemos los valores del formulario
        var email = document.getElementById("user").value;
        var clave = document.getElementById("password").value;

        //verificamos que los valores no estén vacios
        var log = false
        if(email==""){
            document.getElementById("falta-user").style.opacity="1"
            return 0
        } else{
            document.getElementById("falta-user").style.opacity="0"
        }
        if (clave==""){
            document.getElementById("falta-contra").style.opacity="1"
            return 0
        } else{
            document.getElementById("falta-contra").style.opacity="0"
        }

        // Realizamos la solicitud POST al servidor
        url = '//pyban.pythonanywhere.com/login/' + email + '/' + clave
        console.log(url);
        fetch(url, {
            method: "GET",
            headers: {
                mode: 'same-origin',
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json()) // convertir a json
            .then((data) => mostrarData(data)) //imprimir los datos en la consola
            .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores

        const mostrarData = (data) => {
            let usuario = JSON.stringify(data);
            console.log(data);
            if(data.nombre!=undefined){
                console.log("usuario y contraseña correctos")
                localStorage.setItem("usuario", usuario);
                window.location.href = "index.html"
                return 1
            }else{
                console.log("usuario o contra incorrectos")
                document.getElementById("incorrecto").style.opacity="1"
                return 0
            }
            
            
            
        };

    });


    // function validarUsuario(){
    //     var log = false
    //     var usuario = document.getElementById("user")
    //     var contra = document.getElementById("password")
    
    //     if(usuario.value==""){
    //         document.getElementById("falta-user").style.opacity="1"
    //         return 0
    //     } else{
    //         document.getElementById("falta-user").style.opacity="0"
    //     }
    //     if (contra.value==""){
    //         document.getElementById("falta-contra").style.opacity="1"
    //         return 0
    //     } else{
    //         document.getElementById("falta-contra").style.opacity="0"
    //     }
    
    //     for (let user in USUARIOS){
    //         if (usuario.value == USUARIOS[user].nombre){
    //             console.log("usuario correct")
    //             if (contra.value == USUARIOS[user].contra){
    //                 console.log("contra correct")
    //                 sessionStorage.setItem("Usuario",`${USUARIOS[user].nombre}`)
    //                 sessionStorage.setItem("Foto",`${USUARIOS[user].foto}`)
    //                 log = true
    //             }
    //         }
            
    //     }
    
    //     if (log==true){
    //         window.location.href = "index.html"
    //         return 1
    //     }
    //     if (log==false){
    //         console.log("usuario o contra incorrectos")
    //         document.getElementById("incorrecto").style.opacity="1"
    //         return 0
    //     }
    //     console.log(window.location)
    
    // }