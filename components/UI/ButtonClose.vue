<template>
  <button
    class="button-close"
    :class="[{ 'button-close_theme_white': white }, `button-close_size_${size}`]"
    type="button"
    aria-label="Закрыть"
  >
    <svg class="button-close__icon icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path
        class="button-close__icon-path icon__path"
        d="M10.5724 10.5715L29.4286 29.4276"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        class="button-close__icon-path icon__path"
        d="M10.5711 29.4269L29.4273 10.5708"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup>
defineProps({
  white: {
    type: Boolean,
    required: false,
    default: false,
  },
  size: {
    type: String,
    required: false,
    default: 'medium',
  },
});
</script>

<style lang="scss" scoped>
.button-close {
  width: min-content;
  border-radius: var(--border-radius-circle);
  transition-timing-function: var(--transition-timing-function);
  transition-duration: var(--transition-duration-hover);
  transition-property: background-color, stroke, color;

  &:not(.button-close_theme_white) {
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background: $darkWhite;

        .button-close__icon-path {
          stroke: $mainBlack;
        }
      }
    }
  }

  &_theme_white {
    @media (hover: hover) and (pointer: fine) {
      &:hover .button-close__icon-path {
        stroke: white;
      }
    }

    .button-close__icon-path {
      stroke: $darkWhite;
    }
  }

  &_size {
    &_small {
      width: 28px;
      height: 28px;
      padding: 4px;
    }

    &_medium {
      width: 36px;
      height: 36px;
      padding: 6px;
    }

    &_large {
      width: 44px;
      height: 44px;
      padding: 10px;
    }
  }

  &__icon {
    fill: none;

    &-path {
      stroke: $darkWhite;
      stroke-width: 2;
    }
  }
}
</style>
