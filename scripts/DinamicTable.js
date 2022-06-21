//Aqui realizaremos el desarrollo de una tabla dinamica.


    export function CrearTabla(objectArray) 
    {
        const tabla = document.createElement("table");

        tabla.appendChild(CrearHeader(objectArray[0]));
        tabla.appendChild(CrearBody(objectArray));

        return tabla;
    }
    function CrearHeader(object)
    {
        const thead = document.createElement("thead");
        const tr = document.createElement("tr");
        thead.classList.add("table-header");
        const keys = object.keys;

        for (var key in object) {
            if(key !== "id"){
                const th = document.createElement("th");
                key = key[0].toUpperCase() + key.slice(1);
                th.appendChild(document.createTextNode(key));
                tr.appendChild(th);
            }
        }
        thead.appendChild(tr);

        return thead;
    }
    function CrearBody(arr)
    {
        console.log(arr);

        if(arr.lenght == 0) {return null};
        const tbody = document.createElement("tbody");
        arr.forEach((element, index) => {
            //Agregar claes
            const tr = document.createElement("tr");
            tr.classList.add(index % 2 == 0 ? "oddTableField" : "pairTableField")
            for (const key in element) {
                if(key === "id")
                {
                    tr.setAttribute("data-"+key , element[key]);
                }else{
                    const td = document.createElement("td");
                    td.appendChild(document.createTextNode(element[key]));
                    tr.appendChild(td);
                }
            }

            tbody.appendChild(tr);
        });

        return tbody;
    }
    export function Add(object){
        console.log(JSON.stringify(object));
        var newArray = new Array();
        const list = JSON.parse(localStorage.getItem("anuncios"));
        object.id = getLastId(list) + 1;
        list.forEach(element => {
            newArray.push(element);
        });
        newArray.push(object);
        localStorage.setItem("anuncios", JSON.stringify(newArray));
        actualizarTabla(newArray);
        swal({
            title: "Excelente!",
            text: "Creaste el anuncio exitosamente!",
            icon: "success",
            button: "Aceptar!",
          });
    }

    export function Update(object){
        const list = JSON.parse(localStorage.getItem("anuncios"));
        list.forEach((element,index) => {
            if(object.id == element.id)
            {
                list[index].titulo = document.getElementById("title-input").value;
                list[index].descripcion = document.getElementById("description").value;
                list[index].precio = document.getElementById("precio-input").value;
                list[index].cantPuertas = document.getElementById("cant-puertas-input").value;
                list[index].cantKms = document.getElementById("cantkms-input").value;
                list[index].cantPotencia = document.getElementById("ptencia-input").value;
                if(document.getElementById("transaccion-venta-input").checked)
                {
                    list[index].transaccion = 'venta';
                }
                else{
                    list[index].transaccion = 'alquiler';

                }
                for (let i = 0; i < count(list[index].caracteristicas); i++) {
                    if(list[index].caracteristicas[i] != null)
                    {
                        switch(list[index].caracteristicas[i])
                        {
                            case 'GNC':
                                list[index].caracteristicas.push('GNC');
                                break;
                            case 'NAFTA':
                                list[index].caracteristicas.push('NAFTA');
                                break;
                            case 'DIESEL':
                                list[index].caracteristicas.push('DIESEL');
                                break;
                        }
                    }
                    
                }
            }
        });
        localStorage.setItem("anuncios", JSON.stringify(list));

        actualizarTabla(list);
        swal({
            title: "Excelente!",
            text: "Modificaste el anuncio exitosamente!",
            icon: "success",
            button: "Aceptar!",
          });
    }

    export function Delete(object){
        var newArray = new Array();
        const list = JSON.parse(localStorage.getItem("anuncios"));
        newArray = list.filter(x => x.id != object.id);
       
        localStorage.setItem("anuncios", JSON.stringify(newArray));
        actualizarTabla();
        Clean();
        swal({
            title: "Excelente!",
            text: "Eliminaste el anuncio exitosamente!",
            icon: "warning",
            button: "Aceptar!",
          });
    }

    function getLastId(arr)
    {
        if(arr.length > 0)
        {
            var mayor = arr[0].id;
            for (let i = 0; i < arr.length; i++) {
                if(arr[i].id > mayor)
                {
                    mayor = arr[i].id;
                }
            }
            return mayor;
        }
    }

    function Clean(){
        const $formulario = document.getElementById("formulario");
        const {txtId, titulo, transaccion, description, precio, cantPuertas, cantKms, cantPotencia} = $formulario;

        txtId.value = '';
        titulo.value = '';
        description.value = '';
        precio.value = '';
        cantPuertas.value = '';
        cantKms.value = '';
        cantPotencia.value = '';
    }

    function actualizarTabla(){
        const lista = localStorage.getItem("anuncios") ? JSON.parse(localStorage.getItem("anuncios")) : [];
        
        const container = document.querySelector("#table-div");
        while(container.children.length > 0){ 
            container.removeChild(container.firstElementChild);
        }
        container.appendChild(CrearTabla(lista));
    }