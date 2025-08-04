<template>
  <div :class="$style.direction">
    <h2 :class="$style.mainText">{{ title }}</h2>
    <div :class="$style.directionItems">
      <div v-for="item in description" :key="item.id" :class="$style.directionItem">
        <img src="/DirectionPoint.png" />
        <p :class="$style.description">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
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
.direction {
  z-index: 4;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: $darkWhite;
  @include layoutHorizontal;

  .directionItems {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    @include bp($bp-small) {
      gap: 2.4rem;
    }

    @include bp($bp-medium) {
      gap: 3.2rem;
    }

    .directionItem {
      display: flex;
      align-items: center;
      gap: 2rem;

      @include bp($bp-small) {
        gap: 9rem;
      }
    }
  }
}
.mainText {
  font-family: $headers;
  color: $mainBlack;
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
  color: $mainBlack;
  @include textMedium;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  max-width: 40.5rem;

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
</style>
