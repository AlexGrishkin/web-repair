<template>
  <div :class="$style.mainPageWrapper">
    <Banner v-if="bannerData" :banner-data="bannerData" />
    <MainAbout
      title="КТО МЫ?"
      description="ГЕОМЕТРИЯ РЕМОНТА — это команда профессионалов, готовая реализовать
ремонт «под ключ» любого формата и любой сложности"
    />
    <img src="/gradient.webp" :class="$style.gradient" />
  </div>
</template>

<script setup lang="ts">
import Banner from '~/components/Main/Banner.vue';

const config = useRuntimeConfig();

const { data: bannerData } = await useAsyncData('bannerData', async () => {
  try {
    return await $fetch(`${config.public.apiBase}/banner`);
  } catch (error) {
    console.error('Ошибка при загрузке баннера:', error);
    return null;
  }
});
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
  z-index: 2;
}
</style>
