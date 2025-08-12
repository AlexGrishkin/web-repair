<template>
  <div :class="$style.repairSteps">
    <div :class="$style.titleWrapper">
      <h2 :class="$style.mainText">{{ title }}</h2>
      <p :class="$style.mainTextSubtitle">{{ subTitle }}</p>
    </div>
    <div :class="$style.stepsWrapper">
      <Step
        v-for="(item, index) in description"
        :key="index"
        :title="item.title"
        :description="item.description"
        :count="index + 1"
        :class="$style.stepsItem"
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
  left: 2.5rem;
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
