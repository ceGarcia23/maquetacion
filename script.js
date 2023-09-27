// Función para mostrar el formulario de citas al hacer clic en Iniciar Sesión
document.getElementById("btn-login").addEventListener("click", function(e) {
    e.preventDefault();
    ocultarTodosLosFormularios();
    document.getElementById("citas").style.display = "block";
});
// Función para ocultar todos los formularios
function ocultarTodosLosFormularios() {
    var formularios = document.querySelectorAll("section");
    for (var i = 0; i < formularios.length; i++) {
        formularios[i].style.display = "none";
    }
}
// Asignar eventos a los enlaces
document.getElementById("enlace-login").addEventListener("click", function() {
    ocultarTodosLosFormularios();
    document.getElementById("formulario-login").style.display = "block";
});
document.getElementById("enlace-registro").addEventListener("click", function() {
    ocultarTodosLosFormularios();
    document.getElementById("formulario-registro").style.display = "block";
});
document.getElementById("enlace-inscribirse").addEventListener("click", function() {
    ocultarTodosLosFormularios();
    document.getElementById("formulario-inscripcion").style.display = "block";
});
document.getElementById("enlace-contacto").addEventListener("click", function() {
    ocultarTodosLosFormularios();
    // Aquí puedes mostrar el contenido de la sección de contacto si lo deseas
});
