<template>
  <div @click="onToggle">
    <svg-icon
      :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
    ></svg-icon>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import screenfull from 'screenfull'

// 是否全屏
const isFullscreen = ref(false)

const onToggle = () => {
  screenfull.toggle()
  isFullscreen.value = !isFullscreen.value
}
</script>

<style lang="scss" scoped></style>
