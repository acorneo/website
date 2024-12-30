<script setup>
import Girlandua from "./public/gir.svg";
import DesktopNavigation from "./components/DesktopNavigation.vue";

const isMobile = ref(false);
const isMenuOpen = ref(false);
const isRotated = ref(false);
const girOn = ref(true);

const checkDevice = () => {
  isMobile.value = window.innerWidth <= 767;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  checkDevice();
  if (girOn.value === true) {
    const girInterval = setInterval(() => {
      isRotated.value = !isRotated.value;
    }, 600);
  }
  window.addEventListener("resize", checkDevice);
});
</script>

<template>
  <Snowfall snoflakes="80" v-if="isMobile" />
  <Snowfall snoflakes="250" v-else />
  <div id="main">
    <main>
      <DesktopNavigation />
      <img
        :src="Girlandua"
        style="width: 100%; transition: transform 0s"
        :style="{
          transform: isRotated ? 'rotate(180deg) scaleY(-1)' : 'rotate(0deg)',
        }"
      /><NuxtPage />
    </main>
  </div>
</template>

<style scoped>
.mobile {
  z-index: 2;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
#main {
  position: absolute; /* change from fixed to absolute */
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%; /* change height to min-height */
  margin: 0;
  padding: 0;
  background-color: rgb(37, 37, 37);
}
@media (max-width: 767px) {
  main {
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
  }
}
@media (min-width: 1280px) {
  main {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Victor+Mono:ital,wght@0,100..700;1,100..700&display=swap");
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Victor Mono", serif;
  font-weight: 400;
  font-style: normal;
}
</style>
