    const botonesAbrir = document.querySelectorAll('.abrir-modal');
    botonesAbrir.forEach(boton => {
        boton.onclick = () => {
        const id = boton.dataset.modal;
        document.getElementById(id).style.display = 'flex';
        };
    });
    const botonesCerrar = document.querySelectorAll('.cerrar');
    botonesCerrar.forEach(boton => {
        boton.onclick = () => {
        boton.closest('.modal').style.display = 'none';
        };
    });
    window.onclick = (e) => {
        if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        }
    };