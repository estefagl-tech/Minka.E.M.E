document.addEventListener("DOMContentLoaded", () => {
    const continuarBtn = document.querySelector(".boton-registro");

    continuarBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const nombre = document.querySelector("input[placeholder='Nombre']").value.trim();
        const apellidos = document.querySelector("input[placeholder='Apellidos']").value.trim();
        const correo = document.querySelector("input[type='email']").value.trim();
        const contraseña = document.querySelector("input[type='password']").value.trim();

        if (!nombre || !apellidos || !correo || !contraseña) {
            alert("Por favor completa todos los campos obligatorios.");
            return;
        }

        alert("Registro completado exitosamente ✅");
    });
});
