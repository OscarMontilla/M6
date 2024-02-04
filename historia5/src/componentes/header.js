import { ranking } from "../vistas/ranking.js"
import { juego } from '../vistas/juego.js'
import { home } from "../vistas/home.js"



export const header = {
    template:  //html
    `
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <div class="mx-auto">
          <button id="home" class="btn btn-success ms-2 fs-4">HOME</button>
          <button id="rankings" class="btn btn-success ms-2 fs-4">RANKING</button>
          <button id="vistaJuego" class="btn btn-success mx-2 fs-4">JUEGO</button>
        </div>
      </div>
    </nav>
    `,
    script : ()=>{

        document.querySelector('#home').addEventListener('click', () => {
          document.querySelector('main').innerHTML= home.template;
        })

        document.querySelector('#rankings').addEventListener('click', () => {
          document.querySelector('main').innerHTML= ranking.template;
          ranking.script()
        })

        document.querySelector('#vistaJuego').addEventListener('click', () => {
          document.querySelector('main').innerHTML = juego.template
          juego.script()
        })
      }


    }
