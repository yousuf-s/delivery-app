<template>
  <div class="p-6">
    <h2 class="text-2xl font-semibold mb-4 capitalize">Category: {{ category }}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useProductStore } from '../store/productStore'
import ProductCard from '../components/ProductCard.vue'

const route = useRoute()
const category = route.params.type as string
const productStore = useProductStore()
const products = productStore.getByCategory(category)
</script>
