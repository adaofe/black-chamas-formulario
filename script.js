
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://sheetdb.io/api/v1/rdgtdft04i0ej/search?sheet=dados&tipo=Público%20geral")
    .then(res => res.json())
    .then(data => {
      if (data.length >= 60) {
        document.getElementById("mensagem-alerta").innerHTML =
          '<div class="alerta">⚠️ As vagas para "Público geral" foram preenchidas. Você entrará na lista de espera.</div>';
      }
    });
});
