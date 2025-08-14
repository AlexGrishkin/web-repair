<template>
  <div :class="$style.stepWrapper">
    <div :class="[$style.textWrapper, { [$style.textWrapperOdd]: !(count % 2) }]">
      <p :class="$style.title">{{ title }}</p>
      <p :class="$style.description">{{ description }}</p>
    </div>
    <div :class="$style.count">{{ count }}</div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  count: {
    type: Number,
  },
});
</script>

<style scoped lang="scss" module>
.stepWrapper {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.9rem;
  grid-auto-flow: column;

  align-items: center;

  @include bp($bp-small) {
    gap: 4rem;
  }

  @include bp($bp-medium) {
    grid-template-columns: 1fr auto 1fr;
  }
}

.textWrapper {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 36.8rem;
  font-size: 20px;
  grid-column: 2 / span 1;

  @include bp($bp-medium) {
    grid-column: 1 / span 1;
    justify-self: end;
    text-align: end;
  }

  .title {
    @include textMiniBold;

    @include bp($bp-small) {
      @include textMediumBold;
    }

    @include bp($bp-medium) {
      @include textMediumBigLarge;
      font-weight: bold;
    }

    @include bp($bp-super-big) {
      @include textBigXL;
      font-weight: bold;
    }
  }

  .description {
    @include textMiniSemiBold;

    @include bp($bp-medium) {
      @include textMediumSemiBold;
    }

    @include bp($bp-super-big) {
      @include textMediumBigLarge;
      font-weight: 600;
    }
  }
}

.count {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $mainBlack;
  color: $darkWhite;
  border-radius: 50%;
  font-family: $headers;
  font-size: 20px;
  grid-column: 1 / span 1;
  align-self: center;
  width: 7rem;
  height: 7rem;

  @include textSuperBigSmall;

  @include bp($bp-small) {
    width: 9rem;
    height: 9rem;
    @include textSuperBigMedium;
  }

  @include bp($bp-medium) {
    width: 12rem;
    height: 12rem;
    @include textSuperBigXXL;
    grid-column: 2 / span 1;
  }
}

.textWrapperOdd {
  justify-self: start;
  text-align: start;
  grid-column: 2 / span 1;

  @include bp($bp-medium) {
    grid-column: 3 / span 1;
  }
}
</style>
