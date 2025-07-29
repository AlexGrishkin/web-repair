<template>
  <div :class="$style.mainBanner">
    <nuxt-img :src="bannerData.photoUrl" :class="$style.mainBannerImg" alt="Фото церкви" />
    <div :class="$style.mainBannerText">
      <div :class="$style.organisationWrapper">
        <nuxt-img src="/cross1.svg" :class="$style.organisationIcon" alt="иконка крестика" />
        <p :class="$style.organisationName">{{ bannerData.name }}</p>
      </div>
      <p :class="$style.churchName">{{ bannerData.description }}</p>
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

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
    z-index: 1;
    pointer-events: none;
  }

  .mainBannerImg {
    object-fit: cover;
    width: 100%;
    max-height: 93.8rem;
    height: 100%;
  }

  .mainBannerText {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow:
      30px 30px 100px 0 rgba(0, 0, 0, 0.2),
      inset 0 30px 70px 0 rgba(255, 255, 255, 0.3),
      inset 0 0 20px 0 $white;
    padding: 1.5rem 2.2rem;
    max-width: 30.3rem;
    margin-left: 1.5rem;
    margin-top: 1.5rem;

    @include bp($bp-small) {
      max-width: 38.3rem;
      margin-left: 2rem;
      margin-top: 2rem;
    }

    @include bp($bp-medium) {
      padding: 3.1rem 2.7rem;
      max-width: 51.3rem;
      margin-left: 3.2rem;
      margin-top: 3.2rem;
    }

    @include bp($bp-medium-big) {
      padding: 3.3rem 2.7rem;
      max-width: 63.3rem;
      margin-left: 5rem;
      margin-top: 5rem;
    }

    @include bp($bp-big) {
      padding: 4.7rem 2.7rem;
      max-width: 69.9rem;
      margin-left: 7rem;
      margin-top: 7rem;
    }

    @include bp($bp-super-big) {
      max-width: 73.9rem;
      margin-left: 7rem;
      margin-top: 7rem;
    }
  }

  .organisationWrapper {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    @include bp($bp-medium-big) {
      gap: 2.5rem;
    }

    .organisationIcon {
      height: 2.8rem;

      @include bp($bp-medium-big) {
        height: 3.8rem;
      }

      @include bp($bp-big) {
        height: 5rem;
      }
    }

    .organisationName {
      color: $darkRed;
      text-transform: capitalize;
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
  }

  .churchName {
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.2);
    text-transform: uppercase;
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
}
</style>
