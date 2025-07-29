<template>
  <div v-if="priestData" :class="$style.priestCardWrapper">
    <nuxt-img :class="$style.priestCardAvatar" :src="priestData?.photoUrl" />
    <div :class="$style.priestInfo">
      <p :class="$style.priestName">{{ priestData?.name }}</p>
      <p :class="$style.priestRole">Роль: {{ priestData?.role }}</p>
      <p :class="$style.priestEducation">Образование: {{ priestData?.education }}</p>
      <p :class="$style.priestAge">Возраст: {{ priestData?.age }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  priestData: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss" module>
.priestCardWrapper {
  display: flex;
  align-items: flex-start;
  padding: 1.2rem 2.4rem;
  gap: 1.6rem;
  width: 100%;
  border-radius: 1rem;
  background-color: $white;

  @include bp($bp-small) {
    padding: 1.2rem 4rem;
    gap: 3.2rem;
  }

  @include bp($bp-medium) {
    padding: 2.4rem 5.1rem;
  }

  @include bp($bp-medium-big) {
    padding: 2.7rem 5.1rem;
  }
}

.priestCardAvatar {
  height: auto;
  width: 8rem;
  border-radius: 0.5rem;
  object-fit: cover;

  @include bp($bp-small) {
    width: 15rem;
  }
}

.priestInfo {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @include textMediumBig;

  .priestName {
    font-family:
      Roboto Slab,
      serif;
    text-transform: uppercase;

    @include textMediumBold;

    @include bp($bp-small) {
      @include textMediumBigBold;
    }

    @include bp($bp-medium) {
      @include textBigBold;
    }

    @include bp($bp-super-big) {
      @include textSuperBigSmallBold;
    }
  }

  .priestRole {
    font-family:
      Roboto Slab,
      serif;
    text-transform: uppercase;
    color: $darkRed;

    @include textMediumSemiBold;

    @include bp($bp-small) {
      @include textMediumBigSemiBold;
    }
  }

  .priestEducation {
    font-family:
      Roboto Slab,
      serif;
    @include textMedium;

    @include bp($bp-small) {
      @include textMediumBig;
    }
  }

  .priestAge {
    font-family:
      Roboto Slab,
      serif;
    color: $darkGrey;
  }
}
</style>
