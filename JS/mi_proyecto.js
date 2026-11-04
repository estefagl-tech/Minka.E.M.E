document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("proyectoForm");

  form.addEventListener("submit", (event) => {

    event.preventDefault();

    const titulo = document.getElementById("titulo").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const objetivo = document.getElementById("objetivo").value.trim();
    const tipo = document.getElementById("tipo").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const fecha = document.getElementById("fecha").value;
    const url = document.getElementById("url").value.trim();
    const acepto = document.querySelector("input[name='acepto']").checked;

    if (!titulo || !descripcion || !objetivo || !tipo) {

      Swal.fire({
        icon: "error",
        title: "Campos obligatorios",
        text: "Completa todos los campos requeridos"
      });

      return;
    }

    if (!acepto) {

      Swal.fire({
        icon: "warning",
        title: "Confirmacion requerida",
        text: "Debes aceptar para continuar"
      });

      return;
    }

    const formData = new FormData();

    formData.append("titulo", titulo);
    formData.append("descripcion", descripcion);
    formData.append("objetivo", objetivo);
    formData.append("tipo", tipo);
    formData.append("direccion", direccion);
    formData.append("fecha", fecha);
    formData.append("url", url);

    fetch("../PHP/causas.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {

      if (data.trim() === "OK") {

        Swal.fire({
          icon: "success",
          title: "Causa enviada",
          text: "La causa fue registrada correctamente"
        }).then(() => {

          form.reset();

          window.location.href = "../home/home.html";

        });

      } else {

        Swal.fire({
          icon: "error",
          title: "Error",
          text: data
        });

      }

    })
    .catch(() => {

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo conectar con el servidor"
      });

    });

  });

});