<template>
    <div class="options">
        <button @click="()=> {flag = !flag}">Update</button>
    </div>
    <div v-if="flag">
        <h1>Client Details</h1>
        <p>First Name: {{ firstName }}</p>
        <p>Last Name: {{ lastName }}</p>
        <p>Age: {{ age }}</p>
        <p>Admin: {{ admin }}</p>
    </div>
    <div v-else>
        <form @submit="updateClient">
    <div>
      <label for="firstName">First Name</label>
      <input v-model="firstName" type="text" id="firstName" />
    </div>
    <div>
      <label for="lastName">Last Name</label>
      <input v-model="lastName" type="text" id="lastName" />
    </div>
    <div>
      <label for="age">Age</label>
      <input v-model="age" type="number" id="age" />
    </div>
    <div>
      <label for="admin">Admin</label>
      <input v-model="admin" type="checkbox" id="admin" />
    </div>
    <button type="submit">Update Client</button>
  </form>
    </div>

</template>

<script>
export default {
  name: "ClientDetails",
  data() {
    return {
        firstName: "",
        lastName: "",
        age: "",
        admin: false,
        id: this.$route.params.id,
        flag: true,
    };
  },
  created() {
    this.getClient();
  },
    methods: {
        getClient() {
        fetch(`http://localhost:3000/clients/${this.id}`)
            .then((res) => res.json())
            .then((data) => (
                this.firstName = data.firstName,
                this.lastName = data.lastName,
                this.age = data.age,
                this.admin = data.admin
            ));
        },
        updateClient(e){
            e.preventDefault();
            fetch(`http://localhost:3000/clients/${this.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    age: this.age,
                    admin: this.admin,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    this.$router.push("/");
                });
        },
        
  },
};
</script>

<style>
.options {
  display: flex;
  justify-content: center;
  align-items: center;
}
h1{
    text-align: center;
}
p{
    text-align: center;
}

</style>
