<script setup lang="ts">
  import { computed } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';

  const { prefixCls } = useDesign('header');

  const getClass = computed(() => [
    prefixCls
  ])
</script>

<template>
  <div :class="getClass">
  </div>
</template>

<style lang="scss" scoped></style>
