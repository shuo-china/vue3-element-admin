<template>
  <div class="wrapper">
    <side-bar class="sidebar-container" :style="{ backgroundColor: variables.menuBg }"></side-bar>
    <div class="main-container">
      <div class="fixed-header">
        <nav-bar></nav-bar>
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar'
import AppMain from './components/AppMain.vue'
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
}
</style>
