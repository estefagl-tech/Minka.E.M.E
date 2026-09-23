document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita envío automático

    // Validaciones básicas
    const nombre = form.querySelector("input[name='nombre_completo']").value.trim();
    const correo = form.querySelector("input[name='correo']").value.trim();
    const telefono = form.querySelector("input[name='telefono']").value.trim();
    const acepto = form.querySelector("input[name='acepto']").checked;

    if (!nombre || !correo || !telefono) {
      alert("Por favor completa Nombre, Correo y Teléfono.");
      return;
    }

    if (!acepto) {
      alert("Debes aceptar el uso de la información para continuar.");
      return;
    }

    // Simulación de envío
    alert("¡Gracias por tu apoyo! El formulario se ha enviado correctamente.");
    form.reset();
  });
});
