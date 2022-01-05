import { AxiosPromise } from 'axios'
import request from '../request'

/**
 * @des 例子，看完删除
 * @param {String} projectCode 项目编号
 */
export const getRightList = (projectCode: string): Promise<AxiosPromise> =>
  request('/permissions/v1/manager/account/project/right/list', {
    projectCode
  })
