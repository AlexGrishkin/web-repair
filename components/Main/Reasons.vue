<template>
  <div :class="$style.reasons">
    <h2 :class="$style.mainText">Почему мы ?</h2>
    <div :class="$style.reasonsItems">
      <div v-for="(item, index) in reasons" :key="item.id" :class="$style.reasonsItem">
        <p :class="$style.reasonsItemCount">0{{ index + 1 }}</p>
        <div :class="$style.reasonsItemText">
          <p :class="$style.reasonsItemTextTitle">{{ item.title }}</p>
          <p :class="$style.reasonsItemTextDescription">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  reasons: {
    type: Array,
    default: () => {},
  },
});
</script>

<style scoped lang="scss" module>
.reasons {
  position: relative;
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

  .reasonsItems {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    max-width: 76.8rem;
    margin-left: auto;
    margin-right: auto;

    .reasonsItem {
      width: fit-content;
      color: $darkWhite;
      display: flex;
      align-items: start;
      justify-content: center;
      gap: 3.2rem;
      padding: 2.4rem 0;
      border-bottom: 1px dashed $darkWhite;

      @include bp($bp-medium) {
        gap: 9rem;
        padding: 3.2rem 0;
      }

      .reasonsItemText {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        .reasonsItemTextDescription {
          color: $darkWhite;

          @include textMediumBig;

          @include bp($bp-medium) {
            @include textMediumBigLarge;
          }
        }
      }

      .reasonsItemCount,
      .reasonsItemTextTitle {
        font-family: $headers;
        color: $darkWhite;

        @include textBig;

        @include bp($bp-medium) {
          @include textBigXL;
        }
      }
    }
  }
}

.reasons::before {
  content: '';
  top: -2px;
  left: 0;
  z-index: -2;
  position: absolute;
  background-image: linear-gradient(180deg, $darkWhite 0%, #121212 54.33%);
  background-clip: padding-box;
  width: 100%;
  height: calc(100% + 4px);
}

.reasons::after {
  content: '';
  top: -160px;
  left: 0;
  z-index: -1;
  position: absolute;
  background-image: url('/gradient.webp');
  background-clip: padding-box;
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: 70%;
}
</style>
