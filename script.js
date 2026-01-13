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

// ==============================
// FUNCIONALIDAD: AGREGAR HOBBIES
// ==============================

// 1. Seleccionamos los elementos que vamos a usar
const inputHobby = document.getElementById('input-hobby');
const btnAgregar = document.getElementById('btn-agregar');
const listaHobbies = document.getElementById('lista-hobbies');

// 2. Escuchamos el click del botón "Agregar"
btnAgregar.addEventListener('click', function() {
    
    // a. Obtenemos lo que escribió el usuario
    const texto = inputHobby.value;

    // VALIDACIÓN: Si está vacío, no hacemos nada (para no agregar hobbies invisibles)
    if (texto === "") {
        alert("¡Por favor escribe algo!");
        return; // El return detiene la función aquí
    }

    // b. Creamos un nuevo elemento <li> de la nada (virtualmente)
    const nuevoLi = document.createElement('li');
    
    // c. Le ponemos el texto adentro
    nuevoLi.innerText = texto;

    // d. IMPORTANTE: Agregamos el nuevo <li> a la lista real (<ul>)
    listaHobbies.appendChild(nuevoLi);

    // e. Limpiamos la caja de texto para escribir otro
    inputHobby.value = "";
});