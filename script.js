// 1. SELECCIONAR: Buscamos los elementos en el HTML por su ID
// Es como decir: "Javascript, agárrame el botón y la caja del perfil"
const miBoton = document.getElementById('boton-color');
const miTarjeta = document.getElementById('perfil');

// 2. ESCUCHAR: Le ponemos una "oreja" al botón para esperar el click
miBoton.addEventListener('click', function() {
    
    // 3. ACTUAR: Lo que pasa cuando hacen click
    // Vamos a pedirle que cambie el color de fondo de la tarjeta
    
    if (miTarjeta.style.backgroundColor === 'black') {
        // Si ya es negro, lo volvemos blanco
        miTarjeta.style.backgroundColor = 'white';
        miTarjeta.style.color = 'black'; // Texto negro
    } else {
        // Si es blanco, lo volvemos negro (Modo Oscuro)
        miTarjeta.style.backgroundColor = 'black';
        miTarjeta.style.color = 'white'; // Texto blanco
    }
    
});