document.getElementById("deshabilitar").addEventListener("click", () => {
  const campoTexto = document.getElementById("campoTexto");
  campoTexto.disabled = true;
});

document.getElementById("habilitar").addEventListener("click", () => {
  const campoTexto = document.getElementById("campoTexto");
  campoTexto.disabled = false;
});
