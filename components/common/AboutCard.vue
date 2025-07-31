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
  padding: 24px;
  background-color: $darkWhite;
  color: $darkOrange;
  height: 21.4rem;
  border-radius: 2rem;
  width: 26.2rem;
}

.cardWrapperEven {
  background-color: $mainBlack;
  color: $darkWhite;
}

.quantity {
  font-family: $headers;
  color: inherit;
  @include textSuperBigXL;
}
.line {
  border: 1px solid $darkOrange;
}

.lineEven {
  border: 1px solid $darkWhite;
}

.text {
  color: inherit;
  @include textBig;
}
</style>
