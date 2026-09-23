const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");
    const category = filter.getAttribute("data-category");
    cards.forEach(card => {
      if (category === "all" || card.getAttribute("data-category") === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const explorarBtn = document.querySelector(".primary");
if (explorarBtn) {
  explorarBtn.addEventListener("click", () => {
    document.querySelector(".explorar").scrollIntoView({ behavior: "smooth" });
  });
}

const supportButtons = document.querySelectorAll(".support");
const formulario = document.getElementById("formulario")


