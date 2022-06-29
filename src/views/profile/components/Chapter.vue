<template>
  <el-timeline>
    <el-timeline-item
      v-for="item in chapterData"
      :key="item.id"
      :timestamp="item.timestamp"
      placement="top"
    >
      <el-card>
        <h4>{{ item.content }}</h4>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup>
import { getChapter } from '@/api/user'
import { ref } from 'vue'
import { watchSwitchLang } from '@/utils/i18n'

const chapterData = ref([])
const getChapterData = async () => {
  chapterData.value = await getChapter()
}

getChapterData()
watchSwitchLang(getChapterData)
</script>

<style lang="scss" scoped></style>
