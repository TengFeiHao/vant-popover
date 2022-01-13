<template>
  <div class="home">
    <van-tabs v-model:active="active">
      <van-tab title="标签 1">{{ des }}</van-tab>
      <van-tab title="标签 2">{{ des }}</van-tab>
      <van-tab title="标签 3">{{ des }}</van-tab>
      <van-tab title="标签 4">{{ des }}</van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const active = ref(0)
    const des = ref('手机端预览，切换tab会发现字体上下跳，我觉得van-tab已经用了flex的center就没必要写line-height了，即使换行也有让字体默认的line-height，去掉line-height的样式就不会上下跳了')
    return { active, des }
  }
})
</script>

<style lang="scss">
.home {
  font-size: 32px;
}
</style>
