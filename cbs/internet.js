// Función para actualizar el estado de la conexión
function checkConnection() {
    const messageElement = document.getElementById('internet');
    
    if (navigator.onLine) {
        // Si está en línea, ocultamos el mensaje
        messageElement.style.display = 'none';
    } else {
        // Si está fuera de línea, mostramos el mensaje
        messageElement.style.display = 'block';
    }
}

// Comprobar la conexión al cargar la página
window.addEventListener('load', checkConnection);

// Detectar eventos cuando se cambia de estado (en línea o fuera de línea)
window.addEventListener('online', checkConnection);
window.addEventListener('offline', checkConnection);
