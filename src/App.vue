<script setup>
import ComponentButton from './components/ComponentButton.vue'
import ComponentCard from './components/ComponentCard.vue'
import ComponentFooter from './components/ComponentFooter.vue'
import ComponentForm from './components/ComponentForm.vue'
</script>
<template>
  <head>
    <title>Frontend Mentor | Age calculator app</title>
  </head>
  <body>
    <main>
      <ComponentCard>
        <ComponentForm />
        <ComponentButton />
      </ComponentCard>
    </main>
  </body>
  <ComponentFooter />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;1,400;1,800&display=swap');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: 0;
}
:root {
  --purple: hsl(259, 100%, 65%);
  --light-red: hsl(0, 100%, 67%);
  --white: hsl(0, 0%, 100%);
  --off-white: hsl(0, 0%, 94%);
  --light-grey: hsl(0, 0%, 86%);
  --smokey-grey: hsl(0, 1%, 44%);
  --off-black: hsl(0, 0%, 8%);
}
body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--light-grey);
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
