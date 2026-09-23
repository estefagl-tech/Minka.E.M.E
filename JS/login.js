document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector(".boton-registro");

    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const usuario = document.querySelector("input[type='text']").value.trim();
        const password = document.querySelector("input[type='password']").value.trim();

        if (!usuario || !password) {
            alert("Debes ingresar usuario y contraseña.");
            return;
        }

        alert(`Bienvenido, ${usuario} 🎉`);
    });
});
