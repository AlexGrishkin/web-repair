<template>
  <div :class="$style.newsPageWrapper">
    <div v-if="newsData" :class="$style.mainNewsContent">
      <h1 v-if="newsData.title" :class="$style.newsTitle">{{ newsData.title }}</h1>
      <img :class="$style.decorImage" src="/decorateImg.svg" alt="Декоративная картинка" />
      <div :class="$style.textContent">
        <nuxt-img v-if="newsData.pictureUrl" :src="newsData.pictureUrl" :class="$style.newsImage" />
        <p v-if="newsData.description" :class="$style.description">{{ newsData.description }}</p>
      </div>
    </div>

    <NewsScroller v-if="filteredNews?.length" :news="filteredNews" title="Другие новости" />
  </div>
</template>

<script setup lang="ts">
import NewsScroller from '~/components/NewsScroller.vue';

const config = useRuntimeConfig();
const route = useRoute();

const { data: newsData } = await useAsyncData('newsData', async () => {
  try {
    return await $fetch(`${config.public.apiBase}/news/${route.params.id}`);
  } catch (error) {
    console.error('Ошибка при загрузке одной новости:', error);
    return null;
  }
});

const { data: allNews } = await useAsyncData('allNews', async () => {
  try {
    return await $fetch(`${config.public.apiBase}/news`, {
      params: {
        page: 0,
        size: 10,
      },
    });
  } catch (error) {
    console.error('Ошибка при загрузке всех новостей:', error);
    return null;
  }
});

// Защищённый computed:
const filteredNews = computed(() => {
  if (!allNews.value?.content || !newsData.value?.id) {
    return [];
  }
  return allNews.value.content.filter((item) => item.id !== newsData.value.id);
});
</script>

<style scoped lang="scss" module>
.newsPageWrapper {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.mainNewsContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  height: auto;
  margin-bottom: 4rem;
  @include layoutHorizontal;

  .newsTitle {
    text-align: center;
    text-wrap: balance;
    @include textSuperBigBold;
  }

  .textContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @include bp($bp-medium) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .description {
      width: auto;
      font-size: 28px;

      @include textMediumBig;
    }

    .newsImage {
      border-radius: 1rem;
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
}

.scrollerWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.3rem;
  width: 100vw;
  max-width: 100%;

  .scrollerTitle {
    text-transform: capitalize;

    @include textSuperBig;
  }

  .decorImage {
    max-width: 25.4rem;
    height: 3.6rem;
  }
}
</style>
