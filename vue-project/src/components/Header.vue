<template>
    <nav>
        <h1>Vuejs3</h1>
        <router-link to="/">Shopping Cart</router-link>
        <ul>
            <router-link to="/">Home</router-link>
            <router-link to="/cart"><i class="fa-solid fa-cart-shopping"></i> Cart ({{ data.countCartItems }})</router-link>
        </ul>
    </nav>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

const data = useCounterStore()

</script>

<style scoped>
nav {
    background: rgb(106, 123, 219);
    margin-left: 3%;
    margin-right: 4%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: 0.5s
}

nav:hover {
    background: rgb(84, 101, 211); /* Change to desired hover color */
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin: 10px;
    font-size: 15px;
    cursor: pointer;
    color: rgb(255, 255, 255);
    background-color: rgb(24, 24, 179);
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 20px;
    

}



nav h1 {
    color: white;
    font-size: 30px;
   
}

nav a {
    color: white;
    margin-left: 20px;
    font-size: 30px;
    text-decoration: none;
    transition: 0.5s;
}

nav a:hover {
   color: aqua;
}

</style>