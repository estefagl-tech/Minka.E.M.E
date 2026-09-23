document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".container");
    const enviarBtn = form.querySelector(".button.is-success");

    enviarBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const documento = document.getElementById("documento")?.value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const correo = document.getElementById("correo").value.trim();

        if (!nombre || !documento || !telefono || !correo) {
            alert("Por favor completa todos los campos obligatorios.");
            return;
        }

        alert("Solicitud de adopción enviada correctamente ✅");
    });
});
