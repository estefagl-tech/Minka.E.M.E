document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");
  const container = document.getElementById("detalle-container");

  const mascotas = {
    "Rocco": {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGKNMazz9Sl7fkIMDhFkq0iMN4-rPEWIQQDMUs0IEUVA&s=10",
      edad: "2 años",
      especie: "Perro",
      sexo: "Macho",
      descripcion: "Mestizo mediano, juguetón y cariñoso."
    },
    "Luna": {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX6gGj58B2H-W8RHTz_Qa1y-UOMAwhQD5AgymASyIdHQ&s=10",
      edad: "1 año",
      especie: "Gato",
      sexo: "Hembra",
      descripcion: "Independiente pero protectora."
    },
    "Cachorros": {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjHMdVmpjX0w4Fqoa8EnH5HkmgqgNo9jEoJ3sY5CFSA&s=10",
      edad: "3 meses",
      especie: "Perros",
      sexo: "Mixto",
      descripcion: "Labradores mestizos, hermanos rescatados de la calle."
    },
    "Bandido": {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYd863g4DUo9yZZ0RUiN1n-aJa63BK0QbAhkVOXiRQEA&s=10",
      edad: "4 años",
      especie: "Perro",
      sexo: "Macho",
      descripcion: "Salchicha mestizo, tranquilo y fiel compañero."
    }
  };

  if (mascotas[nombre]) {
    const m = mascotas[nombre];
    container.innerHTML = `
      <section class="detalle-mascota">
        <div class="card">
          <img src="${m.img}" alt="${nombre}">
          <h2>${nombre}</h2>
          <p><strong>Edad:</strong> ${m.edad}</p>
          <p><strong>Especie:</strong> ${m.especie}</p>
          <p><strong>Sexo:</strong> ${m.sexo}</p>
          <p><strong>Descripción:</strong> ${m.descripcion}</p>
          <div class="acciones">
            <a href="../HTML/Adopcion.html?nombre=${nombre}" class="support">Quiero adoptar</a>
            <a href="../home/home.html#adopcion" class="secondary">Volver</a>
          </div>
        </div>
      </section>
    `;
  } else {
    container.innerHTML = "<p>Mascota no encontrada.</p>";
  }
});
