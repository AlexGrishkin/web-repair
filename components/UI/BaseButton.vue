<template>
  <button :class="[$style.baseButton, ...buttonStyle]">
    {{ text }}
    <span :class="$style.arrowWrapper">
      <img src="/arrowRight.svg" alt="Иконка стрелки" :class="$style.arrowIcon" />
    </span>
  </button>
</template>
<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: 'Подробнее',
  },
  type: {
    type: String,
    default: 'cards',
  },
});
const $style = useCssModule();

const buttonStyle = computed(() => {
  return [
    {
      [$style[`_${props.type}`]]: props.type,
    },
  ];
});
</script>

<style scoped lang="scss" module>
.baseButton {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.6rem 1.2rem;
  width: 100%;
  transition: $transitionBgColor, $transitionBorder;

  @include bp($bp-small) {
    padding: 1.2rem 2.4rem;
    gap: 1.7rem;
  }

  &._banner {
    font-family: $headers;
    color: $darkWhite;
    border-radius: $borderButtons;
    border: 1px solid $darkWhite;
    @include textSuperMini;
    justify-content: space-between;

    @include bp($bp-small) {
      @include textMediumBig;
      padding: 1.2rem 1.5rem;
    }

    &:hover {
      background-color: $mainBlack;
      border: 1px solid $mainBlack;

      .arrowIcon {
        transform: rotate(-45deg);
      }
    }
  }
}

.arrowWrapper {
  background-color: $darkOrange;
  padding: 0.6rem 0.3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;

  @include bp($bp-small) {
    padding: 1.2rem 0.6rem;
  }

  .arrowIcon {
    width: 1.1rem;
    height: 0.55rem;
    transition: $transitionTransform;

    @include bp($bp-small) {
      width: 2.2rem;
      height: 1.1rem;
    }
  }
}
</style>
