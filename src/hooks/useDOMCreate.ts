import { onUnmounted } from 'vue'
/**
 * @des 创建一个DOM节点，用于teleport组件落地，等
 * @param nodeId
 */
function useDOMCreate(nodeId: string): void {
  const node = document.createElement('div')
  node.id = nodeId
  document.body.appendChild(node)
  onUnmounted(() => {
    document.body.removeChild(node)
  })
}

export default useDOMCreate
