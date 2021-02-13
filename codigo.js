document.ready(inicio);
let cancelarRegistro = () => {
    $("#formEntrenamiento").css("display", "none");
}

let agregarRegistro = () => {
    $("#formEntrenamiento").css("display", "grid");
}

function inicio() {

    $("agregar").click(agregarRegistro);
    $("cancelar").click(cancelarRegistro);
}