<template>
  <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
      <th>Admin</th>
      <th>Options</th>
    </tr>
    <tr v-for="client in clients" :key="client.id">
      <td>{{ client.firstName }}</td>
      <td>{{ client.lastName }}</td>
      <td>{{ client.age }}</td>
      <td>{{ client.admin }}</td>
      <td class="options">
        <button class="delete" @click="handleDelete(client.id)">Delete</button>
        <button class="SeeMore" @click="this.$router.push(`/edit/${client.id}`)">See More</button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "ClientTable",
  created() {
    this.getClients();
  },
  data() {
    return {
      clients: [],
    };
  },
  methods: {
    getClients() {
      fetch("http://localhost:3000/clients")
        .then((res) => res.json())
        .then((data) => (this.clients = data));
    },
    handleDelete(id) {
      fetch(`http://localhost:3000/clients/${id}`, {
        method: "DELETE",
      }).then(() => this.getClients());
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

.SeeMore{
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
.options{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
