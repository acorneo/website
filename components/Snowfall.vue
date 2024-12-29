<template>
  <div class="snowfall">
    <div
      v-for="(flake, index) in snowflakes"
      :key="index"
      class="snowflake"
      :style="flake.style"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps(["snoflakes"]);

import { ref, onMounted } from "vue";

const snowflakes = ref([]);

const createSnowflake = () => {
  /*function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }*/
  const size = Math.random() * 5 + 5;
  const duration = Math.random() * 5 + 5;

  //const colors = ["green", "red", "blue", "yellow", "white"];

  return {
    style: {
      position: "absolute",
      left: `${Math.random() * 100}vw`,
      top: `${(Math.random() - 0.3) * 100}vh`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: "white" /*colors[getRandomInt(4)]*/,
      borderRadius: "50%",
      opacity: Math.random() * 0.5 + 0.3,
      animation: `fall ${duration}s linear infinite`,
    },
  };
};

const generateSnowflakes = () => {
  snowflakes.value = Array.from({ length: props.snoflakes }, () =>
    createSnowflake()
  );
};

onMounted(() => {
  generateSnowflakes();
});
</script>

<style>
.snowfall {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
  z-index: 1000;
}

.snowflake {
  position: absolute;
  animation: fall 5s linear infinite;
}

@keyframes fall {
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(100vh);
  }
}
</style>
