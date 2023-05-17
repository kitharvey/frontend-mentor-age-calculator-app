<script lang="ts">
export default {
  props: {
    propName: String,
    propTitle: String,
    propPlaceholder: String
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
  <label :for="propName">{{ propTitle }}</label>
  <input
    v-model="inputValue"
    @input="handleInput"
    :id="propName"
    :name="propName"
    :placeholder="propPlaceholder"
    type="number"
    required
  />
</template>
