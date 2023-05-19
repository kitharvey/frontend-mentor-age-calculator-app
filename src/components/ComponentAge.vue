<script lang="ts">
import ComponentCount from './ComponentCount.vue'

export default {
  props: {
    years: Number,
    months: Number,
    days: Number
  },
  components: { ComponentCount }
}
</script>

<template>
  <div>
    <p>
      <span><ComponentCount :number="years" /></span> years
    </p>
    <p>
      <span><ComponentCount :number="months" /></span> months
    </p>
    <p>
      <span><ComponentCount :number="days" /></span> days
    </p>
  </div>
</template>

<style scoped>
div {
  padding-top: 3em;
}
p {
  font-size: 5em;
  font-weight: 800;
  font-style: italic;
}
span {
  color: var(--purple);
}

@media only screen and (max-width: 700px) {
  div {
    padding-top: 4em;
  }
  p {
    font-size: 4em;
  }
}
@media only screen and (max-width: 480px) {
  p {
    font-size: 3em;
  }
}
</style>
