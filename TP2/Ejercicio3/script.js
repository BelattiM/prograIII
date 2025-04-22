let parrafos = document.querySelectorAll(".parrafo");
let Resaltar = document.getElementById("Resaltar");
let Ocultar = document.getElementById("Ocultar");

Resaltar.addEventListener("click", () => {
    parrafos.forEach(p => p.classList.add("resaltado"));
});

Ocultar.addEventListener("click", () => {
    parrafos.forEach(p => p.classList.toggle("oculto"));
});
