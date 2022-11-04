<template>
  <div class="sidebar-collapse-container" @click="onClick">
    <el-icon :size="iconSize" color="#304156">
      <Fold v-if="appStore.sidebarOpened" />
      <Expand v-else />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store'

const iconSize = '22px'

const appStore = useAppStore()

const onClick = () => {
  appStore.toogleSidebarOpened()
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.module';

.sidebar-collapse-container {
  display: flex;
  align-items: center;
  height: $navbar-height;
  padding: 0 16px;
  cursor: pointer;

  &:hover {
    background: rgb(0 0 0 / 10%);
  }
}
</style>
