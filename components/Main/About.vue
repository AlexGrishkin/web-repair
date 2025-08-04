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
  grid-template-columns: repeat(auto-fit, 13.3rem);
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  margin-top: 62px;

  @include bp($bp-medium) {
    grid-template-columns: repeat(auto-fit, 18.9rem);
    gap: 2.4rem;
  }

  @include bp($bp-medium-big) {
    grid-template-columns: repeat(auto-fit, 22.3rem);
    gap: 4rem;
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
