<template>
  <div id="guide-start" @click="onClick">
    <el-tooltip :content="$t('msg.navBar.guide')">
      <svg-icon icon="guide"></svg-icon>
    </el-tooltip>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { useI18n } from 'vue-i18n'
import steps from './steps'
import { watchSwitchLang } from '@/utils/i18n'

const i18n = useI18n()

let driver = null

const isntanceDriver = () => {
  driver = new Driver({
    allowClose: true,
    closeBtnText: i18n.t('msg.guide.close'),
    nextBtnText: i18n.t('msg.guide.next'),
    prevBtnText: i18n.t('msg.guide.prev')
  })
}

onMounted(() => {
  isntanceDriver()
})

watchSwitchLang(isntanceDriver)

const onClick = () => {
  driver.defineSteps(steps(i18n))
  driver.start()
}
</script>

<style lang="scss" scoped></style>
