const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorEdad").textContent = "";    

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edad = document.getElementById("edad").value.trim();

    let HayErrores = false;

    if (nombre === ""){
        document.getElementById("errorNombre").textContent = "El nombre es obligatorio."
        HayErrores = true;
    }
    
    const emailValido = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (email === ""){
        document.getElementById("errorEmail").textContent = "El email es obligatorio."
        HayErrores = true;
    }
    else if (!emailValido.test(email)) {
        document.getElementById("errorEmail").textContent = "El email no es valido."
        HayErrores = true;
    }

    if (edad === ""){
        document.getElementById("errorEdad").textContent = "La edad es obligatoria."
        HayErrores = true;
    }
    else if (isNaN(edad)){
        document.getElementById("errorEdad").textContent = "La edad tiene que ser un numero."
        HayErrores = true;
    }
    else if (edad < 18){
        document.getElementById("errorEdad").textContent = "Tenes que ser mayor de 18 años."
        HayErrores = true;
    }

    if (!HayErrores){
        console.log("Formulario enviado correctamente")
        alert("Formulario valido. Very gud 👍🏻")
    }
}
)
