import Anuncio from "./Anuncio.js";
import Anuncio_Auto from "./Anuncio_Auto.js";
import {CrearTabla, Add, Update, Delete} from "./DinamicTable.js";

//Inicializo el programa con sus anuncios.
const anuncios = [
  {
    id: 1,
    titulo: "BMW",
    transaccion: "venta",
    descripcion:
      "at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum",
    precio: 493341,
    cantPuertas: 4,
    cantKms: 142826,
    cantPotencia: 370,
  },
  {
    id: 2,
    titulo: "Ford",
    transaccion: "venta",
    descripcion:
      "orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a",
    precio: 704640,
    cantPuertas: 5,
    cantKms: 59883,
    cantPotencia: 379,
  },
  {
    id: 3,
    titulo: "Ford",
    transaccion: "venta",
    descripcion:
      "et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor",
    precio: 124597,
    cantPuertas: 4,
    cantKms: 93871,
    cantPotencia: 236,
  },
  {
    id: 4,
    titulo: "Infiniti",
    transaccion: "alquiler",
    descripcion:
      "nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis",
    precio: 20248,
    cantPuertas: 6,
    cantKms: 92317,
    cantPotencia: 224,
  },
  {
    id: 5,
    titulo: "Chevrolet",
    transaccion: "venta",
    descripcion:
      "quam sapien varius ut blandit non interdum in ante vestibulum ante",
    precio: 761868,
    cantPuertas: 4,
    cantKms: 88378,
    cantPotencia: 397,
  },
  {
    id: 6,
    titulo: "Lotus",
    transaccion: "alquiler",
    descripcion:
      "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum",
    precio: 288219,
    cantPuertas: 3,
    cantKms: 89075,
    cantPotencia: 141,
  },
  {
    id: 7,
    titulo: "Mitsubishi",
    transaccion: "alquiler",
    descripcion:
      "ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat",
    precio: 831141,
    cantPuertas: 4,
    cantKms: 8193,
    cantPotencia: 360,
  },
  {
    id: 8,
    titulo: "Cadillac",
    transaccion: "venta",
    descripcion:
      "integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar",
    precio: 894597,
    cantPuertas: 4,
    cantKms: 52079,
    cantPotencia: 292,
  },
  {
    id: 9,
    titulo: "Buick",
    transaccion: "alquiler",
    descripcion:
      "amet cursus id turpis integer aliquet massa id lobortis convallis tortor",
    precio: 241191,
    cantPuertas: 4,
    cantKms: 62026,
    cantPotencia: 70,
  },
  {
    id: 10,
    titulo: "Mitsubishi",
    transaccion: "alquiler",
    descripcion:
      "egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget",
    precio: 406330,
    cantPuertas: 2,
    cantKms: 69156,
    cantPotencia: 53,
  },
];
localStorage.setItem("anuncios", JSON.stringify(anuncios));


window.onload = function (x)  {x.preventDefault};

//Consigo la instancia del formulario.
const $formulario = document.getElementById("formulario");


//Genero el evento submit para el formulario.
$formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    //Consigo los datos del formulario y los asigno en las respectivas variables
    const {txtId, titulo, transaccion, description, precio, cantPuertas, cantKms, cantPotencia} = $formulario;
    const anuncio = new Anuncio_Auto(txtId.value, titulo.value, transaccion.value, description.value, precio.value, cantPuertas.value, cantKms.value, cantPotencia.value)
    console.log(anuncio);
    if(txtId.value === ''){
        Add(anuncio);
    }
    else{
      console.log("Pene");
        Update(anuncio);
    }
});

// const tableCont = document.getElementById("#table-div");

window.addEventListener("click", (e) => {
  var newArray = new Array();
  const list = JSON.parse(localStorage.getItem("anuncios"));

  if (e.target.matches("tr td")) {
      var newArray = new Array();
      list.forEach(element => {
        newArray.push(element);
      });
      let id = e.target.parentElement.dataset.id;
      const anuncio = newArray.find((anuncio)=>anuncio.id==id);


      
      const {txtId, titulo, transaccion, description, precio, cantPuertas, cantKms, cantPotencia} = $formulario;

      txtId.value = anuncio.id;
      titulo.value = anuncio.titulo;
      transaccion.value = anuncio.transaccion;
      description.value = anuncio.descripcion;
      precio.value = anuncio.precio;
      cantPuertas.value = anuncio.cantPuertas;
      cantKms.value = anuncio.cantKms;
      cantPotencia.value = anuncio.cantPotencia;
      
    } 
    else if(e.target.matches('#btnEliminar')){
      // console.log(list.find(x => x.id == $formulario.txtId.value));
      Delete(list.find(x => x.id == $formulario.txtId.value));
    }
});


const tableDiv = document.getElementById("table-div");

setTimeout(() => 
{
    const divSpinner = document.getElementById("divSpinner");
    divSpinner.setAttribute("Hidden", true);

    const divPrincipal = document.getElementById("table-div");
    divPrincipal.removeAttribute("Hidden");

tableDiv.appendChild(CrearTabla(JSON.parse(localStorage.getItem("anuncios"))));

},5000);


function validarDatos()
{

   
}