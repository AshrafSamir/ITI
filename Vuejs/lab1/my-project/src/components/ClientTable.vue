<template>
  <div>
    <table>
      <button
        :class="{
          active: showUsers,
        }"
        @click="handleShowUsers"
      >
        Show Users
      </button>
      <button
        :class="{
          active: showAdmins,
        }"
        @click="handleShowAdmins"
      >
        Show Admins
      </button>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Role</th>
      </tr>
      <tr v-for="client in injectedClients" :key="client.id">
        <template v-if="showUsers && !client.admin">
          <td>{{ client.firstName }}</td>
          <td>{{ client.lastName }}</td>
          <td>{{ client.age }}</td>
          <td>{{ client.admin ? "admin" : "user" }}</td>
          <td>
            <button class="delete" @click="() => handleDelete(client.id)">
              delete
            </button>
          </td>
        </template>
        <template v-if="showAdmins && client.admin">
          <td>{{ client.firstName }}</td>
          <td>{{ client.lastName }}</td>
          <td>{{ client.age }}</td>
          <td>{{ client.admin ? "admin" : "user" }}</td>
          <td>
            <button class="delete" @click="() => handleDelete(client.id)">
              delete
            </button>
          </td>
        </template>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  inject: ["clients"],
  created() {
    console.log(this.clients); // injected value
  },

  name: "ClientTable",

  data() {
    return {
      showUsers: false,
      showAdmins: false,
      injectedClients: this.clients,
    };
  },
  methods: {
    handleShowUsers() {
      this.showUsers = !this.showUsers;
    },
    handleShowAdmins() {
      this.showAdmins = !this.showAdmins;
    },
    handleDelete(id) {
      this.injectedClients = this.injectedClients.filter(
        (client) => client.id !== id
      );
      //send data to parent
      this.$emit("delete", id);
    },
  },
};
</script>

<style scoped>
table {
  width: 80%;
  margin: 1rem auto;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: #4caf50;
  color: white;
}

td {
  background-color: #f2f2f2;
}

td:nth-child(4) {
  text-transform: capitalize;
}

td:nth-child(4)::first-letter {
  text-transform: uppercase;
}

.active {
  background-color: #4caf50;
  color: white;
}

.delete {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
