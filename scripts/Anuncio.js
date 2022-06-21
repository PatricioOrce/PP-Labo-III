

export default class Anuncio
{
    id;
    titulo;
    transaccion;
    descripcion;
    precio;
    caracteristicas;

    constructor(id,titulo, transaccion, descripcion, precio, caracteristicas)
    {
        this.id = id;
        this.titulo = titulo;
        this.transaccion = transaccion;
        this.descripcion = descripcion;
        this.precio = precio;
        this.caracteristicas = caracteristicas;

    }

}