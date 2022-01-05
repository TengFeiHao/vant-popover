/**
 * @des 自定义指令 防止多次点击
 * @example <div v-debounce="{ time: 2000, methods: btnclick }">点击我</div>
 */
const debounce = {
  beforeMount(el, binding): void {
    let _lastTime = 1
    function clickHandler() {
      const gapTime = binding.value.time || 1000
      const _nowTime = +new Date()
      if (_lastTime === 1 || _nowTime - _lastTime > gapTime) {
        binding.value.methods()
        _lastTime = _nowTime
      }
    }
    el.__vueClickOutside__ = clickHandler
    document.addEventListener('click', clickHandler)
  },
  unmounted(el) {
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
  }
}

export default debounce
