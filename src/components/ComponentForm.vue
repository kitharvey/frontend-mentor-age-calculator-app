<script lang="ts">
import ComponentInput from './ComponentInput.vue'

export default {
  props: {
    errorYear: String,
    errorMonth: String,
    errorDay: String,
    maxDay: {
      type: String,
      required: true
    },
    maxYear: {
      type: String,
      required: true
    }
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
    handleSubmit() {
      this.$emit('submit', this.birthDate)
    },
    handleInputChange(value) {
      this.birthDate[`${value.propName}`] = value.inputValue
    }
  },
  components: { ComponentInput }
}
</script>
<template>
  <form @submit.prevent="handleSubmit" id="age">
    <fieldset>
      <ComponentInput
        prop-title="Day"
        prop-name="day"
        prop-placeholder="DD"
        prop-pattern="\d{1,2}"
        prop-min="1"
        :prop-max="maxDay"
        :prop-error="errorDay"
        @input-change="handleInputChange"
      />
      <ComponentInput
        prop-title="Month"
        prop-name="month"
        prop-placeholder="MM"
        prop-pattern="\d{1,2}"
        prop-min="1"
        prop-max="12"
        :prop-error="errorMonth"
        @input-change="handleInputChange"
      />
      <ComponentInput
        prop-title="Year"
        prop-name="year"
        prop-placeholder="YYYY"
        prop-pattern="\d{4,4}"
        prop-min="1900"
        :prop-max="maxYear"
        :prop-error="errorYear"
        @input-change="handleInputChange"
      />
    </fieldset>
  </form>
</template>

<style scoped>
fieldset {
  border: none;
}
</style>
