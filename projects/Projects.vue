<script setup lang="ts">
import { useRouter } from "vitepress";
const router = useRouter();
</script>
<template>
  <h1>Projects</h1>
  <div class="projects">
    <div @click="router.go('./projects/zvms/')">
      <h2>ZVMS</h2>
      <p>镇海中学义工管理系统</p>
      <p>一种很新的义工管理平台，历经 4 次重构，有 7 年历史</p>
    </div>
  </div>
</template>
<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 28px;
}
.projects > div {
  position: relative;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px 24px;
  padding-right: 64px;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-duration: 0.7s;
  transition-property: all;
  box-shadow: 0 18px 56px rgba(0, 0, 0, 0.16), 0 0px 12px rgba(0, 0, 0, 0.16);
}
.projects > div:hover {
  background-color: var(--vp-c-gray-3);
  box-shadow: 0 18px 56px rgba(0, 0, 0, 0.16),
    0px 0px 12px 2px var(--vp-c-brand-1);
}
.projects > div > h2 {
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
  border: none;
}
.projects > div > p {
  margin: 0;
  padding: 0;
  border: none;
  color: var(--vp-c-text-2);
  line-height: 1.3rem;
  margin-bottom: 6px;
}
.projects > div::after {
  content: "❯";
  position: absolute;
  display: block;
  right: 32px;
  bottom: 38px;
  font-size: 50px;
  color: var(--vp-c-text-3);
}
.projects > div:hover::after {
  color: var(--vp-c-brand-1);
}
.projects > div:hover > h2 {
  color: var(--vp-c-brand-1);
}
</style>
