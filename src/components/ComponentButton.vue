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
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(50%) translateX(0%);
}
button:hover {
  background: var(--off-black);
}

@media only screen and (max-width: 700px) {
  button {
    right: 50%;
    transform: translateY(50%) translateX(50%);
    width: 5em;
    height: 5em;
  }
  svg {
    transform: scale(0.8);
  }
}
</style>
