<template>
  <div class="card">
    <slot />
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
