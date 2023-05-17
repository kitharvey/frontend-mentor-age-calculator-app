//algo from https://dev.to/code_mystery/javascript-age-calculator-calculate-age-from-date-of-birth-o9b#comment-1h427
const getAge = (year, month, day) => {
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
const getMaxDayinMonth = (year, month) => {
  const maxDaysinMonth = new Date(year, month, 0) // 0 to return to the previous day (last day of prev month)
  return maxDaysinMonth.getDate()
}
const getMaxDayThisMonth = (today) => {
  return getMaxDayinMonth(today.getFullYear(), today.getMonth())
}
const getMaxValues = () => {
  const today = new Date()
  const maxYear = today.getFullYear()
  const maxDay = getMaxDayThisMonth(today)
  return { maxYear, maxDay }
}
const isValidYear = (year) => {
  const thisYear = new Date().getFullYear()
  return thisYear >= year && year >= 1900
}
const isMonthValid = (month) => {
  return month <= 12 && month > 0
}
const isDayValid = (year, month, day) => {
  return day <= getMaxDayinMonth(year, month) && day > 0
}

export { getAge, isValidYear, isMonthValid, isDayValid, getMaxValues }
