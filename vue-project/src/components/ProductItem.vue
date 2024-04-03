<template>
    <div class="container">
        <div class="card">
            <img :src="product.image" style="width: 300px" height="200px">
            <div class="card-body">
                <h5>{{ product.name }}</h5>
                <p>Lorem ipsum dolor sit amet.</p>
                <p class="price">${{ product.price }}</p>
                <button @click="data.addToCart(product)">
                    <i class="fa-solid fa-cart-shopping"></i> Add to cart
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

const data = useCounterStore()


const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

</script>

<style scoped>
.card{
    box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.75);
    overflow: hidden;
    border-radius: 20px;
    margin-left: 18px;
    transition: 0.5s;
}

.card:hover{
    scale: 1.02
}



.card button{
    border: none;
    background-color: rgb(0, 184, 0);
    border-radius: 20px;
    padding: 15px;
    cursor: pointer;
    transition: 0.5s;
    color: white;
    font-weight: bold;

}

.card button:hover{
    background-color: rgb(0, 248, 0);
    scale: 1.1;
}

.card-body{
   padding-left: 20px;
   padding-bottom: 20px;
}


.card-body h5{
    font-weight: bold;
    font-size: 16px;
}

.card-body .price{
    background:rgb(255, 35, 35);
    width: 50px;
    display: flex;
    justify-content: center;
    border-radius: 25px;
    color: rgb(199, 194, 194);
    padding-right: 10px;
    padding-left: 10px;
}
</style>