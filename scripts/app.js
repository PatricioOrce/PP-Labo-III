import Anuncio from "./Anuncio.js";
import { CrearTabla, Add, Update, Delete, Clean } from "./DinamicTable.js";

// window.onload = function (x)  {x.preventDefault};

//Inicializo el programa con sus anuncios.
const anuncios = [
  {
    id: 1,
    titulo: "BMW",
    transaccion: "venta",
    descripcion:
      "at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum",
    precio: 493341,
    caracteristicas: ["GNC", "NAFTA"],
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
    caracteristicas: ["GNC", "NAFTA"],
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
    caracteristicas: ["GNC", "NAFTA"],
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
    caracteristicas: ["GNC", "NAFTA"],
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
    caracteristicas: ["GNC", "NAFTA"],
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
    caracteristicas: ["NAFTA"],
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
    caracteristicas: ["GNC"],
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
    caracteristicas: ["DIESEL"],
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
    caracteristicas: ["GNC", "NAFTA"],
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
    caracteristicas: ["NAFTA"],
    cantPuertas: 2,
    cantKms: 69156,
    cantPotencia: 53,
  },
];
localStorage.setItem("anuncios", JSON.stringify(anuncios));

const tableDiv = document.getElementById("table-div");
const xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState == 4) {
    setTimeout(() => {
      const divSpinner = document.getElementById("divSpinner");
      divSpinner.setAttribute("Hidden", true);

      const divPrincipal = document.getElementById("table-div");
      divPrincipal.removeAttribute("Hidden");

      tableDiv.appendChild(CrearTabla(JSON.parse(xhr.responseText)));
    }, 2000);
  }
});
xhr.open("GET", "http://localhost:3000/anuncios");
xhr.send();

async function GetAnuncios() {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState == 4) {
      return JSON.parse(xhr.responseText);
    }
  });
  xhr.open("GET", "http://localhost:3000/anuncios");
  xhr.send();
}

//Consigo la instancia del formulario.
const $formulario = document.getElementById("formulario");
//Genero el evento submit para el formulario.
$formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  var caracteristicas = new Array(
    document.getElementById("id-gnc-caract").checked ? "GNC" : null,
    document.getElementById("id-nafta-caract").checked ? "NAFTA" : null,
    document.getElementById("id-diesel-caract").checked ? "DIESEL" : null
  );

  //Consigo los datos del formulario y los asigno en las respectivas variables
  const {
    txtId,
    titulo,
    transaccion,
    description,
    precio,
    cantPuertas,
    cantKms,
    cantPotencia,
  } = $formulario;
  const anuncio = new Anuncio(
    txtId.value,
    titulo.value,
    transaccion.value,
    description.value,
    precio.value,
    caracteristicas,
    cantPuertas.value,
    cantKms.value,
    cantPotencia.value
  );
  if (txtId.value === "") {
    Add(anuncio);
  } else {
    Update(anuncio);
  }
});


window.addEventListener("click", (e) => {
  var newArray = new Array();
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState == 4) {
      var list = JSON.parse(xhr.responseText);
      if (e.target.matches("tr td")) {
        var newArray = new Array();
        list.forEach((element) => {
          newArray.push(element);
        });
        let id = e.target.parentElement.dataset.id;
        const anuncio = newArray.find((anuncio) => anuncio.id == id);
        document.getElementById("id-gnc-caract").checked = false;
        document.getElementById("id-nafta-caract").checked = false;
        document.getElementById("id-diesel-caract").checked = false;

        const {
          txtId,
          titulo,
          transaccion,
          description,
          precio,
          cantPuertas,
          cantKms,
          cantPotencia,
        } = $formulario;

        txtId.value = anuncio.id;
        titulo.value = anuncio.titulo;
        transaccion.value = anuncio.transaccion;
        description.value = anuncio.descripcion;
        precio.value = anuncio.precio;
        cantPuertas.value = anuncio.cantPuertas;
        cantKms.value = anuncio.cantKms;
        cantPotencia.value = anuncio.cantPotencia;

        for (let i = 0; i < 3; i++) {
          if (
            anuncio.caracteristicas[i] != null &&
            anuncio.caracteristicas[i] != undefined
          ) {
            switch (anuncio.caracteristicas[i]) {
              case "GNC":
                document.getElementById("id-gnc-caract").checked = true;

                break;
              case "NAFTA":
                document.getElementById("id-nafta-caract").checked = true;

                break;
              case "DIESEL":
                document.getElementById("id-diesel-caract").checked = true;

                break;
            }
          }
        }
      } else if (e.target.matches("#btnEliminar")) {
        Delete(list.find((x) => x.id == $formulario.txtId.value));
      } else if (e.target.matches("#btnCancelar")) {
        Clean();
      }
    }
  });
  xhr.open("GET", "http://localhost:3000/anuncios");
  xhr.send();
});


var checkBoxes = document.querySelectorAll(".checkbox-header-item");
const table = document.getElementById("table-div");
checkBoxes.forEach(item => 
{
    item.addEventListener("click",(e) => 
    {
        if(table != null)
        {
            var arrayCheckboxes = document.getElementById("checkbox-container").querySelectorAll("input");
            var value;
            var checked;
            for (let i = 0; i < 8; i++) 
            {
              checked = arrayCheckboxes[i].checked;
              value =  arrayCheckboxes[i].value;
              ColumnLogic(value,checked);
            }       
        }        
    });
});


function ColumnLogic(value, checked)
{
    let trows = table.querySelector("thead").querySelectorAll("tr");

    checked ? trows[0].querySelectorAll("th")[value].removeAttribute("Hidden") :  trows[0].querySelectorAll("th")[value].setAttribute("Hidden", true);
    
    let bodyTrows = table.querySelector("tbody").querySelectorAll("tr"); 
    
    for (let i = 0; i < bodyTrows.length; i++) 
    {  
        checked ? bodyTrows[i].querySelectorAll("td")[value].removeAttribute("Hidden") : bodyTrows[i].querySelectorAll("td")[value].setAttribute("Hidden", true);
    }
}


const filterButton = document.getElementById("BtnFiltrar");
filterButton.addEventListener("click", (e) =>
{
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => 
    {
        if (xhr.readyState == 4) 
        {
            var promedio = NaN;
            var lista = JSON.parse(xhr.responseText);
            var comboBox = document.getElementById("cmbx-filter-options");
            promedio = Promedio(lista);
            if(comboBox.value == 'Venta'){
              var filteredList = lista.filter(x => x.transaccion.toLowerCase() == comboBox.value.toLowerCase());
              promedio = Promedio(filteredList);
            }
            else if(comboBox.value == 'Alquiler')
            {
              var filteredList = lista.filter(x => x.transaccion.toLowerCase() == comboBox.value.toLowerCase());
              promedio = Promedio(filteredList);
            }

            var selected = comboBox.value;
            var filtro;
            selected != "Todos" ?  filtro = lista.filter(anuncio => anuncio.Tipo == selected) : filtro = lista;
            var filteredValue = document.getElementById("filtered-info-input");
            filteredValue.value = promedio;
        }
    });
    xhr.open("GET", "http://localhost:3000/anuncios", true);
    xhr.setRequestHeader('Content-type','application/json;charset=utf8');
    xhr.send();
});


function Promedio(lista)
{
    console.log("jejpx");
    console.log(lista);
    var acum = 0;
    lista.forEach(element => 
    {
      console.log("1 " + element.precio);
      console.log("2 " + acum);

      acum =  acum +  parseInt(element.precio);
    });
    var valorCalculado = acum / lista.length;
    console.log("3 " + valorCalculado);
    return valorCalculado;
}