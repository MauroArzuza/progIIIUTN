document.getElementById("cambiarColor").addEventListener("click", () => {
  const parrafos = document.querySelectorAll("p");
  parrafos.forEach((p) => (p.style.color = "blue"));
});
