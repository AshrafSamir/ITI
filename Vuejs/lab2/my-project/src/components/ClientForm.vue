

<template>
  <form @submit="addClient">
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
    <button type="submit">Add Client</button>
  </form>
  <client-table @delete="handleDelete" />
</template>

<script>
    export default {
      name: "ClientForm",
      data(){
        return{
            firstName: "",
            lastName: "",
            age: "",
            admin: false,
        }
        },
        methods:{
            addClient(e){
                e.preventDefault();
                const client = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    age: this.age,
                    admin: this.admin,
                };
                fetch("http://localhost:3000/clients", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(client),
                }).then(() => {
                    this.firstName = "";
                    this.lastName = "";
                    this.age = "";
                    this.admin = false;
                    this.$router.push("/");
                });
            },
        }
    };  

</script>

<style scoped>

</style>