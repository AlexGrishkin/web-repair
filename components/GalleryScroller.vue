<template>
  <div :class="[$style.scrollerWrapper]">
    <h2 :class="$style.scrollerTitle">Фотогаллерея</h2>
    <img :class="$style.decorImage" src="/decorateImg.svg" alt="Декоративная картинка" />
    <Scroller
      name="gallery"
      :custom-options="{
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
      }"
      :nav-styles="{
        prev: { left: '15%' },
        next: { right: '15%' },
      }"
    >
      <template v-if="gallery && gallery.length">
        <swiper-slide v-for="img in gallery" :key="img.id">
          <nuxt-img :class="$style.galleryImg" :src="img.pictureUrl" />
        </swiper-slide>
      </template>
    </Scroller>
  </div>
</template>

<script setup lang="ts">
import Scroller from '~/components/common/Scroller.vue';
import { SwiperSlide } from 'swiper/vue';

defineProps({
  gallery: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped lang="scss" module>
.scrollerWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.3rem;
  max-width: 100vw;

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

  .galleryImg {
    width: 100%;
    max-width: 79rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }
}

:global(.swiper) {
  padding-right: 0;
}

:global(.swiper-slide) {
  display: flex;
  justify-content: center;
  max-height: 16.4rem;
  max-width: 30rem !important;

  @include bp($bp-small) {
    max-height: 26.4rem;
    max-width: 40rem !important;
  }

  @include bp($bp-medium) {
    max-height: 30.4rem;
    max-width: 50rem !important;
  }

  @include bp($bp-medium-big) {
    max-height: 39.4rem;
    max-width: 79rem !important;
  }
}

:global(.swiper-slide:not(.swiper-slide-active))::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 1;
  pointer-events: none;
}
</style>
