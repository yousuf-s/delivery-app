import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/category/:type', component: Category },
  { path: '/product/:id', component: ProductDetails },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
