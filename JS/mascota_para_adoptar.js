document.addEventListener("DOMContentLoaded", () => {
    const enviarBtn = document.querySelector(".button.is-success");

    enviarBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const nombreMascota = document.getElementById("nombreMascota").value.trim();
        const edadMascota = document.getElementById("edadMascota").value.trim();
        const especie = document.getElementById("especie").value.trim();
        const descripcion = document.getElementById("descripcion").value.trim();
        const fotoMascota = document.getElementById("fotoMascota").files.length;
        const informacion = document.getElementById("informacion").value.trim();
        const acepto = document.getElementById("acepto").checked;

        if (!nombreMascota || !edadMascota || !especie || !descripcion) {
            Swal.fire({
                icon: "error",
                title: "Campos obligatorios",
                text: "Por favor completa nombre, edad, especie y descripción de la mascota."
            });
            return;
        }

        if (!fotoMascota) {
            Swal.fire({
                icon: "warning",
                title: "Foto requerida",
                text: "Debes subir al menos una foto de la mascota."
            });
            return;
        }

        if (!informacion) {
            Swal.fire({
                icon: "info",
                title: "Información adicional",
                text: "Por favor agrega detalles adicionales de la mascota (vacunas, esterilización, etc.)."
            });
            return;
        }

        if (!acepto) {
            Swal.fire({
                icon: "warning",
                title: "Confirmación requerida",
                text: "Debes aceptar el uso de la información para coordinar la adopción."
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "¡Mascota registrada!",
            text: `La información de ${nombreMascota} fue enviada correctamente 🐾`
        }).then(() => {
            window.location.href = "../home/home.html";
        });
    });
});

const volverBtn = document.getElementById("volverBtn");

volverBtn.addEventListener("click", () => {
  Swal.fire({
    icon: "question",
    title: "¿Volver al Home?",
    text: "Regresarás a la página principal 🏠",
    showCancelButton: true,
    confirmButtonText: "Sí, volver",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../home/home.html";
    }
  });
});
