// Selecciono los inputs en sus respectivas variables
const dado1 = document.querySelector("#dado1"); // Selecciona el elemento con el id "dado1" y lo almacena en dado1.
const dado2 = document.querySelector("#dado2"); // Selecciona el elemento con el id "dado2" y lo almacena en dado2.

// Capturo el click de los inputs
dado1.addEventListener("click", moverFicha1); // Agrega un oyente de eventos al hacer clic en dado1 para llamar a la función moverFicha1.
dado2.addEventListener("click", moverFicha2); // Agrega un oyente de eventos al hacer clic en dado2 para llamar a la función moverFicha2.

// Marca el inicio de las casillas para los dados
let numCasillaF1 = 1; // Inicializa la variable numCasillaF1 en 1, representando la posición del jugador 1.
let numCasillaF2 = 1; // Inicializa la variable numCasillaF2 en 1, representando la posición del jugador 2.

const ficha1 = `<div class="ficha jugador1"></div>`; // Crea una ficha HTML para el jugador 1.
const ficha2 = `<div class="ficha jugador2"></div>`; // Crea una ficha HTML para el jugador 2.

function tirarDado1() {
    // Genera un número aleatorio del 1 al 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    numCasillaF1 = numCasillaF1 + randomNumber; // Avanza la posición del jugador 1 según el número obtenido.

    dado1.innerHTML = `<button class="btn btn-light m-2 small">Jugador 1 - Dado: ${randomNumber}</button>`; // Actualiza el contenido de dado1 con el resultado del dado.

    if (numCasillaF1 > 20) {
        numCasillaF1 = 20 - (numCasillaF1 - 20); // Restringe la posición del jugador 1 si supera la casilla 20.
    }

    if (numCasillaF1 == 20) {
        alert("¡Jugador 1 ha ganado!"); // Muestra una alerta si el jugador 1 llega a la casilla 20.
    }
}

function tirarDado2() {
    // Genera un número aleatorio del 1 al 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    numCasillaF2 = numCasillaF2 + randomNumber; // Avanza la posición del jugador 2 según el número obtenido.

    dado2.innerHTML = `<button class="btn btn-light m-2 small">Jugador 2 - Dado: ${randomNumber}</button>`; // Actualiza el contenido de dado2 con el resultado del dado.

    if (numCasillaF2 > 20) {
        numCasillaF2 = 20 - (numCasillaF2 - 20); // Restringe la posición del jugador 2 si supera la casilla 20.
    }

    if (numCasillaF2 == 20) {
        alert("¡Jugador 2 ha ganado!"); // Muestra una alerta si el jugador 2 llega a la casilla 20.
    }
}

function moverFicha1() {
    const selector = `#casillas1 #c${numCasillaF1}`; // Selecciona la casilla correspondiente al jugador 1.

    document.querySelector(selector).innerHTML = ''; // Borra cualquier contenido anterior en la casilla.

    tirarDado1(); // Llama a la función para tirar el dado del jugador 1.

    document.querySelector(selector).innerHTML = ficha1; // Coloca la ficha del jugador 1 en la casilla.

    if (numCasillaF1 == numCasillaF2) {
        const selector = `#casillas2 #c${numCasillaF2}`; // Selecciona la casilla correspondiente al jugador 2.

        document.querySelector(selector).innerHTML = ''; // Borra cualquier contenido anterior en la casilla.

        numCasillaF2 = 1; // Vuelve al inicio si el jugador 1 come la ficha del jugador 2.

        const selector2 = `#casillas2 #c${numCasillaF2}`;

        document.querySelector(selector2).innerHTML = ficha2; // Coloca la ficha del jugador 2 en la casilla de inicio.
    }
}

function moverFicha2() {
    const selector = `#casillas2 #c${numCasillaF2}`; // Selecciona la casilla correspondiente al jugador 2.

    document.querySelector(selector).innerHTML = ''; // Borra cualquier contenido anterior en la casilla.

    tirarDado2(); // Llama a la función para tirar el dado del jugador 2.

    document.querySelector(selector).innerHTML = ficha2; // Coloca la ficha del jugador 2 en la casilla.

    if (numCasillaF2 == numCasillaF1) {
        const selector = `#casillas1 #c${numCasillaF1}`; // Selecciona la casilla correspondiente al jugador 1.

        document.querySelector(selector).innerHTML = ''; // Borra cualquier contenido anterior en la casilla.

        numCasillaF1 = 1; // Vuelve al inicio si el jugador 2 come la ficha del jugador 1.

        const selector2 = `#casillas1 #c${numCasillaF1}`;

        document.querySelector(selector2).innerHTML = ficha1; // Coloca la ficha del jugador 1 en la casilla de inicio.
    }
}
