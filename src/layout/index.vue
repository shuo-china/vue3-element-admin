<template>
  <div
    class="app-wrapper"
    :class="[appStore.sidebarOpened ? 'open-sidebar' : 'hide-sidebar']"
  >
    <!-- Menu -->
    <sidebar />
    <!-- Header + Main -->
    <div class="main-container">
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Sidebar, AppMain, Navbar } from './components'
import { useAppStore } from '@/store'

const appStore = useAppStore()
</script>

<style lang="scss" scoped>
@import '@/styles/mixin';
@import '@/styles/variables.module';

.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
