import { defineStore } from 'pinia'
import { fetchData } from '@/utils/api'

interface Item {
  id: number
  title: string
  description: string
  // добавь другие поля, если они есть в API
}

interface ApiResponse {
  data: Item[]
  count: number
  next: string | null
  previous: string | null
}

export const useItemsStore = defineStore('items', {
  state: () => ({
    allItems: [] as Item[],
    itemsPerPage: 30,
    currentPage: 1,
    selectedTender: null as Item | null,
    isLoading: false,
    error: null as string | null,
  }),
  getters: {
    paginatedItems(state) {
      const start = (state.currentPage - 1) * state.itemsPerPage
      return state.allItems.slice(start, start + state.itemsPerPage)
    },

    totalPages(state) {
      return Math.ceil(state.allItems.length / state.itemsPerPage)
    },
  },
  actions: {
    async loadAllItems() {
      this.isLoading = true
      this.error = null

      const { data, error } = await fetchData<ApiResponse>(`/list/?page=2`)

      if (error) {
        this.error = error
        this.allItems = []
      } else {
        this.allItems = data?.data || []
      }

      this.isLoading = false
    },

    setPage(page: number) {
      this.currentPage = page
    },

    async loadTenderById(id: number) {
      this.isLoading = true
      this.error = null
      this.selectedTender = null

      const { data, error } = await fetchData<Item>(`/element/?id=${id}`)

      if (error) {
        this.error = error
      } else {
        this.selectedTender = data
      }

      this.isLoading = false
    },
  },
})
