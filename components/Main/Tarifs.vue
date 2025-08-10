<template>
  <div :class="$style.tarifs">
    <div :class="$style.titleWrapper">
      <h2 :class="$style.mainText">{{ title }}</h2>
      <p :class="$style.mainTextSubtitle">{{ subTitle }}</p>
    </div>
    <Scroller
      name="news"
      :class="$style.newsScroller"
      :custom-options="swiperOptions"
      :nav-styles="{
        prev: { left: '0rem' },
        next: { right: '0rem' },
      }"
    >
      <template v-if="tarifs?.length">
        <swiper-slide v-for="tarif in tarifs" :key="tarif.id">
          <TarifsCard :tarif-data="tarif" />
        </swiper-slide>
      </template>
    </Scroller>
  </div>
</template>

<script setup lang="ts">
import Scroller from '~/components/common/Scroller.vue';
import { SwiperSlide } from 'swiper/vue';
import TarifsCard from '~/components/common/TarifsCard.vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  subTitle: {
    type: String,
    default: '',
  },
  tarifs: {
    type: Array,
    required: true,
  },
});

const swiperOptions = {
  slidesPerView: 1.05,
  spaceBetween: 20,
  breakpoints: {
    414: {
      slidesPerView: 2.5,
      spaceBetween: 12,
    },
    600: {
      slidesPerView: 2.8,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 5,
      spaceBetween: 28,
    },
  },
};
</script>

<style scoped lang="scss" module>
.tarifs {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  z-index: 1;
  padding-top: 40px;
  padding-bottom: 40px;
  @include layoutHorizontalScroller;

  @include bp($bp-small) {
    gap: 6rem;
  }

  @include bp($bp-medium) {
    gap: 9rem;
  }
}

.tarifs::after {
  content: '';
  top: -160px;
  left: 0;
  z-index: -1;
  position: absolute;
  background-image: url('/gradient.webp');
  background-clip: padding-box;
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: 100%;
}

.titleWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @include bp($bp-medium) {
    gap: 4rem;
  }
}
.mainText {
  font-family: $headers;
  color: $darkWhite;
  text-transform: uppercase;
  @include textSuperBigSmall;

  @include bp($bp-medium) {
    @include textSuperBigMedium;
  }

  @include bp($bp-medium-big) {
    text-wrap: balance;
    @include textSuperBigXXL;
  }

  @include bp($bp-super-big) {
    @include textSuperBigXXXL;
  }
}

.mainTextSubtitle {
  color: $darkWhite;
  text-align: center;
  @include textMediumBigLarge;

  @include bp($bp-super-big) {
    @include textBig;
  }
}

.description {
  color: $darkWhite;
  @include textMediumBigLarge;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  max-width: 35.5rem;

  @include bp($bp-medium-big) {
    @include textBig;
    max-width: 40.5rem;
  }
}

.newsScroller {
  @include bp($bp-big) {
    max-width: 111.3rem;
  }

  @include bp($bp-super-big) {
    max-width: 131.2rem;
  }
}
</style>
