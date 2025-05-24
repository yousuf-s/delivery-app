import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      { id: 1, name: 'Chicken Breast', price: 249, category: 'chicken', image: '/chicken.jpg' },
      { id: 2, name: 'Mutton Curry Cut', price: 499, category: 'mutton', image: '/mutton.jpg' },
    ],
  }),
  getters: {
    getByCategory: (state) => (category: string) =>
      state.products.filter((p) => p.category === category),
  },
})
