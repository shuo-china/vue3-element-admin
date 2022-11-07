import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const useAppStore = defineStore('app', {
  state: () => ({
    sidebarOpened: Cookies.get('sidebarStatus')
      ? !!+(Cookies.get('sidebarStatus') || '0')
      : true
  }),
  actions: {
    toogleSidebarOpened() {
      this.sidebarOpened = !this.sidebarOpened
      Cookies.set('sidebarStatus', this.sidebarOpened ? '1' : '0')
    }
  }
})
