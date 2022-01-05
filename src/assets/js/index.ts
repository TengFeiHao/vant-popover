import _ from 'lodash'

/**
 * @des 判断是否为空
 */
const _isEmpty = _.isEmpty

/**
 * @des 防抖
 */
const _debounce = _.debounce

/**
 * @des 节流
 */
const _throttle = _.throttle

/**
 * @des 深拷贝
 */
const _cloneDeep = _.cloneDeep

/*
 * 获取url参数
 */
const getUrlParam = (name: string) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

export { _isEmpty, _debounce, _throttle, _cloneDeep, getUrlParam }
