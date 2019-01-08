new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Em dia", "Atrasado"],
      datasets: [
        {
          label: "Situação de Pagamento",
          backgroundColor: ["#15ca20", "#fd3550"],
          data: [90,10]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Situação de Pagamento'
      }
    }
});