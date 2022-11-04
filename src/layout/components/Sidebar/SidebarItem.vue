<template>
  <el-sub-menu v-if="route.children?.length" :index="route.path">
    <template #title>
      <item :title="route.meta?.title" :icon="route.meta?.icon" />
    </template>
    <sidebar-item
      v-for="item in route.children"
      :key="item.path"
      :route="item"
    />
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <item :title="route.meta?.title" :icon="route.meta?.icon"></item>
  </el-menu-item>
</template>

<script setup lang="ts">
import Item from './Item.vue'
import type { RouteRecordRaw } from 'vue-router'

defineProps<{
  route: RouteRecordRaw
}>()
</script>
