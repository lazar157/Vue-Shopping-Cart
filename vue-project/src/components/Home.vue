<template>
    <div class="container">
        <product-item v-for="product in data.products" :key="product.id" :product="product"></product-item>
    </div>
</template>

<script setup>
    import ProductItem from "./ProductItem.vue";
    import  {useCounterStore} from "../stores/counter";

    const data = useCounterStore()
</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    margin-left: 22px;
    margin-top: 60px;
    gap: 25px;
}

</style>