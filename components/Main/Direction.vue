<template>
  <div :class="$style.direction">
    <h2 :class="$style.mainText">{{ title }}</h2>
    <div :class="$style.directionItems">
      <div v-for="item in description" :key="item.id" :class="$style.directionItem">
        <img src="/DirectionPoint.png" :class="$style.image" />
        <p :class="$style.description">{{ item.text }}</p>
      </div>
    </div>
    <div :class="$style.additionally">
      <p :class="$style.additionallyTitle">Дополнительно:</p>
      <ul :class="$style.additionallyList">
        <li v-for="(item, i) in additionally" :key="i" :class="$style.additionallyListItem">
          {{ item.text }}
        </li>
      </ul>
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
  additionally: {
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
  background-color: $darkWhite;
  @include layoutHorizontal;

  @include bp($bp-small) {
    gap: 6rem;
  }

  @include bp($bp-medium) {
    gap: 9rem;
  }

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
      padding: 1.2rem 0;

      @include bp($bp-small) {
        gap: 9rem;
        padding: 2rem 0;
      }

      .image {
        object-fit: contain;
        height: 40px;

        @include bp($bp-small) {
          height: 68px;
        }
      }
    }
  }
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

.description {
  color: $mainBlack;
  @include textMediumBigLarge;
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  max-width: 35.5rem;

  @include bp($bp-medium-big) {
    @include textBig;
    max-width: 40.5rem;
  }

  @include bp($bp-super-big) {
    @include textBigXL;
  }
}

.additionally {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .additionallyTitle {
    @include textBigBold;
  }

  .additionallyList {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 57rem;

    .additionallyListItem {
      margin-left: 20px;
      color: $mainBlack;
      font-weight: 200;
      @include textMediumBigLarge;
    }
  }
}
</style>
