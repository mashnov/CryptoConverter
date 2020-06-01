<template>
  <div class="select">
    <label>
      <span>
        {{ label }}
      </span>
      <select
        :value="value"
        @change="changeEvent"
      >
        <option
          value=""
          disabled
        >
          Не выбрано
        </option>
        <option
          v-for="(item, index) in options"
          :key="index"
          :value="item.title"
          :disabled="item.disabled"
        >
          {{ item.title }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'Select',
    props: {
      label: {
        type: String,
        default: '',
      },
      value: {
        type: String,
        default: '',
      },
      options: {
        type: Array,
        default: () => ([]),
      },
    },
    methods: {
      changeEvent(event) {
        this.$emit('input', event.target.value);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import 'src/assets/styles/color.scss';

  .select span {
    font-size: 11px;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: $select-label-color;
  }
  .select select {
    display: block;
    width: 100%;
    height: 25px;
    line-height: 25px;
    border-radius: 3px;
    border: 1px solid $select-border-color;
    background-color: $select-background;
    font-size: 13px;
  }
</style>
