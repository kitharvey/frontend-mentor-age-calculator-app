<script lang="ts">
import { getAge, isYearValid, isMonthValid, isDayValid } from '../helpers'
import ComponentAge from './ComponentAge.vue'
import ComponentForm from './ComponentForm.vue'

export default {
  data() {
    return {
      age: {
        years: 0,
        months: 0,
        days: 0
      },
      errorYear: '',
      errorMonth: '',
      errorDay: ''
    }
  },
  methods: {
    handleSubmit(value) {
      const { year, month, day } = value
      this.errorYear = isYearValid(year)
      this.errorMonth = isMonthValid(year, month)
      this.errorDay = isDayValid(year, month, day)
      if (!this.errorYear && !this.errorMonth && !this.errorDay) {
        const birthDate = new Date(year, month - 1, day)
        this.age = getAge(birthDate)
      } else {
        this.age = {
          years: 0,
          months: 0,
          days: 0
        }
      }
    }
  },
  components: { ComponentForm, ComponentAge }
}
</script>
<template>
  <div class="card">
    <ComponentForm
      @submit-form-handler="handleSubmit"
      :error-year="errorYear"
      :error-month="errorMonth"
      :error-day="errorDay"
    />
    <ComponentAge :years="age.years" :months="age.months" :days="age.days" />
  </div>
</template>

<style scoped>
.card {
  background-color: var(--white);
  width: 55em;
  border-radius: 2em 2em 15em 2em;
  padding: 5em;
}

@media only screen and (max-width: 900px) {
  .card {
    width: 100%;
  }
}

@media only screen and (max-width: 700px) {
  .card {
    padding: 3em;
  }
}
</style>
