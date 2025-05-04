<!-- <template>
  <v-row class="mb-6" dense>
    <v-col
      v-for="card in translatedCards"
      :key="card.title"
      cols="12"
      md="4"
    >
      <v-card
        class="pa-4 hover-card"
        elevation="4"
        color="grey-lighten-4"
        rounded="xl"
      >
        <v-row no-gutters align="center">
          <v-col cols="auto">
            <v-icon
              :icon="card.icon"
              size="36"
              class="me-4 text-primary"
            />
          </v-col>
          <v-col>
            <div class="text-subtitle-1 font-weight-medium">
              {{ card.title }}
            </div>
            <div class="text-body-2 text-grey-darken-2">
              {{ card.value }}
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template> -->

<template>
  <v-row class="mb-6" dense>
    <v-col
      v-for="card in translatedCards"
      :key="card.title"
      cols="12"
      md="4"
      class="d-flex"
    >
      <v-card
        class="pa-4 hover-card d-flex flex-column justify-center align-center text-white"
        elevation="4"
        color="primary"
        rounded="lg"
        style="min-height: 160px; width: 100%"
      >
        <v-row no-gutters align="center">
          <v-col cols="auto">
            <v-icon
              :icon="card.icon"
              size="36"
              class="me-4"
            />
          </v-col>
          <v-col>
            <div class="text-subtitle-1 font-weight-medium">
              {{ card.title }}
            </div>
            <div class="text-body-2">
              {{ card.value }}
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const cardData = ref({
  id: '',
  contact: '',
  address: '',
})

onMounted(async () => {
  try {
    const res = await fetch('https://dummyjson.com/users/1')
    const data = await res.json()

    cardData.value = {
      id: `USR-${data.id}`,
      contact: data.phone,
      address: data.address.address,
    }
  } catch (err) {
    console.error('Failed to load card data:', err)
  }
})

const translatedCards = computed(() => [
  {
    title: t('cards.id'),
    value: cardData.value.id,
    icon: 'mdi-card-account-details',
  },
  {
    title: t('cards.contact'),
    value: cardData.value.contact,
    icon: 'mdi-phone',
  },
  {
    title: t('cards.address'),
    value: cardData.value.address,
    icon: 'mdi-map-marker',
  },
])
</script>

<style scoped>
.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-card:hover {
  transform: translateY(-6px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}
</style>
