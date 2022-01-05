import { Method } from 'axios'

export interface Options {
  baseUrl?: string
  method?: Method
  showLoading?: boolean
  contentType?: string
}
