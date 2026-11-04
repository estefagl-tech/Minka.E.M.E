document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const causaSeleccionada = params.get("causa");

  const enviarBtn = document.getElementById("enviarBtn");
  const homeBtn = document.getElementById("homeBtn");

  enviarBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const documento = document.getElementById("documento").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const apoyo = document.getElementById("apoyo").value;
    const monto = document.getElementById("monto").value.trim();
    const fecha = document.getElementById("fecha").value;
    const metodo = document.getElementById("metodo").value.trim();
    const preferencia = document.getElementById("preferencia").value;
    const acepto = document.getElementById("acepto").checked;

    if (
      !nombre ||
      !documento ||
      !telefono ||
      !correo ||
      !apoyo ||
      !monto ||
      !fecha ||
      !metodo ||
      !preferencia
    ) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Completa todos los campos obligatorios",
      });

      return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      Swal.fire({
        icon: "error",
        title: "Correo invalido",
        text: "Ingresa un correo valido",
      });

      return;
    }

    if (isNaN(telefono)) {
      Swal.fire({
        icon: "error",
        title: "Telefono invalido",
        text: "Ingresa un numero valido",
      });

      return;
    }

    if (!acepto) {
      Swal.fire({
        icon: "error",
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
    formData.append("apoyo", apoyo);
    formData.append("monto", monto);
    formData.append("fecha", fecha);
    formData.append("metodo", metodo);
    formData.append("preferencia", preferencia);
    formData.append("causa", causaSeleccionada);

    fetch("../PHP/Apoyos.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data.trim() === "OK") {
          Swal.fire({
            icon: "success",
            title: "Gracias por tu apoyo",
            text: `Tu apoyo para "${causaSeleccionada}" fue registrado correctamente`
          }).then(() => {
            document.getElementById("apoyoForm").reset();

            window.location.href = "../home/home.html";
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

  homeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Volver al home",
      text: "Perderas los datos ingresados",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "../home/home.html";
      }
    });
  });
});
