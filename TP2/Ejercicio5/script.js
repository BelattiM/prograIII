const btnEnviar = document.getElementById("enviar");

function revisarFormulario(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const edad = document.getElementById("edad").value;

    const errorNombre = document.getElementById("errorNombre");
    const errorEmail = document.getElementById("errorEmail");
    const errorEdad = document.getElementById("errorEdad");

    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorEdad.textContent = "";    

    let HayErrores = false;

    if (nombre === ""){
        errorNombre.textContent = "El nombre es obligatorio."
        HayErrores = true;
    }
    
    const emailValido = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === ""){
        errorEmail.textContent = "El email es obligatorio."
        HayErrores = true;
    }
    else if (!emailValido.test(email)) {
        errorEmail.textContent = "El email no es valido."
        HayErrores = true;
    }

    if (edad === ""){
        errorEdad.textContent = "La edad es obligatoria."
        HayErrores = true;
    }
    else if (isNaN(edad)){
        errorEdad.textContent = "La edad tiene que ser un numero."
        HayErrores = true;
    }
    else if (edad < 18){
        errorEdad.textContent = "Tenes que ser mayor de 18 años."
        HayErrores = true;
    }

    if (!HayErrores){
        console.log("Formulario enviado correctamente")
        alert("Formulario valido. Very gud 👍🏻")
    }
}

btnEnviar.addEventListener("click", revisarFormulario)