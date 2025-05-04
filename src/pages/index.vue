<template>
  <v-app>
    <v-app-bar flat color="primary" dark class="rounded-b-lg">
      <v-container class="d-flex justify-space-between align-center">
        <!-- Logo + App Name -->
        <div class="d-flex align-center">
          <v-img
            src="/logo.jpg"
            alt="Logo"
            width="140"
            height="140"
            class="mr-3"
          />
          <span class="text-h6 font-weight-bold">{{ t('app.name') }}</span>
        </div>

        <!-- Language Toggle -->
        <v-btn
          variant="tonal"
          color="white"
          @click="toggleLocale"
          :title="locale === 'mk' ? 'Change to English' : 'Промени на македонски'"
          class="px-4 rounded-lg"
        >
          <span class="text-subtitle-2 font-weight-bold">
            {{ locale === 'mk' ? '🇲🇰 MK' : '🇬🇧 EN' }}
          </span>
        </v-btn>


      </v-container>
    </v-app-bar>

    <v-main>
      <v-container class="mt-6">
        <CardsSection />
        
        <v-row justify="center" class="my-4">
          <v-col cols="12" md="6" class="text-center">
            <h2 class="text-h5 font-weight-bold">{{ t('title.priceList') }}</h2>
          </v-col>
        </v-row>

        <ProductsTableApi />
      </v-container>
    </v-main>

    <FooterSection />
  </v-app>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import ProductsTableApi from '@/components/ProductsTableApi.vue'

const { t, locale } = useI18n()

function toggleLocale() {
  locale.value = locale.value === 'mk' ? 'en' : 'mk'
}

</script>

<style scoped>
</style>

