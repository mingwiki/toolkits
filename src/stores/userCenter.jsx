import { makeAutoObservable } from 'mobx'

class UserCenterStore {
  constructor() {
    makeAutoObservable(this)
  }
  isSyncing = false
  localUrls = []
  setIsSyncing = (isSyncing) => {
    this.isSyncing = isSyncing
  }
  setLocalUrls = (localUrls) => {
    const temp = [...localUrls] || []
    this.localUrls = temp
  }
  clear= () => {
    this.isSyncing = false
    this.localUrls = []
  }
}
export default new UserCenterStore()