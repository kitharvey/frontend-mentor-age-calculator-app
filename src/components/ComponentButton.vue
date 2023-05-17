<script lang="ts" setup>
import IconArrow from './icons/IconArrow.vue'
</script>

<template>
  <button type="submit" form="age">
    <IconArrow />
  </button>
</template>

<style scoped>
button {
  all: unset;
  cursor: pointer;
  background-color: var(--purple);
  width: 6em;
  height: 6em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
