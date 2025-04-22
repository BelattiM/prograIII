const titulo = document.getElementById("tituloPrincipal");
titulo.textContent = "Este es el nuevo Titulo";

const parrafos = document.getElementsByClassName("parrafo");
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "red";
    }

const elementos = document.querySelectorAll(".contenedor li");
    elementos.forEach(element => {
        element.textContent += " texto Agregado" 
    });

