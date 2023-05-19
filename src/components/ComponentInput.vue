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
    <span class="title">{{ propTitle }}</span>
    <input
      v-model="inputValue"
      @input="handleInput"
      :id="propName"
      :name="propName"
      :placeholder="propPlaceholder"
      :pattern="propPattern"
      type="number"
    />
    <span class="error-message">{{ propError ? propError : 'error message' }}</span>
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
span.title {
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--smokey-grey);
  margin-bottom: 0.25em;
  font-size: 1.2em;
}
span.error-message {
  visibility: hidden;
  font-style: italic;
  font-size: 0.8em;
}
label.error span.error-message {
  visibility: visible;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  appearance: textfield;
}
input {
  border: 1px solid var(--light-grey);
  outline: none;
  border-radius: 0.5em;
  padding: 0.5em 0.75em;
  font-size: 2em;
  font-weight: 800;
  font-family: inherit;
}
input:hover,
input:active,
input:focus,
input:focus-within,
input:focus-visible {
  border-color: var(--purple);
}

@media only screen and (max-width: 700px) {
  span.title {
    font-size: 1em;
  }
  span.error-message {
    font-size: 0.75em;
  }
  input {
    font-size: 1.25em;
  }
}
</style>
