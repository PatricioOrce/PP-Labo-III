import Anuncio from "./Anuncio.js";

export default class Anuncio_Auto extends Anuncio
{
    cantPuertas;
    cantKms;
    cantPotencia;
    constructor(id,titulo, transaccion, descripcion, precio, caracteristicas, cantPuertas, cantKms, cantPotencia)
    {
        super(id, titulo,transaccion,descripcion, precio, caracteristicas);
        this.cantPuertas = cantPuertas;
        this.cantKms = cantKms;
        this.cantPotencia = cantPotencia;

    }
}