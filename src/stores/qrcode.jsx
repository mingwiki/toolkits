import { notification } from 'antd'
import { makeAutoObservable } from 'mobx'
import { Url } from '../models/index'
class QrcodeStore {
  links = ['', '']
  constructor() {
    makeAutoObservable(this)
  }
  setLinks = (links) => {
    const temp = [...links]
    this.links = temp
  }
  uploadFromQrcode = (links) => {
    return new Promise((resolve, reject) => {
      Url.uploadFromQrcode(links).then(
        (res) => {
          notification.success({ description: '链接已上传' })
          resolve(res)
        },
        (error) => {
          notification.error({ description: '链接上传失败' })
          reject(error)
        },
      )
    })
  }
  queryQRcode = () => {
    return new Promise((resolve, reject) => {
      Url.queryQRcode().then(
        (res) => {
          resolve(res)
        },
        (error) => {
          reject(error)
        },
      )
    })
  }
}
export default new QrcodeStore()
