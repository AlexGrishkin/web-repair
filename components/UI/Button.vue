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
  padding: 1.6rem 6rem;
  background-color: $darkRed;
  color: $white;
  border-radius: 0.5rem;
  cursor: pointer;

  @include textMediumBigSemiBold;
}
</style>
