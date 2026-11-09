document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!usuario || !password) {
      Swal.fire({
        icon: "error",
        title: "Campos vacíos",
        text: "Debes ingresar usuario y contraseña.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("login", "1");
    formData.append("user", usuario);
    formData.append("password", password);

    fetch("../PHP/usuario.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data.trim() === "OK") {
          Swal.fire({
            icon: "success",
            title: "Bienvenido",
            text: `Hola ${usuario} 🎉`,
          }).then(() => {
            window.location.href = "../home/home.php";
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Acceso denegado",
            text: data,
          });
        }
      });
  });
});
