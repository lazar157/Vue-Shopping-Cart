<template>
    <div>
        <div>
            <div class="card">
                <div class="card-body">
                    <table class="table" v-if="data.cartItems.length > 0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in data.cartItems" :key="item.id">
                                <td>{{ item.id }}</td>
                                <td><img :src="item.image" width="60" height="60"></td>
                                <td>{{ item.name }}</td>
                                <td>
                                    <i class="fa-sharp fa-solid fa-caret-up" @click="data.incrementQ(item)"></i>
                                    {{ item.quantity }}
                                    <i class="fa-sharp fa-solid fa-caret-down" @click="data.decrementQ(item)"></i>
                                </td>
                                <td>{{ item.price }}</td>
                                <td>{{ item.price * item.quantity  }}</td>
                                <td><i class="fa-solid fa-cart-shopping" @click="data.removeFromCart(item)"></i></td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <td><span>${{ data.cartItems.reduce((acc, item) => acc+= item.price * item.quantity, 0) }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-else>
                        Your cart is empty.
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

const data = useCounterStore()
   
</script>

<style scoped>

.card {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 20px auto;
    max-width: 1200px;
    padding: 20px;
}

.table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

.table th, .table td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
    text-align: left;
}

.table th {
    background-color: #f2f2f2;
    
}

.fa-caret-up, .fa-caret-down, .fa-cart-shopping {
    cursor: pointer;
    color: #007bff;
    margin: 0 5px;
}

.fa-cart-shopping:hover {
    color: #dc3545;
}

</style>