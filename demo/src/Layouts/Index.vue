<template>
  <div class="Application_AppProvider_box">
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { prefix } from '/@/settings/styleSetting';
import Footer from "./member/Footer/Index.vue"

export default defineComponent({
  name: 'AppProvider',
  props: {
    prefixCls: { type: String, default: prefix },
  },
  components:{
    Footer
  },
  setup(props) {
    console.log(123);
    return {};
  },
});
</script>

<style lang="less" scoped></style>
