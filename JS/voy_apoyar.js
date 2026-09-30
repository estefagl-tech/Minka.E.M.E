document.addEventListener("DOMContentLoaded", () => {
  const enviarBtn = document.getElementById("enviarBtn");
  const homeBtn = document.getElementById("homeBtn");

  enviarBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const documento = document.getElementById("documento").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const apoyo = document.getElementById("apoyo").value.trim();
    const monto = document.getElementById("monto").value.trim();
    const fecha = document.getElementById("fecha").value;
    const metodo = document.getElementById("metodo").value.trim();
    const preferencia = document.getElementById("preferencia").value;
    const acepto = document.getElementById("acepto").checked;

    if (!nombre || !documento || !telefono || !correo || !apoyo || !monto || !fecha || !metodo || !preferencia) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Debes completar todos los campos obligatorios (Dirección es opcional)."
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      Swal.fire({
        icon: "error",
        title: "Correo inválido",
        text: "Ingresa un correo electrónico válido."
      });
      return;
    }

    if (isNaN(telefono)) {
      Swal.fire({
        icon: "error",
        title: "Teléfono inválido",
        text: "Ingresa un número de teléfono válido."
      });
      return;
    }

    if (!acepto) {
      Swal.fire({
        icon: "error",
        title: "Confirmación requerida",
        text: "Debes aceptar el uso de la información para continuar."
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "¡Gracias por tu apoyo!",
      text: `Tu apoyo será coordinado vía ${preferencia}.`
    });

    document.querySelector(".container").reset?.();
  });

  homeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Regresar al Home?",
      text: "Perderás los datos ingresados si vuelves al inicio.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, regresar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "../home/home.html";
      }
    });
  });
});
