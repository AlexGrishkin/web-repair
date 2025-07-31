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
  { quantity: 900, text: 'проектов в работе одновременно', id: 5 },
];
</script>

<style scoped lang="scss" module>
.about {
  z-index: 3;
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
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
  margin-top: 62px;
}

.aboutCard:nth-child(even) {
  margin-top: 40px;
}
</style>
