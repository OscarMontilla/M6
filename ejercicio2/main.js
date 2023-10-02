
    // Captura de elementos del formulario
    const nombreInput = document.querySelector("#nombre");
    const primerApellidoInput = document.querySelector("#primerApellido");
    const segundoApellidoInput = document.querySelector("#segundoApellido");
    const dniInput = document.querySelector("#dni");
    const imagenInput = document.querySelector("#imagenURL");
  
    // Captura de elementos de la ficha
    const fichaNombre = document.querySelector("#fichaNombre");
    const fichaApellido = document.querySelector("#fichaApellido");
    const fichaDNI = document.querySelector("#fichaDNI");
    const fichaImagen = document.querySelector(".card-img-top");
  
    
    const crearFichaButton = document.querySelector("#boton");
    crearFichaButton.addEventListener("click", actualizarFicha)
    
  
    
  
    // Función para actualizar la ficha con los datos del formulario
    function actualizarFicha(event) {
      event.preventDefault()
      // Obtener los valores de los campos del formulario
      const nombre = nombreInput.value;
      const primerApellido = primerApellidoInput.value;
      const segundoApellido = segundoApellidoInput.value;
      const dni = dniInput.value;
      const imagenURL = imagenInput.value;
  
      // Actualizar la ficha con los valores del formulario
      fichaNombre.innerHTML = nombre;
      fichaApellido.innerHTML = primerApellido + " " + segundoApellido;
      fichaDNI.innerHTML = "DNI: " + dni;
      fichaImagen.setAttribute("src", imagenURL);
    }
  ;
  
