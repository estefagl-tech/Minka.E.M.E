document.addEventListener("DOMContentLoaded", () => {
    const cambiarBtn = document.querySelector(".botones .btn:first-child");
    const cerrarBtn = document.querySelector(".botones .btn:last-child");
    const volverBtn = document.querySelector(".btn.volver");

    cambiarBtn.addEventListener("click", () => {
        alert("Función para cambiar contraseña en construcción 🔒");
    });

    cerrarBtn.addEventListener("click", () => {
        alert("Sesión cerrada correctamente 🚪");
    });

    volverBtn.addEventListener("click", () => {
        alert("Volviendo a la página anterior ↩️");
        window.history.back();
    });
});
