<template>
  <div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" />
      </el-form-item>
    </el-form>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      {{ userStore.token }}
    </el-form-item>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useUserStore } from '@/store'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const form = reactive({
  username: '',
  password: ''
})

const onSubmit = () => {
  userStore.login(form).then(() => {
    router.push('/')
  })
}
</script>
