<script lang="ts">
export default {
  props: {
    propName: {
      type: String,
      required: true
    },
    propTitle: {
      type: String,
      required: true
    },
    propPlaceholder: {
      type: String,
      required: true
    },
    propPattern: {
      type: String,
      required: true
    },
    propError: {
      type: String
    }
  },
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleInput() {
      this.$emit('input-change', this)
    }
  }
}
</script>
<template>
  <label :for="propName" :class="{ error: propError }">
    <span>{{ propTitle }}</span>
    <input
      v-model="inputValue"
      @input="handleInput"
      :id="propName"
      :name="propName"
      :placeholder="propPlaceholder"
      :pattern="propPattern"
      type="number"
    />
    <span v-if="propError">{{ propError }}</span>
  </label>
</template>

<style scoped>
label {
  display: flex;
  flex-direction: column;
}
label.error input {
  border: 1px solid var(--light-red);
}
label.error span {
  color: var(--light-red);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  appearance: textfield;
}
</style>
