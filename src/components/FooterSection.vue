<template>
  <v-footer class="d-flex flex-column rounded-t-lg" color="primary">
    <!-- Top: Social -->
    <div class="d-flex w-100 align-center px-4 py-2">
      <strong>{{ t('footer.connect') }}</strong>

      <div class="d-flex ga-2 ms-auto">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          size="small"
          variant="plain"
        />
      </div>
    </div>

    <!-- Divider -->
    <v-divider class="w-100"></v-divider>

    <!-- Bottom: Contact Info -->
    <v-container class="text-white text-center py-4">
      <v-row justify="center" dense>
        <v-col cols="12" md="4">
          <div class="font-weight-medium">📧 {{ t('footer.email') }}</div>
          <div>info@myportfolio.com</div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="font-weight-medium">📞 {{ t('footer.contact') }}</div>
          <div>+389 70 123 456</div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="font-weight-medium">🕐 {{ t('footer.hours') }}</div>
          <div>{{ t('footer.hoursValue') }}</div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Copyright -->
    <div class="px-4 py-2 text-center w-100 rounded-lg">
      {{ new Date().getFullYear() }} — <strong>{{ t('app.name') }}</strong>
    </div>
  </v-footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
</script>
