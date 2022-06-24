<template>
  <div
    class="wrapper"
    :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <sidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: $store.getters.cssVar.menuBg }"
    ></sidebar>
    <div class="main-container">
      <div class="fixed-header" id="guide-tags">
        <nav-bar />
        <tags-view />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain.vue'
import TagsView from '@/components/TagsView'
import variables from '@/styles/variables.module.scss'
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.module.scss';
@import '~@/styles/mixin.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
