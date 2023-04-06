<template>
  <div class="App bg-light p-3">
    <div class="container bg-white cardContainer">
      <div class="row">
        <div class="col-12">
          <CardContainer :range="[0, 5]" :title="'Most Recomendation'" />
        </div>
      </div>
    </div>
    <div class="container bg-white cardContainer">
      <div class="row">
        <div class="col-12">
          <CardContainer :range="[5, 10]" :title="'Most Popular'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardContainer from "./components/cardContainer/CardContainer.vue";

export default {
  name: "App",
  components: {
    CardContainer,
  },
};
</script>

<style>
.App {
  width: 100%;
  height: 100%;
}
.cardContainer {
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 0.5rem;
  /* make drop shadow style */
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
</style>
