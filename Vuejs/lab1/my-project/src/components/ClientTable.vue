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
      <tr v-for="client in clients" :key="client.id">
        <template v-if="showUsers && !client.admin">
          <td>{{ client.firstName }}</td>
          <td>{{ client.lastName }}</td>
          <td>{{ client.age }}</td>
          <td>{{ client.admin ? "admin" : "user" }}</td>
        </template>
        <template v-if="showAdmins && client.admin">
          <td>{{ client.firstName }}</td>
          <td>{{ client.lastName }}</td>
          <td>{{ client.age }}</td>
          <td>{{ client.admin ? "admin" : "user" }}</td>
        </template>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ClientTable",
  data() {
    return {
      showUsers: false,
      showAdmins: false,
    };
  },
  props: {
    clients: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleShowUsers() {
      this.showUsers = !this.showUsers;
    },
    handleShowAdmins() {
      this.showAdmins = !this.showAdmins;
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
</style>
