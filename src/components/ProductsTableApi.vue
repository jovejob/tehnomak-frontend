<template>
  <!-- Location Dropdown -->
  <v-row>
    <v-col cols="12" md="4">
      <v-select
        v-model="selectedLocation"
        :items="locations"
        :label="t('table.location')"
        item-title="label"
        item-value="value"
        dense
        outlined
      />
    </v-col>
  </v-row>

  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="serverItems"
    :items-length="totalItems"
    :loading="loading"
    :search="search"
    item-value="title"
    @update:options="onUpdateTableOptions"
  />
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const itemsPerPage = ref(10)
const search = ref('')
const serverItems = ref([])
const loading = ref(true)
const totalItems = ref(0)

// Dynamically generate headers based on current language
const headers = computed(() => [
  { title: t('table.product'), key: 'title', align: 'start' },
  { title: t('table.price'), key: 'price', align: 'end' },
  { title: t('table.rating'), key: 'rating', align: 'end' },
  { title: t('table.stock'), key: 'stock', align: 'end' },
])

// Location dropdown
const locations = [
  { label: 'Локација 1', value: 'default' },
  { label: 'Локација 2', value: 'alt' },
]
const selectedLocation = ref(locations[0].value)

const tableOptions = ref({ page: 1, itemsPerPage: 5, sortBy: [] })


async function loadItems({ page, itemsPerPage, sortBy }) {
  loading.value = true

  const skip = (page - 1) * itemsPerPage
  const sortField = sortBy?.[0]?.key || 'title'
  const sortDirection = sortBy?.[0]?.order || 'asc'

  let apiUrl = ''

  if (selectedLocation.value === 'default') {
    apiUrl = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}&select=title,price,rating,stock`
  } else if (selectedLocation.value === 'alt') {
    apiUrl = `https://dummyjson.com/products/category/smartphones?limit=${itemsPerPage}&skip=${skip}&select=title,price,rating,stock`
  }

  try {
    const res = await fetch(apiUrl)
    const data = await res.json()
    const items = data.products || []

    if (sortField && sortDirection) {
      items.sort((a, b) => {
        const aVal = a[sortField]
        const bVal = b[sortField]
        return sortDirection === 'desc' ? bVal - aVal : aVal - bVal
      })
    }

    serverItems.value = items
    totalItems.value = data.total || 0
  } catch (error) {
    console.error('Error while fetching data:', error)
    serverItems.value = []
    totalItems.value = 0
  } finally {
    loading.value = false
  }
}


function onUpdateTableOptions(options) {
  tableOptions.value = options
  loadItems(options)
}

watch(selectedLocation, () => {
  tableOptions.value.page = 1
  loadItems(tableOptions.value)
})

watch(search, () => {
  tableOptions.value.page = 1
  loadItems(tableOptions.value)
})
</script>
