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
  <p>{{ years ? years : '--' }} years</p>
  <p>{{ months ? months : '--' }} months</p>
  <p>{{ days ? days : '--' }} days</p>
</template>
