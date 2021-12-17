<script setup lang="ts">
  import { get as safeGet, invoke } from 'lodash-es';
  import { computed } from 'vue';
  import Layout from '/@/components/Layout/Index.vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { on , once } from '/@/utils/domUtils';
  import { isFunction } from '/@/utils/is';

  const { prefixCls } = useDesign('Home');

  const getClass = computed(() => [prefixCls]);

  
  const req = () => {
    
    const result:Promise<any> | undefined = invoke(window,'DeviceMotionEvent.requestPermission')

    if(result){
      result.then(res => {
        alert(res)
      })
    }
    
    
  }
</script>

<template>
  <div :class="getClass">
    <Layout></Layout>
    <div @click="req">ssssssss</div>
  </div>
</template>

<style lang="scss" scoped></style>
