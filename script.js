
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-inscricao");
  const alerta = document.getElementById("mensagem-alerta");

  fetch("https://sheetdb.io/api/v1/rdgtdft04i0ej/search?sheet=dados&tipo=Público%20geral")
    .then(res => res.json())
    .then(data => {
      if (data.length >= 60) {
        alerta.innerHTML = '<div class="alerta">⚠️ As vagas para "Público geral" foram preenchidas. Você entrará na lista de espera.</div>';
      }
    });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    fetch("https://sheetdb.io/api/v1/rdgtdft04i0ej?sheet=dados", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonData)
    })
    .then(res => res.json())
    .then(() => {
      window.location.href = "agradecimento.html";
    })
    .catch(err => {
      alert("Ocorreu um erro ao enviar. Tente novamente.");
      console.error(err);
    });
  });
});
