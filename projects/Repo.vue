<script setup lang="ts">
import { defineProps } from "vue";
import { useData } from "vitepress";
const { isDark } = useData();
const { user, repo } = defineProps<{ user: string; repo: string }>();
</script>
<template>
  <a
    :href="`https://github.com/${user}/${repo}`"
    target="_blank"
    style="display: block"
  >
    <ClientOnly>
      <img
        :src="`https://github-readme-stats.vercel.app/api/pin/?username=${user}&repo=${repo}${
          isDark ? '&theme=dark' : ''
        }`"
      />
    </ClientOnly>
  </a>
</template>
