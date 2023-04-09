<template>
  <div class="container bg-white cardContainer p-5">
    <!-- title here -->
    <div class="mb-3 justify-content-start flex-column">
      <h2>{{ game.title }}</h2>
      <h2>{{ game.platform }}</h2>
    </div>
    <p class="opacity-50">300K Downloads</p>
    <!-- discription here -->
    <div class="cardContainer-content">
      <p>{{ game.short_description }}</p>
    </div>
    <!-- footer here -->
    <div class="cardContainer-footer">
      <h6>★ Grind trains with your cool crew!</h6>
      <h6>★ Level up your favorite characters!</h6>
      <h6>★ Colorful and vivid HD graphics!</h6>
    </div>
    <p class="readmore-color">Read more</p>
  </div>
</template>

<script>
export default {
  name: "CardContainer",
  props: ["game"],
};
</script>

<style>
.readmore-color {
  cursor: pointer;
  margin-top: 3rem;
  color: #572589;
}
</style>
