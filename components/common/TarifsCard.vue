<template>
  <div :class="[$style.tarifCardWrapper, { [$style.tarifFlex]: isFlex }]">
    <div :class="$style.cardImageWrapper">
      <img :src="tarifData.image" :class="$style.cardImage" />
    </div>
    <div :class="$style.textWrapper">
      <p :class="$style.cardTitle">{{ tarifData.title }}</p>
      <p :class="$style.cardPrice">{{ tarifData.price.toLocaleString() }} ₽/м</p>
      <div :class="$style.cardDescriptionWrapper">
        <p :class="$style.cardDescription">Тариф включает:</p>
        <div
          v-for="(text, index) in tarifData.description"
          :key="index"
          :class="$style.itemWrapper"
        >
          <img src="/tarifs/pointer.svg" />
          <p :class="$style.cardDescription">
            {{ text }}
          </p>
        </div>
      </div>
      <Button
        button-text="Подробнее"
        :class="$style.cardButton"
        @click="$emit('details', tarifData)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '~/components/UI/Button.vue';
defineProps({
  tarifData: {
    type: Object,
    required: true,
  },
  isFlex: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['details']);
</script>

<style scoped module lang="scss">
.tarifCardWrapper {
  width: 100%;
  margin-bottom: 0.3rem;
  background-color: $darkWhite;
  border-radius: $borderCards;

  @include textMediumSemiBold;
}

.cardImageWrapper {
  width: 100%;
  padding: 0.5rem;
  position: relative;
  border-radius: $borderCards;
  overflow: hidden;

  .cardImage {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .cardData {
    text-transform: lowercase;
    position: absolute;
    left: 0;
    top: 2rem;
    padding: 0.4rem 1.1rem;
    background-color: $darkRed;
    color: $white;
    font-weight: normal;
  }
}

.textWrapper {
  padding: 1.8rem 1.5rem;

  @include bp($bp-super-big) {
    padding: 2.1rem 2.5rem;
  }
}

.cardTitle {
  color: $mainBlack;
  font-family: $headers;
  text-align: center;
  margin-bottom: 2.4rem;
  @include textMedium;

  @include bp($bp-big) {
    @include textMediumBigLarge;
  }

  @include bp($bp-super-big) {
    @include textBigXL;
  }
}

.cardPrice {
  color: $mainBlack;
  text-align: center;
  margin-bottom: 1.6rem;

  @include textMini;

  @include bp($bp-small) {
    @include textMediumBig;
  }

  @include bp($bp-big) {
    @include textMediumBigLarge;
  }
}

.cardTitleLine {
  width: 100%;
  height: 1px;
  background-color: $darkRed;
}

.cardDescriptionWrapper {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.itemWrapper {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.cardDescription {
  color: $mainBlack;
  @include textMini;

  @include bp($bp-super-big) {
    @include textMediumBig;
  }
}

.cardButton {
  margin-top: 2.4rem;
}

.tarifFlex {
  flex: 1 1 calc(20% - 2rem);
  max-width: calc(20% - 2rem);

  @include bp($bp-super-big) {
    flex: 1 1 calc(20% - 2.8rem);
    max-width: calc(20% - 2.8rem);
  }
}
</style>
