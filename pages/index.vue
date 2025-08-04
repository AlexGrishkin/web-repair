<template>
  <div :class="$style.mainPageWrapper">
    <Banner />
    <MainAbout
      title="КТО МЫ?"
      description="ГЕОМЕТРИЯ РЕМОНТА — это команда профессионалов, готовая реализовать
ремонт «под ключ» любого формата и любой сложности"
    />
    <Direction :title="directionData.title" :description="directionData.description" />
    <img src="/gradient.webp" :class="$style.gradient" />
    <div :class="$style.aboutGradient" />
  </div>
</template>

<script setup lang="ts">
import Banner from '~/components/Main/Banner.vue';
import Direction from '~/components/Main/Direction.vue';

const directionData = {
  title: 'НАШИ НАПРАВЛЕНИЯ',
  description: [
    {
      text: 'Ремонт по индивидуальным дизайн-проектам',
    },
    {
      text: 'Ремонт по индивидуальным дизайн-проектам',
    },
    {
      text: 'Ремонт по индивидуальным дизайн-проектам',
    },
    {
      text: 'Ремонт по индивидуальным дизайн-проектам',
    },
  ],
};

// const config = useRuntimeConfig();
</script>

<style module lang="scss">
.mainPageWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  padding-bottom: 4rem;
  height: auto;
  overflow: hidden;
}

.gradient {
  position: absolute;
  top: 865px;
  width: 100%;
  height: 900px;
  z-index: 3;
}

.aboutGradient::before {
  content: '';
  top: 1080px;
  z-index: 2;
  position: absolute;
  background: linear-gradient(180deg, #2c2d30 0%, $darkWhite 68.27%);
  width: 100%;
  height: 580px;
}
</style>
