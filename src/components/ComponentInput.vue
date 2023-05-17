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
    propMin: {
      type: String,
      required: true
    },
    propMax: {
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
  <label :for="propName">
    <span>{{ propTitle }}</span>
    <input
      v-model="inputValue"
      @input="handleInput"
      :id="propName"
      :name="propName"
      :placeholder="propPlaceholder"
      :pattern="propPattern"
      :min="propMin"
      :max="propMax"
      type="number"
      required
    />
    <span v-if="propError">{{ propError }}</span>
  </label>
</template>
