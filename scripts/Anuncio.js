export default class Anuncio
{
    id;
    titulo;
    transaccion;
    descripcion;
    precio;
    caracteristicas;
    cantPuertas;
    cantKms;
    cantPotencia;

    constructor(id,titulo, transaccion, descripcion, precio, caracteristicas, cantPuertas, cantKms, cantPotencia)
    {
        this.id = id;
        this.titulo = titulo;
        this.transaccion = transaccion;
        this.descripcion = descripcion;
        this.precio = precio;
        this.caracteristicas = caracteristicas;
        this.cantPuertas = cantPuertas;
        this.cantKms = cantKms;
        this.cantPotencia = cantPotencia;
    }
}