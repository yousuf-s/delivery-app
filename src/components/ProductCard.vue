<template>
  <div class="border rounded-lg p-4 shadow-sm text-center space-y-2">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover rounded" />
    <h3 class="text-lg font-semibold">{{ product.name }}</h3>
    <p class="text-red-600 font-bold">₹{{ product.price }}</p>
    <button
      class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      @click="addToCart(product.id)"
    >
      Add to Cart
    </button>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const props = defineProps<{ product: Product }>();

import { useCartStore } from '../store/cartStore'
const cartStore = useCartStore()
const addToCart = (id: number) => cartStore.addToCart(id)
</script>
