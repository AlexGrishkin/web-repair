<template>
  <div :class="$style.mainBanner">
    <nuxt-img src="/Banner.webp" :class="$style.mainBannerImg" alt="Фото церкви" />
    <div :class="$style.mainBannerText">
      <p :class="$style.mainText">Ремонт «под ключ»</p>
      <p :class="$style.guarantee">за 20 дней
        с гарантией 5 лет</p>
      <p :class="$style.goodPrices">по самым приятным ценам в городе</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

interface BannerProps {
  photoUrl: string;
  name: string;
  description: string;
}

defineProps({
  bannerData: {
    type: Object as PropType<BannerProps | null>,
    required: false,
    default: null,
  },
});
</script>

<style module scoped lang="scss">
.mainBanner {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100vh;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $overlayColor;
    z-index: 1;
    pointer-events: none;
  }

  .mainBannerImg {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .mainBannerText {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    border-radius: 15px;
    z-index: 2;
    margin-top: 17rem;
    @include layoutHorizontal;

    @include bp($bp-medium) {
      margin-top: 27rem;
    }
  }

  .mainText{
    font-family: "Prosto One", serif;
    color: $darkWhite;
    text-transform: uppercase;
    z-index: 2;
    margin-bottom: 4rem;
    @include textBigSemiBold;

    @include bp($bp-medium) {
      @include textSuperBigLargeSemiBold;
    }

    @include bp($bp-medium-big) {
      text-wrap: balance;
      @include textSuperBigMediumSemiBold;
    }

    @include bp($bp-super-big) {
      @include textSuperBigXLSemiBold;
    }
  }

  .guarantee {
    z-index: 2;
    font-family: "Prosto One", serif;
    color: $darkWhite;
    margin-bottom: 1.6rem;
    @include textMediumSemiBold;

    @include bp($bp-medium) {
      @include textBigSemiBold;
    }

    @include bp($bp-medium-big) {
      @include textSuperBigSmallBold;
    }

    @include bp($bp-big) {
      @include textSuperBigBold;
    }
  }

  .goodPrices {
    z-index: 2;
    color: $darkWhite;
    @include textMedium;

    @include bp($bp-super-big) {
      @include textMediumBigLarge;
    }
  }
}
</style>
