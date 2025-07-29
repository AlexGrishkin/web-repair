<template>
  <div :class="[$style.mainContentWrapper, $style.scrollerWrapperOverlay]">
    <div :class="[$style.scrollerWrapper]">
      <h2 :class="$style.scrollerTitle">Расписание богослужений</h2>
      <img :class="$style.decorImage" src="/decorateImg.svg" alt="Декоративная картинка" />
      <Scroller
        name="events"
        :custom-options="swiperOptions"
        :class="$style.eventsScroller"
        :nav-styles="{
          prev: { left: '0rem' },
          next: { right: '0rem' },
        }"
      >
        <template v-if="grouppedEvents">
          <swiper-slide v-for="(event, data) in grouppedEvents" :key="data">
            <Event :event-data="event" />
          </swiper-slide>
        </template>
      </Scroller>
      <Button button-text="Полное расписание" @on-click-button="goToEventsPage" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Event from '~/components/common/Event.vue';
import Button from '~/components/UI/Button.vue';
import Scroller from '~/components/common/Scroller.vue';
import { SwiperSlide } from 'swiper/vue';

defineProps({
  grouppedEvents: {
    type: Object,
    required: true,
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

const goToEventsPage = () => {
  navigateTo({ path: '/events' });
};
</script>

<style scoped lang="scss" module>
.mainContentWrapper {
  display: flex;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  height: auto;
  padding-top: 5rem;
  padding-bottom: 5rem;

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

.eventsScroller {
  @include bp($bp-big) {
    padding: 0 8.3rem;
  }

  @include bp($bp-super-big) {
    padding: 0 12.2rem;
  }
}

.scrollerWrapperOverlay {
  background-image: url('/overlay.png');
}
</style>
