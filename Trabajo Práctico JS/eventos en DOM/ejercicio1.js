const elementos = document.querySelectorAll("#miLista li");
elementos.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    console.log(elemento.textContent);
  });
});
