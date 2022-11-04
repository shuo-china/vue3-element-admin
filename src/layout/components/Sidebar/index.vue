<template>
  <div class="sidebar-container">
    <logo />
    <el-scrollbar>
      <el-menu
        :default-active="activeMenu"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :background-color="variables.menuBg"
        :unique-opened="true"
        :collapse="!appStore.sidebarOpened"
        router
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :route="route"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import path from 'path-browserify'
import { isEmpty } from '@/utils/type'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import { usePremissionStore, useAppStore } from '@/store'
import variables from '@/styles/variables.module.scss'
import type { RouteRecordRaw } from 'vue-router'

const router = useRouter()
const appStore = useAppStore()
const premissionStore = usePremissionStore()

const activeMenu = computed(() => router.currentRoute.value.path)
const routes = computed(() => generateMenus(premissionStore.routes))

function generateMenus(routes: readonly RouteRecordRaw[], basePath = '') {
  const result: RouteRecordRaw[] = []
  routes.forEach(item => {
    if (!item.meta?.title) {
      if (isEmpty(item.children)) {
        return
      } else {
        result.push(
          ...generateMenus(item.children!, path.resolve(basePath, item.path))
        )
        return
      }
    } else {
      const routePath = path.resolve(basePath, item.path)
      const route = {
        ...item,
        path: routePath,
        children: isEmpty(item.children)
          ? []
          : generateMenus(item.children!, routePath)
      }
      result.push(route)
    }
  })
  return result
}
</script>
