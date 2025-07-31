<template>
  <div :class="$style.mainBanner">
    <nuxt-img src="/Banner.webp" :class="$style.mainBannerImg" alt="Фото церкви" />
    <div :class="$style.mainBannerText">
      <p :class="$style.mainText">Ремонт «под ключ»</p>
      <p :class="$style.guarantee">
        за 20 дней <br />
        с гарантией 5 лет
      </p>
      <p :class="$style.goodPrices">по самым приятным ценам в городе</p>
      <BaseButton type="banner" text="Выбрать тариф" :class="$style.bannerButton" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import BaseButton from '~/components/UI/BaseButton.vue';

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
  z-index: 1;

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

  .mainText {
    font-family: $headers;
    color: $darkWhite;
    text-transform: uppercase;
    z-index: 2;
    margin-bottom: 4rem;
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

  .guarantee {
    z-index: 2;
    font-family: $headers;
    color: $darkWhite;
    margin-bottom: 1.6rem;
    @include textBig;

    @include bp($bp-small) {
      @include textBigXL;
    }

    @include bp($bp-medium) {
      @include textSuperBigSmall;
    }

    @include bp($bp-big) {
      @include textSuperBigLarge;
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

  .bannerButton {
    margin-top: 4.8rem;
    max-width: 15.7rem;

    @include bp($bp-small) {
      max-width: 24rem;
    }
  }
}
</style>
