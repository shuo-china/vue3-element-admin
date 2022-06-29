<template>
  <div class="my-container">
    <el-row :gutter="24">
      <el-col :span="6">
        <project-card
          class="project-card"
          :features="featureData"
        ></project-card>
      </el-col>
      <el-col :span="18">
        <el-card>
          <el-tabs v-model="activeName">
            <el-tab-pane :label="$t('msg.profile.feature')" name="feature">
              <feature :features="featureData" />
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.chapter')" name="chapter">
              <chapter />
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.author')" name="author">
              <author />
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import ProjectCard from './components/ProjectCard'
import Feature from './components/Feature'
import Chapter from './components/Chapter'
import Author from './components/Author'
import { getFeature } from '@/api/user'
import { ref } from 'vue'
import { watchSwitchLang } from '@/utils/i18n'

const activeName = ref('feature')

const featureData = ref([])
const getFeatureData = async () => {
  featureData.value = await getFeature()
}

watchSwitchLang(getFeatureData)

getFeatureData()
</script>

<style lang="scss">
.my-container {
  .user-card {
    margin-right: 20px;
  }
}
</style>
