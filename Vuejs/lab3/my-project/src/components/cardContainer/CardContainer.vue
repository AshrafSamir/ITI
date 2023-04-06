<template>
  <div>
    <div class="cardContainer-header">
      <h2>{{ title }}</h2>
      <div
        v-if="!hideData"
        @click="seeMore"
        class="cardContainer-header_button"
      >
        <p>SEE ALL</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
      <div
        v-if="hideData"
        @click="hideGames"
        class="cardContainer-header_button"
      >
        <p>SEE LESS</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-chevron-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 10.354a.5.5 0 0 1 .708 0L8 12.793l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </div>
    <div>
      <div class="row">
        <div
          v-for="game in only5Games"
          :key="game.id"
          class="games-container__cards__card col-md-2"
        >
          <card-component :game="game"></card-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "../card/CardComponent.vue";
export default {
  components: { CardComponent },
  name: "CardContainer",
  data() {
    return {
      games: [],
      only5Games: [],
      hideData: false,
    };
  },
  mounted() {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then((data) => {
        this.games = data;
        this.hideGames();
      });
  },

  methods: {
    seeMore() {
      this.only5Games = this.games;
      this.hideData = true;
    },
    hideGames() {
      this.only5Games = this.games.slice(this.range[0], this.range[1]);
      this.hideData = false;
    },
  },
  props: ["title", "range"],
};
</script>

<style>
.games-container__cards__card {
  margin: 0 1rem;
}
.cardContainer-header h2 {
  color: #232222;
  opacity: 90%;
  font-size: 1.5rem;
}
.cardContainer-header p {
  font-size: 1.5rem;
}
.cardContainer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.cardContainer-header_button {
  display: flex;
  flex-direction: row;
  color: #572589;
  cursor: pointer;
}
.cardContainer-header_button:hover {
  color: #572589;
  opacity: 80%;
}
.cardContainer-header_button svg {
  margin-top: 0.5rem;
}
</style>
