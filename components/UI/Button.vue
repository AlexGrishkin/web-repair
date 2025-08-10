<template>
  <button :class="$style.button" @click="emit('onClickButton')">
    {{ buttonText }}
  </button>
</template>
<script setup lang="ts">
defineProps({
  buttonText: {
    type: String,
    required: true,
    default: '',
  },
});

const emit = defineEmits(['onClickButton']);
</script>

<style scoped lang="scss" module>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 4rem;
  background-color: $darkOrange;
  color: $white;
  border-radius: $borderButtons;
  cursor: pointer;
  width: 100%;

  @include textMiniSemiBold;
}
</style>
