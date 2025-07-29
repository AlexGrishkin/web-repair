<template>
  <div :class="$style.newsPage">
    <h1 :class="$style.newsTitle">Новости</h1>
    <img :class="$style.decorImage" src="/decorateImg.svg" alt="Декоративная картинка" />

    <div v-if="newsData?.content?.length" :class="$style.newsWrapper">
      <CommonNews v-for="news in newsData.content" :key="news.id" :news-data="news" />
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const { data: newsData } = await useAsyncData('newsData', async () => {
  try {
    return await $fetch(`${config.public.apiBase}/news`, {
      params: {
        page: 0,
        size: 90,
      },
    });
  } catch (error) {
    console.error('Ошибка при загрузке новостей:', error);
    return null;
  }
});
</script>
<style lang="scss" module scoped>
.newsPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.3rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 100%;

  @include layoutHorizontal;
}

.newsWrapper {
  margin-top: 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  column-gap: 2rem;
  row-gap: 4rem;

  @include bp($bp-medium) {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }

  @include bp($bp-medium-big) {
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  }
}

.newsTitle {
  text-align: center;
  text-transform: capitalize;

  @include textSuperBigBold;
}

.decorImage {
  max-width: 25.4rem;
  height: 3.6rem;
}
</style>
