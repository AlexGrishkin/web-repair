<template>
  <div id="questions" ref="questionRef" :class="$style.faq">
    <div>
      <h2 :class="$style.mainText" data-animate>{{ title }}</h2>
      <p :class="$style.mainTextSubtitle" data-animate>{{ subTitle }}</p>
    </div>
    <div :class="$style.faqItemsWrapper">
      <div v-for="(item, index) in items" :key="index" :class="$style.faqItem" data-animate>
        <button :class="$style.faqHeader" @click="toggle(index)">
          <span :class="$style.faqQuestion">{{ item.question }}</span>
          <span :class="$style.faqIcon">{{ activeIndex === index ? '−' : '+' }}</span>
        </button>
        <transition name="accordion">
          <div v-show="activeIndex === index" :class="$style.faqBody">
            {{ item.answer }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  subTitle: {
    type: String,
    default: '',
  },
});

const activeIndex = ref<number | null>(null);

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const items = [
  {
    question: 'Вы выезжаете на замеры?',
    answer: 'Конечно. Выезд замерщика бесплатно',
  },
  {
    question: 'Ваша компания работает официально?',
    answer: 'Да, мы предоставляем все необходимые документы.',
  },
  {
    question: 'Вы работаете только со своими материалами?',
    answer: 'Мы можем работать и с вашими материалами, но рекомендуем наши.',
  },
  {
    question: 'А если вы нарушите сроки?',
    answer: 'Мы не нарушаем сроки, а в случае форс-мажора всё согласовываем.',
  },
];

const questionRef = ref(null);

onMounted(async () => {
  // уважение к людям с reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const root = questionRef.value;
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
.faq {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  z-index: 1;

  @include layoutHorizontal;

  @include bp($bp-small) {
    gap: 6rem;
  }

  @include bp($bp-medium) {
    gap: 9rem;
  }
}

.faq::before {
  content: '';
  top: 0;
  left: 0;
  z-index: -1;
  position: absolute;
  border-radius: $borderSection;
  background-color: $mainBlack;
  width: 100%;
  height: 100%;
}

.faq::after {
  content: '';
  top: -300px;
  left: 0;
  z-index: -2;
  position: absolute;
  background-image: url('/gradient.webp');
  background-clip: padding-box;
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: 100%;
}

.faqItemsWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mainText {
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

.mainTextSubtitle {
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

.faqItem {
  width: 100%;
  max-width: 68.8rem;
  border-bottom: 1px solid $darkOrange;
  padding: 2.4rem 0;
}

.faqHeader {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4rem;
  justify-content: space-between;
  gap: 1.4rem;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}

.faqQuestion {
  color: $darkWhite;
  text-align: start;

  @include textBig;
}

.faqIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid $darkOrange;
  width: 4rem;
  height: 4rem;
  font-size: 2.8rem;
  color: #ff6600;
}

.faqBody {
  margin-top: 1.2rem;
  color: $darkWhite;
  font-size: 0.9rem;
  line-height: 1.4;

  @include textMediumBigLarge;
}

:global(.accordion-enter-active),
:global(.accordion-leave-active) {
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
}

:global(.accordion-enter-from),
:global(.accordion-leave-to) {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

:global(.accordion-enter-to),
:global(.accordion-leave-from) {
  max-height: 300px;
  opacity: 1;
}
</style>
