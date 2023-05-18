//algo from https://dev.to/code_mystery/javascript-age-calculator-calculate-age-from-date-of-birth-o9b#comment-1h427
const getAge = (birthDate) => {
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

const isDayValid = (year, month, day) => {
  const date = new Date()
  let thisYear = date.getFullYear()
  let thisMonth = date.getMonth() + 1
  let thisDay = date.getDate()
  const maxDay = getMaxDayinMonth(year, month)
  if (!day) {
    return 'This field is required'
  } else if (day < 1 || day > maxDay) {
    return 'Invalid Day'
  } else if (thisYear === year && month === thisMonth && day >= thisDay) {
    return 'Must be in the past'
  } else return ''
}
const isMonthValid = (year, month) => {
  const date = new Date()
  let thisMonth = date.getMonth() + 1
  let thisYear = date.getFullYear()
  if (!month) {
    return 'This field is required'
  } else if (month > thisMonth && thisYear === year) {
    return 'Must be in the past'
  } else if (month < 1 || month > 12) {
    return 'Invalid Month'
  } else return ''
}
const isYearValid = (year) => {
  const d = new Date()
  let thisYear = d.getFullYear()
  if (!year) {
    return 'This field is required'
  } else if (year < 1900) {
    return 'Must be earlier than 1900'
  } else if (year > thisYear) {
    return 'Must be in the past'
  } else return ''
}
export { getAge, isYearValid, isMonthValid, isDayValid }
