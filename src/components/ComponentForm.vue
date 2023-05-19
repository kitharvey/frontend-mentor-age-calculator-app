<script lang="ts">
import ComponentButton from './ComponentButton.vue'
import ComponentInput from './ComponentInput.vue'

export default {
  props: {
    errorYear: String,
    errorMonth: String,
    errorDay: String
  },
  data() {
    return {
      birthDate: {
        year: null,
        month: null,
        day: null
      }
    }
  },
  methods: {
    submitFormHandler() {
      this.$emit('submit-form-handler', this.birthDate)
    },
    handleInputChange(value) {
      this.birthDate[`${value.propName}`] = value.inputValue
    }
  },
  components: { ComponentInput, ComponentButton }
}
</script>
<template>
  <form @submit.prevent="submitFormHandler" id="age">
    <ComponentInput
      prop-title="Day"
      prop-name="day"
      prop-placeholder="DD"
      prop-pattern="\d{1,2}"
      :prop-error="errorDay"
      @input-change="handleInputChange"
    />
    <ComponentInput
      prop-title="Month"
      prop-name="month"
      prop-placeholder="MM"
      prop-pattern="\d{1,2}"
      :prop-error="errorMonth"
      @input-change="handleInputChange"
    />
    <ComponentInput
      prop-title="Year"
      prop-name="year"
      prop-placeholder="YYYY"
      prop-pattern="\d{4,4}"
      :prop-error="errorYear"
      @input-change="handleInputChange"
    />
    <ComponentButton />
  </form>
</template>

<style scoped>
form {
  position: relative;
  padding-bottom: 3em;
  border-bottom: 1px solid var(--light-grey);
  display: grid;
  grid-template-columns: 16ch 16ch 16ch;
  gap: 1em;
}

@media only screen and (max-width: 700px) {
  form {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding-bottom: 4em;
    gap: 0.5em;
  }
}
@media only screen and (max-width: 420px) {
  form {
    grid-template-columns: minmax(120px, 1fr);
  }
}
</style>
