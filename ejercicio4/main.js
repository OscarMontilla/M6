// Ejercicio 4.1 - Número Aleatorio
//Capturo los divs
const btnNumeroAleatorio = document.querySelector("#btnNumeroAleatorio");
const numeroAleatorio = document.querySelector("#numeroAleatorio");

// Agregamos un evento de clic al botón para generar un número aleatorio
btnNumeroAleatorio.addEventListener("click", aleatorio);

// Funcion que genera un numero aleatorio
function aleatorio() {
  // Obtenemos los valores ingresados en los campos num1 y num2, y los convertimos a enteros.
  const num1 = parseInt(document.querySelector("#num1").value);
  const num2 = parseInt(document.querySelector("#num2").value);

  // Generamos un número aleatorio dentro del rango especificado y lo mostramos en la página.
  const randomNum = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
  numeroAleatorio.textContent = "Número aleatorio: " + randomNum;
}

// Ejercicio 4.2 - Strings
const textoArea = document.querySelector("#texto");
const btnMayus = document.querySelector("#mayus");
const btnMinus = document.querySelector("#minus");
const btnBuscar = document.querySelector("#btnBuscar");
const txtBusqueda = document.querySelector("#txtBusqueda");
const resumen = document.querySelector("#resumen");
const palabrasLength = document.querySelector("#palabrasLength");
const coincidenciasLength = document.querySelector("#coincidenciasLength");

// Agregamos eventos para los botones de mayúsculas, minúsculas y búsqueda
btnMayus.addEventListener("click", convertirMayusculas);
btnMinus.addEventListener("click", convertirMinusculas);
btnBuscar.addEventListener("click", buscarPalabra);

// Agregamos un evento para detectar cambios en el área de texto
textoArea.addEventListener("input", mostrarResumen);

// Función para convertir el texto a mayúsculas
function convertirMayusculas() {
  textoArea.value = textoArea.value.toUpperCase();
}

// Función para convertir el texto a minúsculas
function convertirMinusculas() {
  textoArea.value = textoArea.value.toLowerCase();
}

// Función para buscar una palabra en el texto
function buscarPalabra() {
  // Obtenemos la palabra a buscar y el texto completo
  const palabraBuscada = document.querySelector("#buscarCoincidencia").value;
  const texto = textoArea.value;

  // Creamos una expresión regular (regex) con la palabra a buscar, con la opción 'gi' para coincidencias globales y sin distinción entre mayúsculas y minúsculas
  const regex = new RegExp(palabraBuscada, "gi");

  // Reemplazamos todas las coincidencias en el texto con etiquetas <mark> para resaltarlas
  const textoResaltado = texto.replace(regex, match => `<mark>${match}</mark>`);
  txtBusqueda.innerHTML = textoResaltado;
  
  // Contamos las palabras en el texto
  const palabras = texto.split(/\s+/).filter(Boolean);
  palabrasLength.innerHTML = `El texto contiene <strong>${palabras.length}</strong> palabras`;

  // Contamos las coincidencias encontradas
  const coincidencias = (texto.match(regex) || []).length;
  coincidenciasLength.innerHTML = `He encontrado <strong>${coincidencias}</strong> coincidencias`;
}

// Función para mostrar un resumen de las primeras 10 palabras del texto
function mostrarResumen() {
  const primerasDiezPalabras = textoArea.value.split(/\s+/).slice(0, 10).join(" ");
  resumen.textContent = primerasDiezPalabras + " ...";
}

// Ejercicio 4.3 - Manipulación de Nombres y Fechas
//Capturas los divs en las variables
const btnNombre = document.querySelector("#btnNombre");
const btnFecha = document.querySelector("#btnFecha");
const nombrePersona = document.querySelector("#nombrePersona");
const fechaDate = document.querySelector("#fechaDate");
const nombreConvertido = document.querySelector("#nombreConvertido");
const fechaConvertida = document.querySelector("#fechaConvertida");

// Agregamos eventos para los botones de convertir nombre y fecha
btnNombre.addEventListener("click", convertirNombre);
btnFecha.addEventListener("click", convertirFecha);

// Función para convertir el nombre
function convertirNombre() {
  // Obtenemos el nombre, lo eliminamos de espacios al principio y al final, y reemplazamos los espacios con guiones
  const nombre = nombrePersona.value.trim().replace(/\s+/g, "-");
  nombreConvertido.innerHTML = `Nombre convertido: <strong>${nombre.toUpperCase()}</strong>`;
}

// Función para convertir la fecha al formato 'dd-mm-aaaa'
function convertirFecha() {
  // Obtenemos la fecha y la dividimos en día, mes y año
  const fecha = fechaDate.value;
  const [dia, mes, anio] = fecha.split("/");

  // Formateamos la fecha y la mostramos en la página
  const fechaFormateada = `${dia}-${mes}-${anio}`;
  fechaConvertida.innerHTML = `Fecha convertida: <strong>${fechaFormateada}</strong>`;
}

// Ejercicio 4.4 - Generador de Contraseñas
const btnPass = document.querySelector("#btnPass");
const contrasena = document.querySelector("#contraseña");

// Agregamos un evento al botón para generar una contraseña
btnPass.addEventListener("click", generarContrasena);

// Función para generar una contraseña aleatoria
function generarContrasena() {
  // Especificamos la longitud de la contraseña y los caracteres permitidos
  const longitud = 10;
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let contrasenaGenerada = "";

  // Generamos la contraseña seleccionando caracteres aleatorios
  for (let i = 0; i < longitud; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    contrasenaGenerada += caracteres.charAt(randomIndex);
  }

  // Mostramos la contraseña generada en el campo de contraseña
  contrasena.value = contrasenaGenerada;
}

// Ejercicio 4.5 - Generador de Emoticonos
//Capturo divs y asigno a variables
const btnEmoji = document.querySelector("#btnEmoji");
const emojiDiv = document.querySelector("#emojiDiv");

// Agregamos un evento al botón para generar un emoticono aleatorio
btnEmoji.addEventListener("click", emojiAuto);

// Función para mostrar un emoticono aleatorio
function emojiAuto() {
  // Rangos de códigos Unicode para emoticonos
  const emoInicial = 0x1F600;
  const emoFinal = 0x1F64F;

  // Generamos un código Unicode aleatorio dentro del rango y lo convertimos en un emoticono
  const emojiRand = Math.floor(Math.random() * (emoFinal - emoInicial + 1)) + emoInicial;
  const emojiFinal = String.fromCodePoint(emojiRand);

  // Mostramos el emoticono en la página
  emojiDiv.textContent = emojiFinal;
}
