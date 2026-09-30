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
        text: "Debes ingresar usuario y contraseña."
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Bienvenido",
      text: `Hola ${usuario} 🎉`
    }).then(() => {
      localStorage.setItem("usuarioNombre", usuario);
      window.location.href = "../home/home.html";
    });
  });
});
