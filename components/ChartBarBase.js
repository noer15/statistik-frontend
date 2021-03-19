import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['data', 'options'],
  data() {
    return {
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Data Chart',
          fontSize: 24,
          fontColor: '#6b7280',
        },
        tooltips: {
          backgroundColor: '#17BF62',
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    }
  },
  mounted() {
    this.renderChart(this.data, this.options)
  },
}
