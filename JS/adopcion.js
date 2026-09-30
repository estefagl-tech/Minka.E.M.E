document.addEventListener("DOMContentLoaded", () => {
  const enviarBtn = document.querySelector(".button.is-success");

  enviarBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const documento = document.getElementById("documento").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const acepto = document.querySelector("input[name='acepto']").checked;

    if (!nombre || !documento || !telefono || !correo) {
      Swal.fire({
        icon: "error",
        title: "Campos obligatorios",
        text: "Por favor completa todos los campos requeridos."
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      Swal.fire({
        icon: "warning",
        title: "Correo inválido",
        text: "Ingresa un correo electrónico válido."
      });
      return;
    }

    if (isNaN(telefono)) {
      Swal.fire({
        icon: "warning",
        title: "Teléfono inválido",
        text: "Ingresa un número de teléfono válido."
      });
      return;
    }

    if (!acepto) {
      Swal.fire({
        icon: "info",
        title: "Confirmación requerida",
        text: "Debes aceptar el uso de la información para continuar."
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Solicitud enviada",
      text: "Tu solicitud de adopción fue enviada correctamente ✅"
    }).then(() => {
      window.location.href = "../home/home.html";
    });
  });
});
