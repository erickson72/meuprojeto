// Placeholder para submissão dos hiperparâmetros
document
  .getElementById("parametros-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const taxaAprendizado = document.getElementById("taxa-aprendizado").value;
    const epocas = document.getElementById("epocas").value;
    const batchSize = document.getElementById("batch-size").value;
    alert(
      `Configurações salvas:\nTaxa de Aprendizado: ${taxaAprendizado}\nÉpocas: ${epocas}\nBatch Size: ${batchSize}`
    );
  });

// Função para gerar gráfico de Acurácia
function gerarGraficoAcuracia() {
  const ctxAcuracia = document
    .getElementById("grafico-acuracia")
    .getContext("2d");
  const graficoAcuracia = new Chart(ctxAcuracia, {
    type: "line", // Tipo de gráfico
    data: {
      labels: ["Época 1", "Época 2", "Época 3", "Época 4", "Época 5"], // Rótulos para os dados
      datasets: [
        {
          label: "Acurácia",
          data: [0.76, 0.85, 0.88, 0.92, 0.95], // Dados da Acurácia por época
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Acurácia",
          },
        },
        x: {
          title: {
            display: true,
            text: "Épocas",
          },
        },
      },
    },
  });
}
// Função para gerar gráfico de Perda
function gerarGraficoPerda() {
  const ctxPerda = document.getElementById("grafico-perda").getContext("2d");
  const graficoPerda = new Chart(ctxPerda, {
    type: "line", // Tipo de gráfico
    data: {
      labels: ["Época 1", "Época 2", "Época 3", "Época 4", "Época 5"], // Rótulos para os dados
      datasets: [
        {
          label: "Perda",
          data: [0.68, 0.52, 0.43, 0.35, 0.28], // Dados da Perda por época
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Perda",
          },
        },
        x: {
          title: {
            display: true,
            text: "Épocas",
          },
        },
      },
    },
  });
}

// Chama as funções para desenhar os gráficos na página
gerarGraficoAcuracia();
gerarGraficoPerda();

// Placeholder para gerar relatório
document
  .getElementById("gerar-relatorio")
  .addEventListener("click", function () {
    alert("Relatório gerado com sucesso!");
  });
