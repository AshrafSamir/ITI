<template>
  <div class="myCard-container">
    <div class="card-image">
      <img :src="game.thumbnail" alt="card image" />
      <RateComponent v-if="!showInfo" class="card-image__rate" />
    </div>
    <div class="card-content">
      <h2 v-if="showInfo">{{ game.title }}</h2>
      <h3>{{ subtitle }}</h3>
      <p :class="{ description: !showInfo }">{{ game.short_description }}</p>
      <span v-if="showInfo">{{ downloads }}</span>
      <div class="card-button">
        <ButtonComponent @click="handleDetails" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ButtonComponent from "./elements/ButtonComponent.vue";
import RateComponent from "./elements/RateComponent.vue";

export default {
  components: {
    ButtonComponent,
    RateComponent,
  },
  emits: ["sendId"],
  methods: {
    handleDetails() {
      //emit id to parent
      this.$emit("sendId", this.game.id);
    },
  },
  setup() {
    const image = ref("https://www.freetogame.com/g/540/thumbnail.jpg");
    const subtitle = ref("");
    const downloads = ref("300K Downloads");

    return {
      image,
      subtitle,
      downloads,
    };
  },
  props: ["game", "showInfo"],
};
</script>

<style scoped>
.myCard-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
}
.card-image img {
  width: 100%;
  height: 12rem;
  border-radius: 1rem 1rem;
}
.card-image {
  position: relative;
}
.card-image__rate {
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
}
.card-button {
  width: 100%;
}
.card-content {
  padding: 0.5rem;
}
.card-content h2 {
  color: #3c3c3d;
}
.card-content h3 {
  color: #444242;
}
.card-content p {
  color: #444242;
}
.card-content span {
  color: #3c3c3d;
  opacity: 50%;
}
.description {
  max-height: 3em; /* This is equivalent to two lines of text */
  overflow: hidden;
}
.myCard-container:hover {
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
}

@media screen and (max-width: 768px) {
  .myCard-container {
    width: 100%;
  }
}
</style>
