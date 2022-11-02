<template>
  <div>{{ userStore.userInfo }}</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store'

const userStore = useUserStore()
</script>
