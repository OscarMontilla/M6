import { models } from '../componentes/model'
// models.js

export class ModeloPieza {
    constructor(modelo, angulo, matriz, x, y, longitud, altura) {
        this.modelo = modelo;
        this.angulo = angulo;
        this.matriz = matriz;
        this.x = x;
        this.y = y;
        this.longitud = longitud;
        this.altura = altura;
    }

    girar = () =>{
        if(this.angulo<3){
            this.angulo++
        }else{
            this.angulo=0;
        }
        this.matriz = models[this.modelo][this.angulo]
    }
    
}
