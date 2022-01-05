<template>
  <transition name="fade-load">
    <div v-if="loadingProps && loadingProps.showLoading" class="container">
      <!-- 有别的全局loading 可以在这里扩展，目前写了两个 -->
      <img v-if="loadingProps.loadingType === 'evaluation'" class="evaluation-loading" src="@/assets/images/common/loading1.gif" />
      <img v-else class="loading" src="@/assets/images/common/loading.gif" />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { LoadingProps } from '@/types/loading/loading'

export default defineComponent({
  props: {
    loadingProps: {
      type: Object as PropType<LoadingProps>
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000000000000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  .loading {
    width: 230px;
    height: 230px;
  }

  .evaluation-loading {
    width: 460px;
    height: 432px;
    border-radius: 24px;
  }
}
</style>
