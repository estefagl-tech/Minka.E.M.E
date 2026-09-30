document.addEventListener("DOMContentLoaded", () => {
  const cambiarBtn = document.getElementById("cambiarBtn");
  const cerrarBtn = document.getElementById("cerrarBtn");
  const volverBtn = document.getElementById("volverBtn");

  cambiarBtn.addEventListener("click", () => {
    Swal.fire({
      icon: "info",
      title: "Función en construcción",
      text: "La opción para cambiar contraseña estará disponible pronto 🔒"
    });
  });

  cerrarBtn.addEventListener("click", () => {
    Swal.fire({
      icon: "success",
      title: "Sesión cerrada",
      text: "Has cerrado sesión correctamente 🚪"
    }).then(() => {
      window.location.href = "../HTML/login.html";
    });
  });

  volverBtn.addEventListener("click", () => {
    Swal.fire({
      icon: "question",
      title: "¿Volver?",
      text: "Regresarás al inicio 🏠",
      showCancelButton: true,
      confirmButtonText: "Sí, volver",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = volverBtn.dataset.link; // usa el link del atributo
      }
    });
  });
});
