<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item, index) in data" :key="item.path">
      <span v-if="index === data.length - 1" class="no-redirect">{{
        item.meta.title
      }}</span>
      <a v-else class="redirect" @click.prevent="onClick(item)">{{
        item.meta.title
      }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { RouteLocationMatched } from 'vue-router'

const route = useRoute()

const data = ref<RouteLocationMatched[]>([])

watch(
  route,
  newVal => {
    data.value = newVal.matched.filter(item => item.meta?.title)
  },
  { immediate: true }
)

const router = useRouter()
const onClick = (item: RouteLocationMatched) => {
  router.push(item.path)
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.module';

.breadcrumb {
  display: inline-block;
  margin-left: 8px;
  font-size: 14px;
  line-height: $navbar-height;
  user-select: none;

  .no-redirect {
    color: rgb(0 0 0 / 85%);
    cursor: text;
  }

  .redirect {
    color: rgb(0 0 0 / 45%);
    font-weight: 600;
  }

  .redirect:hover {
    color: $menu-bg;
  }
}
</style>
