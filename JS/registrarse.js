document.addEventListener("DOMContentLoaded", () => {
  const continuarBtn = document.getElementById("continuarBtn");
  const homeBtn = document.getElementById("homeBtn");

  continuarBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const tipo_documento = document.getElementById("tipoDocumento").value;
    const numero_documento = document.getElementById("numeroDocumento").value.trim();
    const departamento = document.getElementById("departamento").value.trim();
    const municipio = document.getElementById("municipio").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();
    const user = correo; // Usamos el correo como identificador de usuario único

    if (!nombre || !apellidos || !correo || !contraseña || !tipo_documento || !numero_documento) {
      Swal.fire({
        icon: "error",
        title: "Campos obligatorios",
        text: "Debes completar todos los campos requeridos."
      });
      return;
    }

    const formData = new FormData();
    formData.append("registrar", "1");
    formData.append("nombre", nombre);
    formData.append("apellidos", apellidos);
    formData.append("tipo_documento", tipo_documento);
    formData.append("numero_documento", numero_documento);
    formData.append("departamento", departamento);
    formData.append("municipio", municipio);
    formData.append("telefono", telefono);
    formData.append("correo", correo);
    formData.append("password", contraseña);
    formData.append("user", user);

    fetch("../PHP/usuario.php", {
      method: "POST",
      body: formData,
    })
    .then(response => response.text())
    .then(data => {
      if (data.trim() === "OK") {
        Swal.fire({
          icon: "success",
          title: "Registro exitoso",
          text: `Bienvenido/a ${nombre} 🎉`
        }).then(() => {
          window.location.href = "../HTML/login.html";
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data
        });
      }
    });
  });

  if (homeBtn) {
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
  }
});