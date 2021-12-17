<template>
  <div class="Application_AppProvider_box">
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { prefix } from '/@/settings/styleSetting';

export default defineComponent({
  name: 'AppProvider',
  props: {
    prefixCls: { type: String, default: prefix },
  },
  setup(props) {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
