<script setup lang="ts">
  import { invoke } from 'lodash-es';
  import { computed } from 'vue';
  import Layout from '/@/Layouts/Index.vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { on, once } from '/@/utils/domUtils';
  import { isFunction } from '/@/utils/is';
  import tween from '@tweenjs/tween.js';
  import { NCarousel } from 'naive-ui';

  const { prefixCls } = useDesign('Home');

  const getClass = computed(() => [prefixCls]);

  const req = () => {
    const result: Promise<any> | undefined = invoke(window, 'DeviceMotionEvent.requestPermission');

    if (result) {
      result.then((res) => {
        alert(res);
      });
    }
  };

  console.log((window as any).BMap)
</script>

<template>
  <div :class="getClass">
    <Layout></Layout>
  </div>
</template>

<style lang="less" scoped>
  // @prefix-cls: ~'@{namespace}-footer';
</style>
