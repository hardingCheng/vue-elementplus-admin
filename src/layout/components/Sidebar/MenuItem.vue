<template>
  <!-- element icon  -->
  <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
  <!-- 非element icon  -->
  <svg-icon v-else :icon="icon"></svg-icon>
  <span>{{ title }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
·
