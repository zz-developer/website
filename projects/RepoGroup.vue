<script setup lang="ts">
import { defineProps } from "vue";
const { name } = defineProps<{ name: string }>();
</script>
<template>
  <div class="name">{{ name }}</div>
  <div class="repo-group">
    <slot></slot>
  </div>
</template>
<style scoped>
.name {
  font-family: "Courier New", Courier, monospace;
  font-weight: 550;
  font-size: large;
  margin-top: 18px;
  margin-bottom: 4px;
  margin-left: 4px;
}
.repo-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  width: 70vw;
  max-width: 900px;
}
</style>
