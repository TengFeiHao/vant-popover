/**
 * @des 全局域名配置
 */

import { EnvType } from '@/types/common/env'

const ENV: EnvType = {
  PROJEXT_NAME: '项目名称',
  BASE_URL: 'https://api4.jiankangyouyi.com'
}

if (import.meta.env.VITE_APP_ENV === 'beta') {
  ENV.BASE_URL = 'https://dev.api4.jiankangyouyi.com'
} else if (import.meta.env.VITE_APP_ENV === 'development') {
  ENV.BASE_URL = 'https://dev.api4.jiankangyouyi.com'
}
export { ENV }
