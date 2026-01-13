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
// FUNCIONALIDAD: LISTA DE HOBBIES (CON MEMORIA)
// ==============================

const inputHobby = document.getElementById('input-hobby');
const btnAgregar = document.getElementById('btn-agregar');
const listaHobbies = document.getElementById('lista-hobbies');

// 1. Cargar datos del almacenamiento al iniciar
// Intentamos leer si hay algo guardado. Si no hay nada, usamos un array vacío []
let misHobbies = JSON.parse(localStorage.getItem('hobbies')) || [];

// Esta función dibuja la lista en la pantalla basándose en el array
function renderizarLista() {
    listaHobbies.innerHTML = ''; // Limpiamos la lista visual para no repetir
    
    // Recorremos el array y creamos un <li> por cada hobby
    misHobbies.forEach(function(hobby) {
        const nuevoLi = document.createElement('li');
        nuevoLi.innerText = hobby;
        listaHobbies.appendChild(nuevoLi);
    });
}

// Llamamos a la función al principio para que muestre lo que había guardado
renderizarLista();


// 2. Escuchar el click para agregar nuevos
btnAgregar.addEventListener('click', function() {
    const texto = inputHobby.value;

    if (texto === "") return;

    // A. Agregamos el dato al Array (memoria RAM)
    misHobbies.push(texto);

    // B. Guardamos el Array actualizado en localStorage (Disco Duro)
    // JSON.stringify convierte el array en texto plano para poder guardarlo
    localStorage.setItem('hobbies', JSON.stringify(misHobbies));

    // C. Volvemos a dibujar la lista actualizada
    renderizarLista();

    // D. Limpiamos el input
    inputHobby.value = "";
});

// ==============================
// FUNCIONALIDAD: CONECTAR CON GITHUB
// ==============================

async function cargarPerfilGithub() {
    // 1. Definimos a quién vamos a llamar (Endpoint)
    // CAMBIA "TU_USUARIO_GITHUB" POR TU NOMBRE DE USUARIO REAL (sin comillas extra)
    const usuario = 'danirdev'; 
    const url = `https://api.github.com/users/${usuario}`;

    try {
        // 2. Hacemos la llamada (Fetch)
        console.log("Llamando a GitHub...");
        const respuesta = await fetch(url);

        // 3. Convertimos la respuesta extraña en JSON (Objetos que JS entiende)
        const datos = await respuesta.json();
        
        console.log("Datos recibidos:", datos); // ¡Mira esto en la consola!

        // 4. Actualizamos el HTML con los datos reales
        const titulo = document.getElementById('titulo-nombre');
        const imagen = document.getElementById('foto-perfil');
        const bio = document.getElementById('bio-perfil');

        // Usamos los datos que nos dio GitHub
        // "name", "avatar_url" y "bio" son nombres que GitHub usa en su base de datos
        if (datos.name) {
            titulo.innerText = datos.name;
        } else {
            titulo.innerText = datos.login; // Si no tienes nombre configurado, usa el usuario
        }
        
        imagen.src = datos.avatar_url;
        bio.innerText = datos.bio || "Este usuario no tiene biografía :(";

    } catch (error) {
        console.log("Hubo un error al conectar:", error);
    }
}

// 5. Ejecutamos la función apenas carga la página
cargarPerfilGithub();