<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN">
    <AppProviderVue>
      <RouterView></RouterView>
    </AppProviderVue>
  </NConfigProvider>
</template>

<script setup lang="ts">
import AppProviderVue from './components/Application/AppProvider.vue';
import { zhCN, dateZhCN } from 'naive-ui'
import { NConfigProvider } from 'naive-ui';
</script>
