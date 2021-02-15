let cancelarRegistro = () => {
    $("#formEntrenamiento").removeClass("abrirForm");
    $("#formEntrenamiento").addClass("cerrarForm");
}

let agregarRegistro = () => {
    $("#formEntrenamiento").removeClass("cerrarForm");
    $("#formEntrenamiento").addClass("abrirForm");
}

$("#agregar").click(agregarRegistro);
$("#cancelar").click(cancelarRegistro);