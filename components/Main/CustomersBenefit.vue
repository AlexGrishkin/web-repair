<template>
  <div :class="$style.direction">
    <div>
      <h2 :class="$style.mainText">{{ title }}</h2>
      <p :class="$style.mainTextSubtitle">{{ subTitle }}</p>
    </div>
    <div :class="$style.directionItems">
      <div v-for="item in description" :key="item.id" :class="$style.directionItem">
        <img :src="item.image" :class="$style.image" />
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
.direction {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  z-index: 1;
  padding-top: 40px;
  padding-bottom: 40px;
  @include layoutHorizontal;

  @include bp($bp-small) {
    gap: 6rem;
  }

  @include bp($bp-medium) {
    gap: 9rem;
  }

  .directionItems {
    display: grid;
    flex-direction: column;
    gap: 1.2rem;

    @include bp($bp-small) {
      gap: 2.4rem;
    }

    @include bp($bp-medium) {
      grid-template-columns: repeat(2, 40rem);
      column-gap: 3.2rem;
      row-gap: 1.6rem;
    }

    @include bp($bp-medium-big) {
      column-gap: 11.8rem;
    }

    .directionItem {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 1.2rem 0;

      @include bp($bp-medium) {
        gap: 3.2rem;
        padding: 2rem 0;
      }

      .image {
        object-fit: contain;
        height: 38px;

        @include bp($bp-medium) {
          height: 46px;
        }
      }
    }
  }
}
.mainText {
  font-family: $headers;
  color: $darkWhite;
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

.description {
  color: $darkWhite;
  @include textMediumBigLarge;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  max-width: 35.5rem;

  @include bp($bp-medium-big) {
    @include textBig;
    max-width: 40.5rem;
  }
}
</style>
