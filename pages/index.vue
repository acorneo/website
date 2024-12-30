<script setup>
import MemePicture from "../public/meme.png";
</script>

<template>
  <div class="hero">
    <div class="rules">
      <h3>📗 правила сайта</h3>
      <ol>
        <li>😎 смотреть глазками ручками не трогать</li>
        <li>🙏 почитать максика</li>
        <li>👆 особо много не тыкать, трафик не бесконечный</li>
        <li>⛔ не ддосить</li>
        <li>💖 быть счастливым когда надо и плакать когда надо</li>
        <li>🤑 не вспоминать про реакт во время пребывания</li>
      </ol>
    </div>
    <img :src="MemePicture" alt="смешная картинка" />
  </div>
  <h3>🛣️ дорожная карта сайта</h3>
  <ol>
    <li>🤩 плеер и снежинкоменятель</li>
    <li>📱 адаптировать под мобилки нормально</li>
    <li>➕ добавить больше смешных штук, чтоб прям сильно смешнее было</li>
  </ol>

  <h2>это интересно</h2>
  <CoolCard>
    <h3>конвертер единиц измерения</h3>
    <p>можно перевести температуру и расстояние, если вы<br />вдруг из USA</p>
    <NuxtLink to="/apps/converter"><button>посмотреть</button></NuxtLink>
  </CoolCard>
</template>

<style scoped>
button:hover {
  transform: scale(1.1);
  transition: transform 0.05s linear;
}
button {
  padding: 0.5rem;
  border-radius: 10px;
  background-color: black;
  font-family: "Victor Mono", serif;
  border: none;
  font-weight: 400;
  font-style: normal;
}
.hero {
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
}
.hero img {
  border-radius: 15px;
  height: 30vh;
}
* {
  color: white;
}
h2 {
  margin-bottom: 0.5rem;
  margin-top: 0;
  font-size: 3rem;
}
h3 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  margin-top: 0;
}
li {
  font-size: 1.3rem;
}
</style>
