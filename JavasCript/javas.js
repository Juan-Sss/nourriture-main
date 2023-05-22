const nav = document.querySelector("#hijo2");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const carru = document.getElementById("contenedor-carrusel");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    carru.classList.add("cancel");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    carru.classList.remove("cancel");
})