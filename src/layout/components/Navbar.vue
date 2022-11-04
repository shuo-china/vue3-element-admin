<template>
  <div class="navbar-container">
    <siderbar-collapse />
    <breadcrumb />
    <div style="flex: 1"></div>
    <el-dropdown class="avatar-container">
      <div class="avatar-wrapper">
        <el-avatar
          shape="square"
          :size="38"
          :src="userStore.userInfo.avatar"
        ></el-avatar>
      </div>
      <template #dropdown>
        <el-dropdown-menu class="user-dropdown">
          <el-dropdown-item @click="logout"> 退出登录 </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import SiderbarCollapse from '@/components/SidebarCollapse/index.vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import { useUserStore } from '@/store'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const logout = () => {
  userStore.logout()
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.avatar-container {
  margin-right: 16px;
  font-size: 0;
  cursor: pointer;
}
</style>
