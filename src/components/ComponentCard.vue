<script lang="ts">
import { getAge, isDayValid, isMonthValid, isValidYear, getMaxValues } from '../helpers'
import ComponentAge from './ComponentAge.vue'
import ComponentButton from './ComponentButton.vue'
import ComponentForm from './ComponentForm.vue'

export default {
  data() {
    return {
      age: {
        years: 0,
        months: 0,
        days: 0
      },
      error: {
        year: '',
        month: '',
        day: ''
      },
      maxValues: getMaxValues()
    }
  },
  methods: {
    handleSubmit(value) {
      const { year, month, day } = value
      if (isValidYear(year) && isMonthValid(month) && isDayValid(year, month, day)) {
        this.age = getAge(year, month, day)
      }
    }
  },
  components: { ComponentForm, ComponentButton, ComponentAge }
}
</script>
<template>
  <div class="card">
    <ComponentForm
      @submit="handleSubmit"
      :error-day="error.day"
      :error-month="error.month"
      :error-year="error.year"
      :max-year="maxValues.maxYear.toString()"
      :max-day="maxValues.maxDay.toString()"
    />
    <ComponentButton />
    <ComponentAge :years="age.years" :months="age.months" :days="age.days" />
  </div>
</template>

<style scoped>
.card {
  background-color: var(--white);
  height: 45em;
  width: 55em;
  border-radius: 2em 2em 15em 2em;
  padding: 5em;
}
</style>
