<template>
  <div class="home">
    <van-popover v-model:show="showPopover" overlay>
      <div>
        <p>页面放大，或者在ipad上，pc端，会看见三角形下面有个小间隙，</p>
        <p>我看了你是通过，transform: translate实现的逻辑上没啥问题，</p>
        <p>但是会有间隙，通过margin 偏移实现出现间隙的概率小点，不知道为啥，是不是有点吹毛求疵了，😄</p>
        <p>在ipad pro 上间隙比较明显</p>
      </div>
      <template #reference>
        <van-button type="primary">深色风格</van-button>
      </template>
    </van-popover>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const showPopover = ref(false)
    return {
      showPopover
    }
  }
})
</script>

<style lang="scss">
.home {
  font-size: 32px;
}
</style>
