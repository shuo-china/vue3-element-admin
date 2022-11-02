<template>
  <div>
    <el-button @click="expired">token过期</el-button>
    <el-button @click="logout">退出登录</el-button>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store'
import { expired } from '@/api/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const logout = () => {
  userStore.logout()
  router.push('/login')
}
</script>
