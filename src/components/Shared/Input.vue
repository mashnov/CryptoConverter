<template>
  <div class="input">
    <label>
      <span>
        {{ label }}
      </span>
      <input
        ref="input"
        :placeholder="placeholder"
        :type="type"
        :step="step"
        :value="value"
        :min="min"
        @input="inputEvent"
        @focus="focusEvent"
        @blur="blurEvent"
        @keyup.enter="enterEvent"
        @keyup.esc="escEvent"
      />
    </label>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    props: {
      label: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'text',
      },
      placeholder: {
        type: String,
        default: '',
      },
      value: {
        type: String,
        default: '',
      },
      min: {
        type: String,
        default: '',
      },
      step: {
        type: String,
        default: '',
      },
    },
    methods: {
      inputEvent(event) {
        this.$emit('input', event.target.value);
      },
      focusEvent() {
        this.$emit('focus');
      },
      blurEvent() {
        this.$emit('blur');
      },
      enterEvent() {
        this.$emit('enter');
      },
      escEvent() {
        this.blurEvent();
        this.$refs.input.blur();
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import 'src/assets/styles/color.scss';

  .input span {
    font-size: 11px;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: $select-label-color;
  }
  .input input {
    display: block;
    width: 100%;
    padding: 5px 10px;
    height: 25px;
    line-height: 25px;
    border: 1px solid $select-border-color;
    background-color: $select-background;
    font-size: 15px;
    margin: 0;
  }
  .input input::placeholder {
    color: #000;
  }
</style>
