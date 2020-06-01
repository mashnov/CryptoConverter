<script>
  import flatten from 'lodash/flatten';
  import { Line, mixins } from 'vue-chartjs';

  const { reactiveProp } = mixins;

  export default {
    name: 'LineChart',
    extends: Line,
    mixins: [reactiveProp],
    props: {
      chartData: {
        type: Object,
        default: () => ({}),
      },
    },
    computed: {
      chartOptions() {
        const values = flatten(this.chartData.datasets.map(set => (set.data)));
        return {
          responsive: true,
          beginAtZero: true,
          maintainAspectRatio: true,
          suggestedMin: Math.min(...values),
          suggestedMax: Math.max(...values),
        };
      },
    },
    mounted() {
      this.renderCharts();
    },
    methods: {
      renderCharts() {
        const { chartData, chartOptions } = this;

        this.renderChart(
          chartData,
          chartOptions,
        );
      },
    },
  };
</script>
