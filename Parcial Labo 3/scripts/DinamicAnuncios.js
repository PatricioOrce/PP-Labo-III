
window.onload = function(){



    items = JSON.parse(localStorage.getItem("anuncios"));

    items.forEach(element => {  
        AgregarAnuncio(element);
    });
    
    
    
    
    function AgregarAnuncio(anuncio)
    {
        //Consigo el contenedor
        $container = document.getElementById("container");
        //Creo un contenedor de la card.
        $card = document.createElement("div");
        $card.classList.add("card");
    
        //Creo el titulo
        $card_title = document.createElement("h3");
        $card_title.classList.add("card-item");
        $card_title.classList.add("card-title");
        $card_title.appendChild(document.createTextNode(anuncio.titulo));
        //Creo la descripcion
        $card_desc = document.createElement("p");
        $card_desc.classList.add("card-item");
        $card_desc.classList.add("card-descript");
        $card_desc.appendChild(document.createTextNode(anuncio.descripcion));
        //Creo el precio
        $card_precio = document.createElement("p");
        $card_precio.classList.add("card-item");
        $card_precio.classList.add("card-price");
        $card_precio.appendChild(document.createTextNode(anuncio.precio));
    
        //Creo el contenedor de iconos/imagenes
        $card_images = document.createElement("div");
        $card_images.classList.add("icon-container");
        
        $icon_puertas = document.createElement("img");
        $icon_puertas.classList.add("icon");
        $icon_puertas.setAttribute('src', '.././imgs/puerta-del-auto.png');
        $text_puertas = document.createElement("p");
        $text_puertas.classList.add("icon_text");
        $text_puertas.appendChild(document.createTextNode(anuncio.cantPuertas));
        
        $icon_kms = document.createElement("img");
        $icon_kms.classList.add("icon");
        $icon_kms.setAttribute('src', '.././imgs/velocidad-de-descarga.png');
        $text_kms = document.createElement("p");
        $text_kms.classList.add("icon_text");
        $text_kms.appendChild(document.createTextNode(anuncio.cantKms));
        
        $icon_potencia = document.createElement("img");
        $icon_potencia.classList.add("icon");
        $icon_potencia.setAttribute('src', '.././imgs/potenciar.png');
        $text_potencia = document.createElement("p");
        $text_potencia.classList.add("icon_text");
        $text_potencia.appendChild(document.createTextNode(anuncio.cantPotencia));
       
        $card_images.appendChild($icon_puertas);
        $card_images.appendChild($text_puertas);
        $card_images.appendChild($icon_kms);
        $card_images.appendChild($text_kms);
        $card_images.appendChild($icon_potencia);
        $card_images.appendChild($text_potencia);

    
        $card_btn = document.createElement("button");
        $card_btn.classList.add("card-item");
        $card_btn.classList.add("ver-vehiculo-btn");
        $card_btn.appendChild(document.createTextNode("Ver Anuncio"));
    
        $card.appendChild($card_title);
        $card.appendChild($card_desc);
        $card.appendChild($card_precio);
        $card.appendChild($card_images);
        $card.appendChild($card_btn);
    
        $container.appendChild($card);
    
        return $container;
    }

}
