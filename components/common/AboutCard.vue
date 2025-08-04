<template>
  <div :class="[$style.cardWrapper, { [$style.cardWrapperEven]: !!(position % 2) }]">
    <p :class="$style.quantity">>{{ quantity }}</p>
    <hr :class="[$style.line, { [$style.lineEven]: !!(position % 2) }]" />
    <p :class="$style.text">{{ text }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  quantity: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  position: {
    type: Number,
  },
});
</script>

<style scoped lang="scss" module>
.cardWrapper {
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding: 16px;
  background-color: $darkWhite;
  color: $darkOrange;
  border-radius: 2rem;

  @include bp($bp-medium) {
    padding: 24px;
  }
}

.cardWrapperEven {
  background-color: $mainBlack;
  color: $darkWhite;
}

.quantity {
  font-family: $headers;
  color: inherit;

  @include textSuperBigSmall;

  @include bp($bp-medium) {
    @include textSuperBigMedium;
  }

  @include bp($bp-medium-big) {
    @include textSuperBigMediumXl;
  }

  @include bp($bp-super-big) {
    @include textSuperBigXL;
  }
}
.line {
  border: 1px solid $darkOrange;
}

.lineEven {
  border: 1px solid $darkWhite;
}

.text {
  color: inherit;
  @include textMini;

  @include bp($bp-medium) {
    @include textMedium;
  }

  @include bp($bp-medium-big) {
    @include textMediumBig;
  }

  @include bp($bp-super-big) {
    @include textBig;
  }
}
</style>
