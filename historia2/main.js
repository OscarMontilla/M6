// Creo variable nick vacia
const nick = ""

// Creo la funcion modificaNick
function modificaNick(nick){
    // Hago un if para que el usuario meta su nick y si no mete nada sale una alerta
    if(nick != ""){
        // Eliminar espacios en blanco
        nick = nick.trim()
        // Reemplazo espacios por _
        nick = nick.replace(" ","_")
        // para convertir texto a mayusculas
        nick = nick.toUpperCase()
        // Devuelvo nick
        return nick
    }else{
        // Alert para indicar que hay que escribir un Nick y no dejarlo en blanco
        alert("El nick no pot estar en blanc, escriba un Nick")
        // Devolvemos nulo
        return null
    }
    //para testear tendrias que poner en consola modificaNick("cara culo") o cualquier otro nombre y se pone _ entre medio
}

const data = ""

function meses(numeroMes){
    // Declaro los meses
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    // Devuelvo valores numeroMes
    return meses[numeroMes]
}

function modificaData(data){
    // Divido el contenido para saber cual es cada parte
    const partes = data.split("T");
    // Divido el contenido por cada : y /que haya y lo almaceno en variables
    const fechas = partes[0].split("/");
    const horas = partes[1].split(":");
    

    const año = `${fechas[0]}`;
    // Convierto de meses a integer y le restamos 1 para que los meses en vez de ser 1-12 sean 0-11
    const mes = meses(parseInt(fechas[1])-1);
    // Añado las horas minutos y segundos
    const dia = fechas[2];
    const hora = horas[0];
    const minutos = horas[1];
    const segundos = horas[2];
    // Creamos el contenido final ya formado y lo devolvemos para mostrarlo
    const fechaFormateada = `${dia} ${mes} ${año} - ${hora}:${minutos}:${segundos}`;
    return fechaFormateada;
}

// Creo la variable objecteDate con una fecha dentro para mostrar el contenido mas adelante
const objecteDate = new Date("2023/08/12 12:12:12")

// Creamos la funcion que modifica la segunda fecha
function modificaData2(objecteDate){
    // Creamos la funcion que nos mostrara el resultado por pantalla
    const result = `${objecteDate.getFullYear()}/${(objecteDate.getMonth()).toString()}/${objecteDate.getDate()}T${objecteDate.getHours()}:${objecteDate.getMinutes()}:${objecteDate.getSeconds()}`;
    // Devuelvo el resultado para mostrarlo
    return result
}

// Declaro la variable textodata en vacio para añadirla yo mas tarde por consola
const textodata = ""

// Creo la funcion que me dice los dias de diferencia entre una fecha y la fecha actual
function dias(textodata) {
    // Pasamos la fecha a milisegundos con Date.parse, todo ello para calcular la diferencia de dias mas adelante
    const date = new Date(Date.parse(textodata));
    // Si date es diferente de date, es decir, que es nulo o indefinido, aparecera lo siguiente:
    if (!date) {
    // Devuelve el contenido de su interior
      return {
        error: true,
        missatge: "El format no és correcte"
      }
    }
    
    const diff = Date.now() - date.getTime();
    // 1000 = milisegundos, 60 = segundos, 60 = minutos, 24 = horas
    diasDiff = Math.floor(diff / (1000 * 60 * 60 * 24))
    return diasDiff + " días"
}

// Creo el objeto dades
dades = {
    // Creo el objeto partidas
    // Definimos la información de las partidas
    partidas : [
        {	
            avata: 'imagen1.png',
            nick: 'MANOLO',
            puntuacion: 124561,
            fecha: '23/12/05T12:12:00'
        },
        {
            avatar: 'imagen2.png',
            nick: 'PEDRA',
            puntuacion: 1561,
            fecha: '23/09/05T13:12:00'
        }
    ],
    // Creo el objeto ranking
    ranking : [
        {	
            avatar: 'imagen1.png',
            nick: 'MANOLO',
            puntuacion: 124561
        },
        {
            avatar: 'imagen2.png',
            nick: 'PEDRA',
            puntuacion: 1561
        }
    ],
}


// Creo un objeto para introducir datos
const ls = {
    // Defino objeto setDades que introduce dades dentro de un JSON
    setDades: function(dades) {
        // Convierto dades a formato JSON y lo guardo en una variable jsonIfy para guardarlo en localStorage
        const jsonIfy = JSON.stringify(dades)
        // Guardo en localStorage
        localStorage.setItem('tetris_dades', jsonIfy);
        // compruebo si se ha guardado bien
        return true;
    },
    // Definimos el método getDades
    getDades: function() {
        // Obtenemos el valor tetris_dades del localStorage
        const tDades = localStorage.getItem('tetris_dades');
        if (!tDades){
            // Devolvemos un valor vacio ya que no hemos captado tDades
            return {}
        }else{
            // Si esta tDades en el localStorage, la convertimos de JSON a objeto y devolvemos.
            const jDades = JSON.parse(tDades)

            return jDades
        }
    }
}

partida = {
    avatar: 'imagen3.png',
    nick: 'OSCAR',
    puntuacion: 12000,
    fecha: '12/06/05T11:11:50'
}

function registrePartidas(partida){
    // Obtenemos los datos de nuestro localStorage
    const datos = ls.getDades()
    // Empujamos el contenido de partidas dentro del objeto datos.partidas
    datos.partidas.push(partida)
    // Meto en localStorage el contenido de antes y el nuevo
    ls.setDades(datos)
    console.log(datos)
    if (datos){
        return true
    }else{
        return {}
    }    
}
    