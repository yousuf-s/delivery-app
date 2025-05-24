import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as { productId: number; quantity: number }[],
  }),
  actions: {
    addToCart(productId: number) {
      const item = this.items.find((i) => i.productId === productId)
      if (item) item.quantity++
      else this.items.push({ productId, quantity: 1 })
    },
    removeFromCart(productId: number) {
      this.items = this.items.filter((i) => i.productId !== productId)
    },
  },
})
