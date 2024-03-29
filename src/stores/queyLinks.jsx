import { makeAutoObservable } from 'mobx'

class QueyLinksStore {
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
}
export default new QueyLinksStore()
