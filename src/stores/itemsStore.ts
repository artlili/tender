import { defineStore } from 'pinia'
import { fetchData } from '@/utils/api'

interface Item {
  id: number
  name: string
  // добавь другие поля, если они есть в API
}

interface ApiResponse {
  results: Item[]
  count: number
  next: string | null
  previous: string | null
}

export const useItemsStore = defineStore('items', {
  state: () => ({
    items: [] as Item[],
    total: 0,
    currentPage: 1,
    isLoading: false,
    error: null as string | null,
  }),

  actions: {
    async loadItems(page = 1) {
      this.isLoading = true
      this.error = null
      this.currentPage = page

      const { data, error } = await fetchData<ApiResponse>(`/api/list/?page=${page}`)

      if (error) {
        this.error = error
        this.items = []
        this.total = 0
      } else {
        this.items = data?.results || []
        this.total = data?.count || 0
      }

      this.isLoading = false
    },
  },
})
