<template>
  <div :class="$style.about">
    <div>
      <h2 :class="$style.mainText">{{ title }}</h2>
      <p :class="$style.description">{{ description }}</p>
    </div>
    <div :class="$style.cardsWrapper">
      <AboutCard
        v-for="(card, index) in data"
        :key="card.id"
        :position="index"
        :quantity="card.quantity"
        :text="card.text"
        :class="$style.aboutCard"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import AboutCard from '~/components/common/AboutCard.vue';

defineProps({
  title: {
    type: String,
    default: 'О нас',
  },
  description: {
    type: String,
    default: 'Мы ремонтируем квартиры',
  },
});

const data = [
  { quantity: 900, text: 'проектов в работе одновременно', id: 1 },
  { quantity: 900, text: 'проектов в работе одновременно', id: 2 },
  { quantity: 900, text: 'проектов в работе одновременно', id: 3 },
  { quantity: 900, text: 'проектов в работе одновременно', id: 4 },
];
</script>

<style scoped lang="scss" module>
.about {
  z-index: 4;
  position: relative;
  @include layoutHorizontal;
}

.about::before {
  content: '';
  top: 0;
  left: 0;
  z-index: -2;
  position: absolute;
  background-image: linear-gradient(180deg, #2c2d30 0%, $darkWhite 68.27%);
  background-clip: padding-box;
  width: 100%;
  height: calc(100% + 4px);
}

.about::after {
  content: '';
  top: -45px;
  left: 0;
  z-index: -1;
  position: absolute;
  background-image: url('/gradient.webp');
  background-clip: padding-box;
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: 125%;
}

.mainText {
  font-family: $headers;
  color: $darkWhite;
  text-transform: uppercase;
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

.description {
  font-family: $headers;
  color: $darkWhite;
  @include textMedium;

  @include bp($bp-medium) {
    @include textMediumBigLarge;
  }

  @include bp($bp-medium-big) {
    @include textBig;
  }

  @include bp($bp-super-big) {
    @include textBigXL;
  }
}

.cardsWrapper {
  display: grid;
  grid-template-columns: repeat(2, 13.3rem);
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  margin-top: 62px;

  @include bp($bp-small) {
    grid-template-columns: repeat(auto-fit, 13rem);
  }

  @include bp($bp-medium) {
    grid-template-columns: repeat(auto-fit, 18.9rem);
    gap: 2.4rem;
  }

  @include bp($bp-medium-big) {
    grid-template-columns: repeat(auto-fit, 22.3rem);
    gap: 3rem;
  }

  @include bp($bp-super-big) {
    grid-template-columns: repeat(auto-fit, 26.2rem);
  }
}

.aboutCard:nth-child(even) {
  margin-top: 40px;
}

.aboutCard:nth-child(odd) {
  margin-bottom: 40px;
}
</style>
