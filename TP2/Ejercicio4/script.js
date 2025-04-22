document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const inputTarea = document.getElementById("tarea");
    const lista = document.getElementById("listatareas");

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault(); // Detener el envío

        const texto = inputTarea.value.trim();
        if (texto !== "") {
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = texto;
        lista.appendChild(nuevoItem);
        inputTarea.value = "";
        }
    });

    lista.addEventListener("click", function(evento) {
        if (evento.target.tagName === "LI") {
            evento.target.classList.toggle("completado");
        }
    });
});


