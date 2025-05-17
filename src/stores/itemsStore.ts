import { defineStore } from 'pinia'
import { fetchData } from '@/utils/api'
import type { Item, ApiResponse } from '@/types'

export const useItemsStore = defineStore('items', {
  state: () => ({
    allItems: [] as Item[],
    itemsPerPage: 30,
    currentPage: 1,
    selectedTender: null as Item | null,
    searchQuery: '',
    isLoading: false,
    error: null as string | null,
  }),
  getters: {
    filteredAllItems(state): Item[] {
      if (!state.searchQuery) return state.allItems
      return state.allItems.filter((item) =>
        item.title.toLowerCase().includes(state.searchQuery.toLowerCase()),
      )
    },

    filteredItems(state): Item[] {
      const start = (state.currentPage - 1) * state.itemsPerPage
      const filtered = !state.searchQuery
        ? state.allItems
        : state.allItems.filter((item) =>
            item.title.toLowerCase().includes(state.searchQuery.toLowerCase()),
          )

      return filtered.slice(start, start + state.itemsPerPage)
    },

    totalPages(state): number {
      const filtered = !state.searchQuery
        ? state.allItems
        : state.allItems.filter((item) =>
            item.title.toLowerCase().includes(state.searchQuery.toLowerCase()),
          )

      return Math.ceil(filtered.length / state.itemsPerPage)
    },

    isFiltered(state): boolean {
      return state.searchQuery.trim().length > 0
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
    setSearchQuery(query: string) {
      this.searchQuery = query
      this.setPage(1)
    },
  },
})
