document.addEventListener("DOMContentLoaded", () => {
  const enviarBtn = document.querySelector(".button.is-success");

  enviarBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const nombreMascota = document.getElementById("nombreMascota").value.trim();
    const edadMascota = document.getElementById("edadMascota").value.trim();
    const especie = document.getElementById("especie").value.trim();
    const sexo = document.getElementById("sexo").value;
    const descripcion = document.getElementById("descripcion").value.trim();
    const informacion = document.getElementById("informacion").value.trim();
    const fotoMascota = document.getElementById("fotoMascota");
    const acepto = document.getElementById("acepto").checked;

    if (!nombreMascota || !edadMascota || !especie || !descripcion) {
      Swal.fire({
        icon: "error",
        title: "Campos obligatorios",
        text: "Completa todos los campos requeridos.",
      });
      return;
    }

    if (fotoMascota.files.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Foto requerida",
        text: "Debes subir una foto.",
      });
      return;
    }

    if (!informacion) {
      Swal.fire({
        icon: "warning",
        title: "Información adicional",
        text: "Agrega información de la mascota.",
      });
      return;
    }

    if (!acepto) {
      Swal.fire({
        icon: "warning",
        title: "Confirmación requerida",
        text: "Debes aceptar el uso de la información.",
      });
      return;
    }

    const formData = new FormData();

    formData.append("nombreMascota", nombreMascota);
    formData.append("edadMascota", edadMascota);
    formData.append("especie", especie);
    formData.append("sexo", sexo);
    formData.append("descripcion", descripcion);
    formData.append("informacion", informacion);
    formData.append("fotoMascota", fotoMascota.files[0]);

    fetch("../PHP/mascotas.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data.includes("OK")) {
          Swal.fire({
            icon: "success",
            title: "¡Mascota registrada!",
            text: "La mascota fue guardada correctamente.",
          }).then(() => {
            document.querySelector("form").reset();

            window.location.href = "../home/home.php";
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: data,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error de conexión",
          text: error,
        });
      });
  });
});

const volverBtn = document.getElementById("homeBtn");

if (volverBtn) {
  volverBtn.addEventListener("click", () => {
    Swal.fire({
      icon: "question",
      title: "¿Volver al Home?",
      text: "Regresarás a la página principal",
      showCancelButton: true,
      confirmButtonText: "Sí, volver",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "../home/home.php";
      }
    });
  });
}
