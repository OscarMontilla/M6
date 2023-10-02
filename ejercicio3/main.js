// Captura de elementos del formulario
const nombreInput = document.querySelector("#nombre");
const primerApellidoInput = document.querySelector("#primerApellido");
const segundoApellidoInput = document.querySelector("#segundoApellido");
const dniInput = document.querySelector("#dni");
const imagenInput = document.querySelector("#imagenURL");

const crearFichaButton = document.querySelector("#boton");
crearFichaButton.addEventListener("click", pintaTabla);
crearFichaButton.addEventListener("click", actualizarFicha);


const bd = [];


function pintaTabla(event) {
  event.preventDefault(); 


  const nombre = nombreInput.value;
  const primerApellido = primerApellidoInput.value;
  const segundoApellido = segundoApellidoInput.value;
  const dni = dniInput.value;
  const imagenURL = imagenInput.value;

  const usuario = {
    "nombre": nombre,
    "apellidos": primerApellido + " " + segundoApellido,
    "dni": dni,
    "imagenURL": imagenURL
  };

  bd.push(usuario);

  let tabla = `
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>DNI</th>
        </tr>
      </thead>
      <tbody>
  `;
  let id = 1;
  bd.forEach(element => {
    tabla += `
      <tr>
        <td>${id++}</td>
        <td><img width="30" src="${element.imagenURL}" alt=""></td>
        <td>${element.nombre}</td>
        <td>${element.apellidos}</td>
        <td>${element.dni}</td>
      </tr>`;
  });

  tabla += `
      </tbody>
    </table>
  `;

  document.querySelector(".table").innerHTML = tabla;

 
}

function actualizarFicha(event) {
  event.preventDefault()
  // Obtener los valores de los campos del formulario
  const nombre = nombreInput.value;
  const primerApellido = primerApellidoInput.value;
  const segundoApellido = segundoApellidoInput.value;
  const dni = dniInput.value;
  const imagenURL = imagenInput.value;
  const fichaImagen = document.querySelector(".card-img-top");

  // Actualizar la ficha con los valores del formulario
  fichaNombre.innerHTML = nombre;
  fichaApellido.innerHTML = primerApellido + " " + segundoApellido;
  fichaDNI.innerHTML = "DNI: " + dni;
  fichaImagen.setAttribute("src", imagenURL);
}

