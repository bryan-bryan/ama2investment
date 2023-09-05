// Función para subir una imagen
function subirImagen(inputId) {
    const fileInput = document.getElementById(inputId);
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageData = event.target.result;
            // Guardar la imagen en localStorage con un nombre único
            const imageName = inputId + Date.now();
            localStorage.setItem(imageName, imageData);
            // Actualizar la imagen en index.html
            actualizarImagenEnIndex(imageName, imageData);
        };
        reader.readAsDataURL(file);
    }
}

// Función para actualizar la imagen en index.html
function actualizarImagenEnIndex(imageName, imageData) {
    // Enviar un mensaje a index.html para que actualice la imagen
    const mensaje = {
        tipo: 'actualizar_imagen',
        nombre: imageName,
        datos: imageData
    };

    // Envía el mensaje a index.html a través de localStorage
    localStorage.setItem('mensajeAIndex', JSON.stringify(mensaje));
}

// Función para inicializar la página
function inicializarPagina() {
    // Puedes agregar más código de inicialización si es necesario
}

// Llamar a la función de inicialización
inicializarPagina();

