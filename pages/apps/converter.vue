<script setup>
import { ref } from "vue";

const chosenType = ref("temperature");
// for temperature
const lastModifiedValue = ref("celsius");
const updateFahrenheitValue = () => {
  if (lastModifiedValue.value === "celsius") {
    const celsiusInput = document.getElementById("numberInputFirst");
    const fahrenheitInput = document.getElementById("numberInputSecond");
    const celsius = parseFloat(celsiusInput.value);
    fahrenheitInput.value = Math.round((celsius * 9) / 5 + 32);
  }
};
const updateCelsiusValue = () => {
  if (lastModifiedValue.value === "fahrenheit") {
    const celsiusInput = document.getElementById("numberInputFirst");
    const fahrenheitInput = document.getElementById("numberInputSecond");
    const fahrenheit = parseFloat(fahrenheitInput.value);
    celsiusInput.value = Math.round(((fahrenheit - 32) * 5) / 9);
  }
};

// for distance
const lastModifiedValueDistance = ref("kilometers");
const updateMilesValue = () => {
  if (lastModifiedValueDistance.value === "kilometers") {
    const kilometersInput = document.getElementById("distanceInputFirst");
    const milesInput = document.getElementById("distanceInputSecond");
    const kilometers = parseFloat(kilometersInput.value);
    milesInput.value = Math.round(kilometers * 0.621371);
  }
};

const updateKilometersValue = () => {
  if (lastModifiedValueDistance.value === "miles") {
    const kilometersInput = document.getElementById("distanceInputFirst");
    const milesInput = document.getElementById("distanceInputSecond");
    const miles = parseFloat(milesInput.value);
    kilometersInput.value = Math.round(miles * 1.60934);
  }
};
</script>

<template>
  <h1>Конверация единиц измерения</h1>
  <h2>Выберите тип:</h2>
  <div class="buttons">
    <button
      @click="chosenType = 'temperature'"
      :class="{ active: chosenType === 'temperature' }"
    >
      <p>Температура</p>
    </button>
    <button
      @click="chosenType = 'distance'"
      :class="{ active: chosenType === 'distance' }"
    >
      <p>Расстояние</p>
    </button>
  </div>
  <div v-if="chosenType === 'temperature'">
    <label for="numberInputFirst">Температура в градусах Цельсия:</label>
    <input
      type="number"
      id="numberInputFirst"
      @input="
        (event) => {
          lastModifiedValue = 'celsius';
          updateFahrenheitValue();
        }
      "
    />
    <br />
    <label for="numberInputSecond">Температура в градусах Фаренгейта:</label>
    <input
      type="number"
      id="numberInputSecond"
      style="margin-top: 1rem"
      @input="
        (event) => {
          lastModifiedValue = 'fahrenheit';
          updateCelsiusValue();
        }
      "
    />
  </div>
  <div v-if="chosenType === 'distance'">
    <label for="distanceInputFirst">Расстояние в километрах</label>
    <input
      type="number"
      id="distanceInputFirst"
      @input="
        (event) => {
          lastModifiedValueDistance = 'kilometers';
          updateMilesValue();
        }
      "
    />
    <br />
    <label for="distanceInputSecond">Расстояние в милях</label>
    <input
      type="number"
      id="distanceInputSecond"
      style="margin-top: 1rem"
      @input="
        (event) => {
          lastModifiedValueDistance = 'miles';
          updateKilometersValue();
        }
      "
    />
  </div>
</template>

<style scoped>
.buttons {
  margin-bottom: 1.5rem;
}
* {
  color: white;
}
button {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 5px;
  font-size: medium;
  background-color: black;
  border: none;
}
button:hover {
  background-color: rgb(24, 24, 24);
}
button:active {
  transform: scale(1.05);
  transition: transform 0.1s ease-in-out;
}
button {
  transition: transform 0.1s ease-in-out;
  margin-right: 1rem;
}
.active {
  background-color: rgb(48, 41, 41);
}
input {
  margin-left: 1rem;
  background-color: goldenrod;
  border: none;
  font-size: 1.5rem;
  border-radius: 5px;
}
input:focus {
  outline: none;
}
</style>
