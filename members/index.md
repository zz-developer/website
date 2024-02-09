---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [    
  {
    avatar: 'https://www.github.com/Integral-Tech.png',
    name: 'Integral-Tech',
    title: '2018级',
    links: [
      { icon: 'github', link: 'https://github.com/Integral-Tech' }
    ]
  },
  {
    avatar: 'https://www.github.com/NekoMoYi.png',
    name: 'NekoMoYi',
    title: '2019级',
    links: [
      { icon: 'github', link: 'https://github.com/NekoMoYi' }
    ]
  },
  {
    avatar: 'https://www.github.com/zecyel.png',
    name: 'Zecyel',
    title: '2020级',
    links: [
      { icon: 'github', link: 'https://github.com/zecyel' }
    ]
  },
  {
    avatar: 'https://www.github.com/fpc5719.png',
    name: 'fpc5719',
    title: '2020级',
    links: [
      { icon: 'github', link: 'https://github.com/fpc5719' }
    ]
  },
  {
    avatar: 'https://www.github.com/so1aric.png',
    name: 'so1aric',
    title: '2021级',
    links: [
      { icon: 'github', link: 'https://github.com/so1aric' }
    ]
  },
  {
    avatar: 'https://www.github.com/kermanx.png',
    name: '_Kerman',
    title: '2022级',
    links: [
      { icon: 'github', link: 'https://github.com/kermanx' }
    ]
  },
  {
    avatar: 'https://www.github.com/zvmsbackend.png',
    name: 'Earendil',
    title: '2022级',
    links: [
      { icon: 'github', link: 'https://github.com/zvmsbackend' }
    ]
  },
  {
    avatar: 'https://www.github.com/zvmshhj.png',
    name: 'Hauchy',
    title: '2022级',
    links: [
      { icon: 'github', link: 'https://github.com/zvmshhj' }
    ]
  },
  {
    avatar: 'https://www.github.com/Chen-anon.png',
    name: 'clc',
    title: '2022级',
    links: [
      { icon: 'github', link: 'https://github.com/Chen-anon' }
    ]
  },
  {
    avatar: 'https://www.github.com/7086cmd.png',
    name: '7086cmd',
    title: '2023级',
    links: [
      { icon: 'github', link: 'https://github.com/7086cmd' }
    ]
  },
  {
    avatar: 'https://www.github.com/diyanqi.png',
    name: 'Dignite',
    title: '2023级',
    links: [
      { icon: 'github', link: 'https://github.com/diyanqi' }
    ]
  },
  {
    avatar: 'https://www.github.com/RegirX.png',
    name: 'Regir',
    title: '2023级',
    links: [
      { icon: 'github', link: 'https://github.com/RegirX' }
    ]
  },
  {
    avatar: 'https://www.github.com/zhangzheheng12345.png',
    name: 'ZZH',
    title: '2023级',
    links: [
      { icon: 'github', link: 'https://github.com/zhangzheheng12345' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      🎉 Let's build from here
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
