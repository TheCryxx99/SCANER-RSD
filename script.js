// Declarar las variables globales
let video;
let escaneando = false;
let camaraTrasera = true;

// Función para iniciar la cámara
async function iniciarCamara() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: camaraTrasera ? 'environment' : 'user'
            }
        });
        video.srcObject = stream;
    } catch (error) {
        console.error('Error al acceder a la cámara: ', error);
    }
}

// Función para cambiar la cámara
function cambiarCamara() {
    camaraTrasera = !camaraTrasera;
    iniciarCamara();
}

// Función para escanear
function escanear(resultado) {
    if (!escaneando) {
        escaneando = true;
        document.getElementById("resultado").innerHTML = "Escaneando...";
        document.getElementById("resultado").classList.add("escaneando");

        // Simula el escaneo durante 4 segundos
        setTimeout(function() {
            document.getElementById("resultado").innerHTML = resultado;
            document.getElementById("resultado").classList.remove("escaneando");
            document.getElementById("resultado").classList.add(resultado.toLowerCase());
            escaneando = false;
        }, 4000);
    }
}

// Función para volver al menú
function volverAlMenu() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultado").classList.remove("aprobado", "rechazado", "escaneando");
}

// Iniciar la cámara al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    video = document.getElementById("camara");
    iniciarCamara();
});
