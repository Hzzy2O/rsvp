<script setup lang="ts">
  import { computed } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { Heart20Filled } from '@vicons/fluent';
  import { NIcon } from 'naive-ui';

  const { prefixCls } = useDesign('footer');

  const getClass = computed(() => [prefixCls]);
</script>

<template>
  <div :class="getClass">
    <p>
      Crafted by HZ with lots of 
      <NIcon size="4vw" color="#ff415c">
        <Heart20Filled />
      </NIcon>
      for YZQ
    </p>
  </div>
</template>

<style lang="less">
  @prefix-cls: ~'@{namespace}-footer';

  .@{prefix-cls} {
    display: flex;
    justify-content: center;
    p {
      font-size: 15px;
      line-height: 29px;
      color: rgba(187, 54, 72, 0.568);
      padding-bottom: 20px;
      .n-icon {
        animation-name: pulse2;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        svg{
          transform:translateY(5px);
        }
      }
    }
  }

  @keyframes pulse2 {
    0% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(0.85);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
