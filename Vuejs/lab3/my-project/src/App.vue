<template>
  <div class="App bg-light">
    <NavBar />
    <div class="card-details container">
      <cardComponent :showInfo="true" :game="game" />
    </div>
    <CardContainer
      @sendId="handleId"
      :range="[0, 5]"
      :title="'Most Recomendation'"
    />
    <CardContainer
      @sendId="handleId"
      :range="[5, 10]"
      :title="'Most Popular'"
    />
  </div>
</template>

<script>
import CardComponent from "./components/card/CardComponent.vue";
import CardContainer from "./containers/cardContainer/CardContainer.vue";
import NavBar from "./components/navbar/NavBar.vue";

export default {
  name: "App",
  components: {
    CardContainer,
    CardComponent,
    NavBar,
  },
  data() {
    return {
      game: {
        id: 339,
        title: "Tibia",
        thumbnail: "https://www.freetogame.com/g/339/thumbnail.jpg",
        short_description:
          "A old-school free-to-play massively multiplayer online \r\nrole-playing game.",
        game_url: "https://www.freetogame.com/open/tibia",
        genre: "MMORPG",
        platform: "PC (Windows)",
        publisher: "CipSoft",
        developer: "CipSoft",
        release_date: "1997-01-07",
        freetogame_profile_url: "https://www.freetogame.com/tibia",
      },
    };
  },
  methods: {
    handleId(id) {
      fetch(`http://localhost:3000/games/${id}`)
        .then((res) => res.json())
        .then((data) => {
          this.game = data;
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        });
    },
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
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
.card-details .myCard-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
}
.card-details .myCard-container:hover {
  transform: none;
}
.card-details .myCard-container img {
  width: 40rem;
  height: 20rem;
  border-radius: 0;
}
.card-details .myCard-container .card-content {
  padding: 2rem;
  margin: auto;
}

@media screen and (max-width: 1015px) {
  .card-details .myCard-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 0.5rem;
  }

  .card-details .myCard-container img {
    width: 100%;
    border-radius: 0;
  }
  .card-details .myCard-container .card-image {
    width: 100%;
  }
}
</style>
