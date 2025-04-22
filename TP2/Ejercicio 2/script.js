const input = document.querySelector("#inputText");
const boton = document.querySelector("#btn");
const lista = document.querySelector("#list");

boton.addEventListener("click", () => {
    const texto = input.value;

    if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto

        const borrar = document.createElement("button");
        borrar.textContent = "Borrar";
        borrar.classList.add("borrar")
        borrar.style.marginLeft = "10px";

        borrar.addEventListener("click", () => {
            lista.removeChild(li);
        });

        li.appendChild(borrar);
        lista.appendChild(li);

        input.value = ""; // Limpiar el campo de texto
        input.focus(); // Volver a enfocar el campo de texto
    }
}
);

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        boton.click(); // Simular el clic en el botón
    }
}
);