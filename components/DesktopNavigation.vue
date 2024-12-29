<script setup></script>

<template>
  <div class="links">
    <NuxtLink to="/" style="text-decoration: none">
      <p>Главная</p>
    </NuxtLink>
    <NuxtLink to="/projects" style="text-decoration: none">
      <p>Проекты</p>
    </NuxtLink>
    <NuxtLink to="/contact" style="text-decoration: none">
      <p>Связь</p>
    </NuxtLink>
  </div>
</template>

<style scoped>
.links {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
p {
  font-weight: 800;
  text-align: center;
  color: greenyellow;
  font-size: 1.5rem;
}
</style>
