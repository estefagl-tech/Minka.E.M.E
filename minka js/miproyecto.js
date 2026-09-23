document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("proyectoForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const titulo = form.titulo.value.trim();
    const acepto = form.acepto.checked;

    if (!nombre || !correo || !titulo) {
      alert("Por favor completa Nombre, Correo y Título de la causa.");
      return;
    }

    if (!acepto) {
      alert("Debes aceptar la publicación de la información.");
      return;
    }

    alert("¡Tu causa ha sido enviada con éxito!");
    form.reset();
  });
});
