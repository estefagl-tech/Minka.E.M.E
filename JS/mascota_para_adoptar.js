document.addEventListener("DOMContentLoaded", () => {
    const enviarBtn = document.querySelector(".button.is-success");

    enviarBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const nombreMascota = document.getElementById("nombreMascota").value.trim();
        const edadMascota = document.getElementById("edadMascota").value.trim();
        const especie = document.getElementById("especie").value.trim();

        if (!nombreMascota || !edadMascota || !especie) {
            alert("Por favor completa al menos nombre, edad y especie de la mascota.");
            return;
        }

        alert("Información de la mascota enviada correctamente 🐾");
    });
});
