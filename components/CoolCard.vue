<script setup>
import { useMouseInElement } from "@vueuse/core";
import { ref } from "vue";
const target = ref(null);

const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target);

const cardTransform = computed(() => {
  const MAX_ROTATION = 6;

  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2);

  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2);

  return isOutside.value
    ? ""
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});
</script>

<template>
  <div
    class="card"
    ref="target"
    :style="{
      transform: cardTransform,
      transition: 'transform 0.25s ease-out',
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.card {
  display: inline-block;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 15px;
  background-color: rgb(32, 32, 32);
  color: white;
}
</style>
