import { SIDEBAR_STATUS_KEY } from '/@/enums/cacheEnum'
import { defineStore } from 'pinia'
import { store } from '/@/store'
import { Persistent } from '/@/utils/cache/persistent'
import { DeviceEnum } from '/@/enums/appEnum'

interface SideBar {
  opened: boolean
}
interface AppState {
  sidebar: SideBar
  // Page loading status
  device: DeviceEnum
}

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const appStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: 'appStore',
  // state: 返回对象的函数
  state: (): AppState => ({
    sidebar: {
      opened: !Persistent.getSession(SIDEBAR_STATUS_KEY)
    },
    device: DeviceEnum.DESKTOP
  }),
  actions: {
    /**菜单开关 */
    ToggleSideBar() {
      if (this.sidebar.opened) {
        Persistent.setSession(SIDEBAR_STATUS_KEY, true)
      } else {
        Persistent.setSession(SIDEBAR_STATUS_KEY, false)
      }
      this.sidebar.opened = !this.sidebar.opened
    },
    CloseSideBar() {
      Persistent.setSession(SIDEBAR_STATUS_KEY, true)
      this.sidebar.opened = false
    },
    OpenSideBar() {
      Persistent.setSession(SIDEBAR_STATUS_KEY, false)
      this.sidebar.opened = true
    },
    ToggleDevice(device: DeviceEnum) {
      this.device = device
    }
  }
})

// export default appStore
// Need to be used outside the setup
export function useAppStore() {
  return appStore(store)
}
