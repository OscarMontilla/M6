// console.log('Hola desde main.js')



// capturar el boton
const botonSumar = document.querySelector('#botonSumar')
// Capturamos evento click del botón y llamamos a una función
botonSumar.addEventListener('click', sumar)
const botonRestar = document.querySelector('#botonRestar')
botonRestar.addEventListener('click', restar)
const botonMultiplicar = document.querySelector('#botonMultiplicar')
botonMultiplicar.addEventListener('click', multiplicar)
const botonDividir = document.querySelector('#botonDividir')
botonDividir.addEventListener('click', dividir)


// función sumar: suma valores de los inputs y los muestra por consola
function sumar(event){
  // Evito que refresque la página
  event.preventDefault()
    // Capturo el elemento input
  const input1 = document.querySelector('#num1')
  // Capturo su valor
  const valorInput1 = input1.value
  const valorInput1Num = parseInt(valorInput1)
  console.log(valorInput1)
  const input2 = document.querySelector('#num2')
  const valorInput2 = input2.value
  const valorInput2Num = parseInt(valorInput2)


  console.log('valor input1 : ', valorInput1)
  console.log('valor input2 : ', valorInput2)
  const resultado = valorInput1Num + valorInput2Num
  console.log(resultado)

  document.querySelector('#inputResultado').value = resultado
}

// función sumar: suma valores de los inputs y los muestra por consola
function restar(event){
  // Evito que refresque la página
  event.preventDefault()
    // Capturo el elemento input
  const input1 = document.querySelector('#num1')
  // Capturo su valor
  const valorInput1 = input1.value
  const valorInput1Num = parseInt(valorInput1)
  console.log(valorInput1)
  const input2 = document.querySelector('#num2')
  const valorInput2 = input2.value
  const valorInput2Num = parseInt(valorInput2)


  console.log('valor input1 : ', valorInput1)
  console.log('valor input2 : ', valorInput2)
  const resultado = valorInput1Num - valorInput2Num
  console.log(resultado)

  document.querySelector('#inputResultado').value = resultado
}

// función sumar: suma valores de los inputs y los muestra por consola
function multiplicar(event){
  // Evito que refresque la página
  event.preventDefault()
    // Capturo el elemento input
  const input1 = document.querySelector('#num1')
  // Capturo su valor
  const valorInput1 = input1.value
  const valorInput1Num = parseInt(valorInput1)
  console.log(valorInput1)
  const input2 = document.querySelector('#num2')
  const valorInput2 = input2.value
  const valorInput2Num = parseInt(valorInput2)


  console.log('valor input1 : ', valorInput1)
  console.log('valor input2 : ', valorInput2)
  const resultado = valorInput1Num * valorInput2Num
  console.log(resultado)

  document.querySelector('#inputResultado').value = resultado
}
// función sumar: suma valores de los inputs y los muestra por consola
function dividir(event){
  // Evito que refresque la página
  event.preventDefault()
    // Capturo el elemento input
  const input1 = document.querySelector('#num1')
  // Capturo su valor
  const valorInput1 = input1.value
  const valorInput1Num = parseInt(valorInput1)
  console.log(valorInput1)
  const input2 = document.querySelector('#num2')
  const valorInput2 = input2.value
  const valorInput2Num = parseInt(valorInput2)


  console.log('valor input1 : ', valorInput1)
  console.log('valor input2 : ', valorInput2)
  const resultado = valorInput1Num / valorInput2Num
  console.log(resultado)

  document.querySelector('#inputResultado').value = resultado
}


/*

const botonFicha = document.querySelector("#botonFicha")

botonFicha.addEventListener('click',crear)

function crear(event){
event.preventDefault()
const nombre = document.querySelector("#nombre")
const valorNombre = nombre.value
console.log('nombre: ', valorNombre)

const ap1 = document.querySelector("#ap1")
const valorAp1 = ap1.value
console.log('Primer apellido: ', valorAp1)

const ap2 = document.querySelector("#ap2")
const valorAp2 = ap2.value
console.log('Segundo apellido: ', valorAp2)
const dni = document.querySelector("#dni")
const valorDni = dni.value
console.log('DNI: ', valorDni)

const url = document.querySelector("#url")
const valorUrl = url.value
console.log('URL de la imagen: ', valorUrl)
document.querySelector('#inputNombre').innerHTML = valorNombre
document.querySelector('#inputAp1').innerHTML = valorAp1
document.querySelector('#inputAp2').innerHTML = valorAp2
document.querySelector('#input').innerHTML = valorDni
document.querySelector('#inputUrl').innerHTML = valorUrl


}

*/