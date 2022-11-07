<template>
  <div :class="classNames">
    <img src="/logo.svg" alt="logo" />
    <h1 v-if="appStore.sidebarOpened" class="logo-title">Kirin Admin</h1>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '@/store'

const appStore = useAppStore()

const classNames = computed(() => [
  'logo-container',
  {
    'sidebar-closed': !appStore.sidebarOpened
  }
])
</script>

<style lang="scss" scoped>
@import '@/styles/mixin';

.logo-container {
  display: flex;
  align-items: center;
  padding: 16px 20px;

  img {
    height: 32px;
    vertical-align: middle;
  }

  .logo-title {
    @include ellipsis;

    margin: 0 0 0 12px;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    white-space: nowrap;
  }
}

.sidebar-closed {
  justify-content: center;
}
</style>
