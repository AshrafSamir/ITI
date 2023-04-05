<template>
  <div v-if="!$route.meta.hideNav">
    <NavBar />
  </div>
  <div id="app">
    <!-- <client-form /> -->
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  provide() {
    console.log("here");
    return {
      clients: this.clients,
    };
  },
  data() {
    return {
      clients: [
        { id: 1, firstName: "Jill", lastName: "Smith", age: 50, admin: true },
        { id: 2, firstName: "Eve", lastName: "Jackson", age: 94, admin: false },
      ],
      id: 3,
      firstName: "",
      lastName: "",
      age: "",
      admin: false,
    };
  },
  methods: {
    addClient(e) {
      e.preventDefault();
      this.clients.push({
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        admin: this.admin,
      });
      this.id++;
      console.log(this.clients);
    },
    handleDelete(id) {
      console.log("here1", id);
      this.clients = this.clients.filter((client) => client.id !== id);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 3rem auto;
}
form > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
form > div > label {
  margin-right: 10px;
}
form > div > input {
  width: 200px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
}
button {
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #ccc;
  cursor: pointer;
  margin: 0.5rem;
}
button:hover {
  background-color: #aaa;
}
</style>
