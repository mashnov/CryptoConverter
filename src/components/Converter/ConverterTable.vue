<template>
  <div class="converter-table">
    <table>
      <thead>
        <tr>
          <th>
            Месяц
          </th>
          <th
            v-for="(label, index) in chartData.datasets"
            :key="index"
          >
            {{ label.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(label, labelIndex) in chartData.labels"
          :key="labelIndex"
        >
          <td>
            {{ label }}
          </td>
          <td
            v-for="(set, index) in chartData.datasets"
            :key="index"
          >
            {{ set.data[labelIndex] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'ConverterTable',
    props: {
      currencyFrom: {
        type: Object,
        default: () => ({}),
      },
      currencyTo: {
        type: Object,
        default: () => ({}),
      },
      chartData: {
        type: Object,
        default: () => ({}),
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import 'src/assets/styles/color.scss';

  .converter-table {
    display: block;
    width: 100%;
    margin: 20px 0;
    overflow: auto;
  }
  .converter-table table {
    width: 100%;
    border-collapse: collapse;
  }
  .converter-table table thead {
    background-color: $select-border-color;
    text-align: left;
    font-weight: bold;
  }
  .converter-table table th,
  .converter-table table td {
    font-weight: normal;
    font-size: 13px;
    line-height: 25px;
    padding: 5px 10px;
    border-right: 1px solid $select-border-color;
  }
  .converter-table table td:first-child {
    background-color: $select-border-color;
    font-weight: bold;
  }
  .converter-table table tr {
    border-bottom: 1px solid $select-border-color;
  }
</style>
