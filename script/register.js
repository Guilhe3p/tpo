
// Capturamos el evento de envío del formulario
document.getElementById('register').addEventListener('submit', function (event) {
    event.preventDefault() // Evitamos que se recargue la página

    // Obtenemos los valores del formulario
    var email = document.getElementById('email').value
    var nombre = document.getElementById('nombre').value
    var clave = document.getElementById('clave').value
    var f_nas = document.getElementById('fnas').value

    // Creamos un objeto con los datos del juego
    var usuario = {
        'correo': email,
        'nombre': nombre,
        'clave': clave,
        'f_nas': f_nas,
        'imagen': "",
    } 
    console.log(usuario)
    // Realizamos la solicitud POST al servidor
    url = 'http://pyban.pythonanywhere.com/usuario'
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
        .then(function (response) {
            if (response.ok) {
                return response.json() // Parseamos la respuesta JSON
            } else {
                throw new Error('Error al registrar el nuevo usuario.')
            }
        })
        .then(function (data) {
            alert('¡Su usuario se creó correctamente!')
            window.location = "login.html"
        })
        .catch(function (error) {
            console.log('Error:', error)
            alert('Error al registrar usuario.')
        })
})
