<script lang="ts">
export default {
  props: {
    years: Number,
    months: Number,
    days: Number
  }
}
</script>

<template>
  <div>
    <p>
      <span>{{ years ? years : '--' }}</span> years
    </p>
    <p>
      <span>{{ months ? months : '--' }}</span> months
    </p>
    <p>
      <span>{{ days ? days : '--' }}</span> days
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
