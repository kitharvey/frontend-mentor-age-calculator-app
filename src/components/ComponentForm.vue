<script lang="ts">
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
  components: { ComponentInput }
}
</script>
<template>
  <form @submit.prevent="submitFormHandler" id="age">
    <fieldset>
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
    </fieldset>
  </form>
</template>

<style scoped>
fieldset {
  border: none;
  display: flex;
}
</style>
