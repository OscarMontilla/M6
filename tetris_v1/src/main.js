
function pintaTabla(partidas){
    let tabla=`
    <h2 class="text-center text-light">Partidas</h2>
        <div class="input-group mb-3">
            <input
                type="text"
                class="form-control"
                placeholder="Buscador"
                aria-label="Buscador"
                aria-describedby="button-addon2"
            />
            <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
            >
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
        <table class="table table-dark">
            <theader>
                <tr>
                    <td></td>
                    <td>Nick <i class="bi bi-arrow-up-square"></i></td>
                    <td>Puntuación <i class="bi bi-arrow-up-square"></i></td>
                    <td>Fecha <i class="bi bi-arrow-up-square"></i></td>
                </tr>
            </theader>
            <tbody>`
                    
        partidas.forEach(element => {
            tabla+=`
            <tr>
                <td><img width="50" src="${element.avatar}" alt="avatar" /></td>
                <td>${element.nick}</td>
                <td>${element.puntos}</td>
                <td>${element.fecha}</td>
            </tr>
            `
        });
                    
            tabla+= `
            </tbody>
            <tfoot></tfoot>
        </table>
    `
document.querySelector("#partidas").innerHTML = tabla
console.log(tabla)
}
  
  
  const partidas = [
    {
      avatar: "account-avatar-profile-user-svgrepo-com.svg",
      nick: "Oscar",
      puntos: 3000,
      fecha: "20 enero 2023"
    },
    {
      avatar: "account-avatar-profile-user-svgrepo-com.svg",
      nick: "Alex",
      puntos: 2000,
      fecha: "10 septiembre 2023"
    },
    {
      avatar: "account-avatar-profile-user-svgrepo-com.svg",
      nick: "Angel",
      puntos: 2500,
      fecha: "25 octubre 2023"
    }
  ];
  
  pintaTabla(partidas);
  
  const datosEjemploPartida = {
    avatar: 'account-avatar-profile-user-svgrepo-com.svg',
    nick: 'MANUEL',
    puntos: 100,
    fecha: '21 MAYO 2023'
  };
  
  function insertaNuevaPartida(partidas) {
    console.log('Guardando partida:')
    partidas.push(datosEjemploPartida)
    console.log(partidas)
  }
  
  function pintaDatosPartida(partidas) {
  
    if (confirm("Quieres guardar partida?") == true) {
      insertaNuevaPartida(partidas);
      pintaTabla(partidas)
     
    } else {
      pintaTabla(partidas);
      console.log('Partida no guardada.');
    }
  }

   
function pintaRanking(event){
    const rankingDiv = document.querySelector ("#ranking");
    let rankingHtml =`
    <h2 class="text-center text-light">Ranking</h2>
    <table class="table table-dark align-middle">
        <theader>
            <tr class="bg-dark">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </theader>
        <tbody>
            <tr>
                <td class="fs-2">1</td>
                <td><img src="account-avatar-profile-user-svgrepo-com.svg" alt="avatar" /></td>
                <td>Angel</td>
                <td>1255</td>
            </tr>
            <tr>
                <td class="fs-2">2</td>
                <td><img src="account-avatar-profile-user-svgrepo-com.svg" alt="avatar" /></td>
                <td>Messi</td>
                <td>1240</td>
            </tr>
            <tr>
                <td class="fs-2">3</td>
                <td><img src="account-avatar-profile-user-svgrepo-com.svg" alt="avatar" /></td>
                <td>Iniesta</td>
                <td>1260</td>
            </tr>
        </tbody>
        <tfoot></tfoot>
    </table>
    `;
    rankingDiv.innerHTML = rankingHtml;
    console.log(rankingHtml)
}
    
pintaRanking();
console.log(pintaDatosPartida(partidas))
