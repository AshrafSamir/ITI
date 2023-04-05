<template>
    <nav>
        <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/add">Add</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: "NavBar",

};
</script>

<style scoped>
nav {
  background-color: #4caf50;
  color: white;
  padding: 1rem;
}
ul{
    list-style: none;
    display: flex;
    justify-content: space-around;
}
li{
    margin: 0 1rem;
}
li:hover{
    color: rgb(0, 0, 0);
    cursor: pointer;
}

</style>