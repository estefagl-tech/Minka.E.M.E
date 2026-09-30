document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("proyectoForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const titulo = form.titulo.value.trim();
    const acepto = form.acepto.checked;

    if (!nombre || !correo || !titulo) {
      Swal.fire({
        icon: "error",
        title: "Campos obligatorios",
        text: "Por favor completa Nombre, Correo y Título de la causa."
      });
      return;
    }

    if (!acepto) {
      Swal.fire({
        icon: "warning",
        title: "Confirmación requerida",
        text: "Debes aceptar la publicación de la información."
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "¡Causa enviada!",
      text: "Tu proyecto ha sido registrado correctamente 🎉"
    }).then(() => {
      form.reset();
    });
  });
});
