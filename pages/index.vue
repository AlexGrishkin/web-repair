<template>
  <div :class="$style.mainPageWrapper">
    <Banner v-if="bannerData" :banner-data="bannerData" />
    <NewsScroller v-if="news?.content?.length" :news="news.content" />
    <EventsScroller
      v-if="grouppedEvents && Object.keys(grouppedEvents).length"
      :groupped-events="grouppedEvents"
    />
    <GalleryScroller v-if="gallery?.length" :gallery="gallery" />
  </div>
</template>

<script setup lang="ts">
import Banner from '~/components/Main/Banner.vue';
import NewsScroller from '~/components/NewsScroller.vue';
import EventsScroller from '~/components/EventsScroller.vue';
import GalleryScroller from '~/components/GalleryScroller.vue';

const config = useRuntimeConfig();

const { data: bannerData } = await useAsyncData('bannerData', async () => {
  try {
    return await $fetch(`${config.public.apiBase}/banner`);
  } catch (error) {
    console.error('Ошибка при загрузке баннера:', error);
    return null;
  }
});

const { data: news } = await useAsyncData('newsData', async () => {
  try {
    return await $fetch(`${config.public.apiBase}/news/V1`, {
      params: {
        page: 0,
        size: 10,
      },
    });
  } catch (error) {
    console.error('Ошибка при загрузке новостей:', error);
    return null;
  }
});

const { data: events } = await useAsyncData('eventsData', async () => {
  try {
    return await $fetch(`${config.public.apiBase}/events`, {
      params: {
        page: 0,
        size: 10,
      },
    });
  } catch (error) {
    console.error('Ошибка при загрузке событий:', error);
    return null;
  }
});

const { data: gallery } = await useAsyncData('galleryData', async () => {
  try {
    return await $fetch(`${config.public.apiBase}/picture`);
  } catch (error) {
    console.error('Ошибка при загрузке галереи:', error);
    return null;
  }
});

// Защита для reduce:
const grouppedEvents = computed(() => {
  return events.value?.content?.length
    ? events.value.content.reduce((acc, item) => {
        if (!acc[item.date]) acc[item.date] = [];
        acc[item.date].push(item);
        return acc;
      }, {})
    : {};
});
</script>

<style module lang="scss">
.mainPageWrapper {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  margin-bottom: 4rem;
  height: auto;
}
</style>
