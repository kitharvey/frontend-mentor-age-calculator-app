<script lang="ts">
import ComponentInput from './ComponentInput.vue'

//algo from https://dev.to/code_mystery/javascript-age-calculator-calculate-age-from-date-of-birth-o9b#comment-1h427
function getAge(year, month, day) {
  const birthDate = new Date(year, month - 1, day)
  const EPOCH = new Date(0)
  const EPOCH_YEAR = EPOCH.getUTCFullYear()
  const EPOCH_MONTH = EPOCH.getUTCMonth()
  const EPOCH_DAY = EPOCH.getUTCDate()
  const diff = new Date(Date.now() - birthDate.getTime())
  return {
    years: Math.abs(diff.getUTCFullYear() - EPOCH_YEAR),
    months: Math.abs(diff.getUTCMonth() - EPOCH_MONTH),
    days: Math.abs(diff.getUTCDate() - EPOCH_DAY)
  }
}
function getMaxDaysinMonth(year, month) {
  const maxDaysinMonth = new Date(year, month, 0) // 0 to return to the previous day (last day of prev month)
  return maxDaysinMonth.getDate()
}
function isValidYear(year) {
  const thisYear = new Date().getFullYear()
  return thisYear >= year
}
function isMonthValid(month) {
  return month <= 12 && month > 0
}
function isDayValid(year, month, day) {
  return day <= getMaxDaysinMonth(year, month) && day > 0
}

export default {
  data() {
    return {
      year: 1888,
      month: 12,
      day: 32,
      age: {
        years: null,
        months: null,
        days: null
      }
    }
  },
  methods: {
    submitted() {
      let { year, month, day } = this
      if (isValidYear(year) && isMonthValid(month) && isDayValid(year, month, day)) {
        const { years, months, days } = getAge(year, month, day)
        this.age.years = years
        this.age.months = months
        this.age.days = days
      }
    },
    handlerInputChange(value) {
      this[`${value.propName}`] = value.inputValue
    }
  },
  components: { ComponentInput }
}
</script>
<template>
  <form v-on:submit.prevent="submitted" id="age">
    <ComponentInput
      prop-title="Day"
      prop-name="day"
      prop-placeholder="DD"
      @input-change="handlerInputChange"
    />
    <ComponentInput
      prop-title="Month"
      prop-name="month"
      prop-placeholder="MM"
      @input-change="handlerInputChange"
    />
    <ComponentInput
      prop-title="Year"
      prop-name="year"
      prop-placeholder="YYYY"
      @input-change="handlerInputChange"
    />
    <p>{{ age.years ? age.years : '--' }} years</p>
    <p>{{ age.months ? age.months : '--' }} months</p>
    <p>{{ age.days ? age.days : '--' }} days</p>
  </form>
</template>
