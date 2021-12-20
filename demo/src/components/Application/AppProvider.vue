<template>
  <div class="Application_AppProvider_box">
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs , ref } from 'vue';
import { prefix } from '/@/settings/styleSetting';
import { createAppProviderContext } from './useAppContext';

export default defineComponent({
  name: 'AppProvider',
  props: {
    prefixCls: { type: String, default: prefix },
  },
  setup(props) {  
    const isMobile = ref(false);

    const { prefixCls } = toRefs(props);

    createAppProviderContext({ prefixCls, isMobile });

    return {};
  },
});
</script>

<style lang="less" scoped></style>
