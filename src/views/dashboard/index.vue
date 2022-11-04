<template>
  <div>{{ userStore.userInfo }}<el-icon>123</el-icon></div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store'

const userStore = useUserStore()
</script>
