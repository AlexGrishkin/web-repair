<template>
  <div id="steps" ref="stepsRef" :class="$style.repairSteps">
    <div :class="$style.titleWrapper">
      <h2 :class="$style.mainText" data-animate>{{ title }}</h2>
      <p :class="$style.mainTextSubtitle" data-animate>{{ subTitle }}</p>
    </div>
    <div :class="$style.stepsWrapper">
      <Step
        v-for="(item, index) in description"
        :key="index"
        :title="item.title"
        :description="item.description"
        :count="index + 1"
        :class="$style.stepsItem"
        data-animate
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import Step from '~/components/common/Step.vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  subTitle: {
    type: String,
    default: '',
  },
  description: {
    type: Array,
    default: () => [],
  },
});

const stepsRef = ref(null);

onMounted(async () => {
  // уважение к людям с reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const root = stepsRef.value;
  if (!root) return;

  // стартово спрячем, чтобы не мигало до инициализации
  root.classList.add('is-animatable');

  // безопасный динамический импорт на клиенте
  const gsapMod = await import('gsap');
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
  const gsap = gsapMod.default || gsapMod;
  gsap.registerPlugin(ScrollTrigger);

  const items = root.querySelectorAll('[data-animate]');
  if (!items.length) return;

  gsap.from(items, {
    y: 24,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.2, // по очереди
    delay: 0.3, // общая задержка перед стартом
    clearProps: 'all', // очистить inline-стили после анимации
    scrollTrigger: {
      trigger: root,
      start: 'top 70%', // когда верх баннера дойдёт до 70% окна
      toggleActions: 'play none none none',
      once: true, // анимируем один раз
    },
  });
});
</script>

<style scoped lang="scss" module>
.repairSteps {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  z-index: 2;
  padding-top: 40px;
  padding-bottom: 40px;
  margin: 4rem 1.5rem;
  background-color: $darkWhite;
  border-radius: $borderSection;

  @include bp($bp-small) {
    gap: 6rem;
  }

  @include bp($bp-medium) {
    gap: 9rem;
  }
}

.titleWrapper {
  @include layoutHorizontal;
}

.mainText {
  font-family: $headers;
  color: $mainBlack;
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
  font-family: $headers;
  color: $darkOrange;
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

.stepsWrapper {
  display: flex;
  flex-direction: column;
  gap: 7rem;
  @include layoutHorizontal;

  @include bp($bp-medium) {
    gap: 9rem;
  }
}

.stepsItem:not(:last-child)::after {
  position: absolute;
  color: $mainBlack;
  background-color: $mainBlack;
  bottom: -8rem;
  left: 3.5rem;
  content: '';
  width: 0.3rem;
  height: 12rem;
  z-index: -1;

  @include bp($bp-small) {
    left: 4.5rem;
  }

  @include bp($bp-medium) {
    transform: translateX(-50%);
    left: 50%;
    bottom: -9rem;
    height: 9rem;
  }
}
</style>
