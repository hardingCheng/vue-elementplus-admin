<template>
  <router-view></router-view>
</template>

<script setup>
// 在刷新页面后，新主题会失效
// 应用加载后，写入 `style` 即可
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'

const store = useStore()
generateNewStyle(store.getters.mainColor).then((newStyleText) => {
  writeNewStyle(newStyleText)
})
</script>

<style></style>
