document.addEventListener("DOMContentLoaded", () => {
  const continuarBtn = document.getElementById("continuarBtn");
  const homeBtn = document.getElementById("homeBtn");

  continuarBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();

    if (!nombre || !correo || !contraseña) {
      Swal.fire({
        icon: "error",
        title: "Campos obligatorios",
        text: "Debes completar al menos Nombre, Correo y Contraseña."
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Registro exitoso",
      text: `Bienvenido/a ${nombre} 🎉`
    }).then(() => {
      localStorage.setItem("usuarioNombre", nombre);
      localStorage.setItem("usuarioCorreo", correo);

      window.location.href = "../home/home.html";
    });
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
