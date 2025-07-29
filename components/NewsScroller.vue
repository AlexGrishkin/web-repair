<template>
  <div :class="$style.mainContentWrapper">
    <div :class="$style.scrollerWrapper">
      <h2 :class="$style.scrollerTitle">{{ title }}</h2>
      <img :class="$style.decorImage" src="/decorateImg.svg" alt="Декоративная картинка" />
      <Scroller
        name="news"
        :class="$style.newsScroller"
        :custom-options="swiperOptions"
        :nav-styles="{
          prev: { left: '0rem' },
          next: { right: '0rem' },
        }"
      >
        <template v-if="news?.length">
          <swiper-slide v-for="n in news" :key="n.id">
            <News :news-data="n" />
          </swiper-slide>
        </template>
      </Scroller>
      <Button button-text="Все новости" @on-click-button="goToNewsPage" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '~/components/UI/Button.vue';
import Scroller from '~/components/common/Scroller.vue';
import { SwiperSlide } from 'swiper/vue';
import News from '~/components/common/News.vue';

defineProps({
  news: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: 'Новости храма',
  },
});

const swiperOptions = {
  slidesPerView: 1.05,
  spaceBetween: 20,
  breakpoints: {
    414: {
      slidesPerView: 1.05,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2.05,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3.02,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 3.02,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
};

const goToNewsPage = () => {
  navigateTo({ path: '/news' });
};
</script>

<style scoped lang="scss" module>
.mainContentWrapper {
  display: flex;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  height: auto;

  @include layoutHorizontalScroller;
}

.scrollerWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.3rem;
  max-width: 100%;

  .scrollerTitle {
    text-transform: capitalize;
    @include textBig;

    @include bp($bp-medium) {
      @include textSuperBig;
    }
  }

  .decorImage {
    max-width: 25.4rem;
    height: 3.6rem;
  }
}

.newsScroller {
  @include bp($bp-big) {
    padding: 0 8.3rem;
  }

  @include bp($bp-super-big) {
    padding: 0 12.2rem;
  }
}
</style>
