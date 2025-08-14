<template>
  <div ref="customerRef" :class="$style.benefit">
    <div>
      <h2 :class="$style.mainText" data-animate>{{ title }}</h2>
      <p :class="$style.mainTextSubtitle" data-animate>{{ subTitle }}</p>
    </div>
    <div :class="$style.benefitItems">
      <div v-for="item in description" :key="item.id" :class="$style.benefitItem" data-animate>
        <img :src="item.image" :class="$style.image" />
        <p :class="$style.description">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

const customerRef = ref(null);

onMounted(async () => {
  // уважение к людям с reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const root = customerRef.value;
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
.benefit {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  z-index: 1;
  padding-top: 40px;
  padding-bottom: 40px;
  @include layoutHorizontal;

  @include bp($bp-small) {
    gap: 6rem;
  }

  @include bp($bp-medium) {
    gap: 9rem;
  }

  .benefitItems {
    display: grid;
    flex-direction: column;
    gap: 1.2rem;

    @include bp($bp-small) {
      grid-template-columns: repeat(auto-fill, 37rem);
      gap: 2.4rem;
    }

    @include bp($bp-medium) {
      grid-template-columns: repeat(2, 40rem);
      column-gap: 3.2rem;
      row-gap: 1.6rem;
    }

    @include bp($bp-medium-big) {
      column-gap: 11.8rem;
    }

    .benefitItem {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 1.2rem 0;

      @include bp($bp-medium) {
        gap: 3.2rem;
        padding: 2rem 0;
      }

      .image {
        object-fit: contain;
        height: 38px;

        @include bp($bp-medium) {
          height: 46px;
        }
      }
    }
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
</style>
