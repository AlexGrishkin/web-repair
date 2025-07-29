<template>
  <div :class="$style.scrollerContainer">
    <swiper
      v-bind="swiperOptions"
      ref="swiperRef"
      :class="[$style.swiper, 'swiper-no-swiping']"
      @swiper="onSwiper"
    >
      <template v-if="slidesLoaded">
        <slot />
      </template>
    </swiper>
    <div
      :class="[$style.swiperButton, 'swiper__button_prev', `swiper__button_prev_${name}`]"
      :style="props.navStyles.prev"
    >
      <ArrowButton />
    </div>
    <div
      :class="[$style.swiperButton, 'swiper__button_next', `swiper__button_next_${name}`]"
      :style="props.navStyles.next"
    >
      <ArrowButton rotate="right" />
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue';
import { Swiper } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ArrowButton from '../UI/ArrowButton.vue';

const modules = [Navigation, Pagination, Scrollbar, A11y];

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  customOptions: {
    type: Object,
    default: () => ({}),
  },
  navStyles: {
    type: Object,
    default: () => ({}),
  },
});

const swiperOptions = {
  modules,
  slidesPerView: '3',
  spaceBetween: 10,
  navigation: {
    nextEl: `.swiper__button_next_${props.name}`,
    prevEl: `.swiper__button_prev_${props.name}`,
  },
  noSwiping: false,
  injectStyles: false,
  ...props.customOptions, // Переопределяем любые поля
};

const swiperRef = ref(null);
const slidesLoaded = ref(false);

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

const update = () => swiperRef.value?.update();

defineExpose({ update });

// до завершения рендеринга свайпер выдавал ошибку слотов и не мог найти слайды
onMounted(() => {
  nextTick(() => {
    slidesLoaded.value = true;
  });
});
</script>

<style lang="scss" module>
.scrollerContainer {
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
}

.swiper {
  width: 100%;
  height: 100%;

  padding-right: 15px;

  @include bp($bp-small) {
    padding-right: 20px;
  }

  @include bp($bp-medium) {
    padding-right: 32px;
  }

  @include bp($bp-medium-big) {
    padding-right: 50px;
  }

  @include bp($bp-big) {
    padding-right: 0;
  }
}

:global(.swiper-wrapper) {
  justify-content: space-between;
}

.swiperButton {
  display: none;
  position: absolute;
  top: calc(50% - 20px);
  z-index: 1;
  width: 40px;
  height: 40px;
  background-color: transparent;
  cursor: pointer;
  place-items: center;

  @include bp($bp-big) {
    display: grid;
  }
}
</style>
