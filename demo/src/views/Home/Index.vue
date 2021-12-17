<script setup lang="ts">
  import { computed } from 'vue';
  import Layout from '/@/components/Layout/Index.vue';
  import { useDesign } from '/@/hooks/web/useDesign';

  const { prefixCls } = useDesign('Home');

  const getClass = computed(() => [
    prefixCls
  ])
</script>

<template>
  <div :class="getClass">
    <Layout></Layout>
  </div>
</template>

<style lang="scss" scoped></style>
