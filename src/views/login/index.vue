<template>
  <div class="login-container">
    <div class="login-form">
      <h1 class="login-title">Kirin Admin</h1>
      <el-form ref="formRef" :model="form" :rules="rules" size="large">
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            placeholder="用户名"
            prefix-icon="User"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            placeholder="密码"
            prefix-icon="Lock"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button
            class="submit-btn"
            type="primary"
            :loading="loading"
            native-type="submit"
            @click="onSubmit"
            >登录</el-button
          >
          {{ userStore.token }}
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '@/store'
import { useRouter } from 'vue-router'
import type { FormRules, FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'

const userStore = useUserStore()
const router = useRouter()

const formRef = ref<FormInstance>()

const form = reactive({
  username: '',
  password: ''
})

const rules: FormRules = {
  username: {
    required: true,
    message: '请输入用户名'
  },
  password: {
    required: true,
    message: '请输入密码'
  }
}

const loading = ref(false)

const onSubmit = () => {
  formRef.value?.validate(valid => {
    if (valid) {
      loading.value = true
      userStore
        .login(form)
        .then(() => {
          ElMessage.success('登录成功')
          router.push('/')
        })
        .finally(() => {
          loading.value = false
        })
    }
  })
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f0f2f5;

  .login-form {
    width: 380px;
    margin: 150px auto 0;

    .login-title {
      margin-bottom: 30px;
      color: rgb(0 0 0 / 85%);
      text-align: center;
    }

    .submit-btn {
      width: 100%;
    }
  }
}
</style>
