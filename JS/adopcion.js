document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const mascotaSeleccionada = params.get("nombre");

  const enviarBtn = document.getElementById("enviarBtn");

  enviarBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const documento = document.getElementById("documento").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const acepto = document.querySelector("input[name='acepto']").checked;

    if (!nombre || !documento || !telefono || !correo) {
      Swal.fire({
        icon: "error",
        title: "Campos obligatorios",
        text: "Completa todos los campos requeridos",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      Swal.fire({
        icon: "warning",
        title: "Correo invalido",
        text: "Ingresa un correo valido",
      });
      return;
    }

    if (isNaN(telefono)) {
      Swal.fire({
        icon: "warning",
        title: "Telefono invalido",
        text: "Ingresa un numero valido",
      });
      return;
    }

    if (!acepto) {
      Swal.fire({
        icon: "info",
        title: "Confirmacion requerida",
        text: "Debes aceptar para continuar",
      });
      return;
    }

    const formData = new FormData();

    formData.append("nombre", nombre);
    formData.append("documento", documento);
    formData.append("telefono", telefono);
    formData.append("correo", correo);
    formData.append("direccion", direccion);
    formData.append("acepto", acepto ? 1 : 0);
    formData.append("mascota", mascotaSeleccionada);

    fetch("../PHP/Adopciones.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data.trim() === "OK") {
          Swal.fire({
            icon: "success",
            title: "Solicitud enviada",
            text: `La solicitud para adoptar a ${mascotaSeleccionada} fue enviada correctamente`,
          }).then(() => {
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
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo conectar con el servidor",
        });
      });
  });
});
