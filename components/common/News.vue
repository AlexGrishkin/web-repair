<template>
  <div :class="[$style.newsCardWrapper, { [$style.newsFlex]: isFlex }]">
    <div :class="$style.cardImageWrapper">
      <nuxt-link :to="`/news/${newsData.id}`">
        <nuxt-img :src="newsData.pictureUrl" :class="$style.cardImage" />
      </nuxt-link>
      <p v-if="newsData.day && newsData.month && newsData.year" :class="$style.cardData">
        {{ newsData.day }} {{ newsData.month }} {{ newsData.year }}
      </p>
    </div>
    <p :class="$style.cardTitle">{{ newsData.title }}</p>
    <div :class="$style.cardTitleLine" />
    <p :class="$style.cardDescription">{{ newsData.description }}</p>
    <nuxt-link :class="$style.cardReadMore" :to="`/news/${newsData.id}`">Читать далее</nuxt-link>
  </div>
</template>

<script setup lang="ts">
defineProps({
  newsData: {
    type: Object,
    required: true,
  },
  isFlex: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped module lang="scss">
.newsCardWrapper {
  width: 100%;
  margin-bottom: 0.3rem;

  @include textMediumSemiBold;
}

.cardImageWrapper {
  width: 100%;
  height: 18rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  background-color: $grey;

  .cardImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cardData {
    text-transform: lowercase;
    position: absolute;
    left: 0;
    top: 2rem;
    padding: 0.4rem 1.1rem;
    background-color: $darkRed;
    color: $white;
    font-weight: normal;
  }
}

.cardTitle {
  margin-top: 2.2rem;
  margin-bottom: 0.9rem;
  height: min-content;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.cardTitleLine {
  width: 100%;
  height: 1px;
  background-color: $darkRed;
}

.cardDescription {
  margin-top: 1.1rem;
  margin-bottom: 2.2rem;
  font-weight: normal;
  overflow: hidden;
  display: -webkit-box;
  align-self: start;
  text-overflow: ellipsis;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;

  @include textMedium;
}

.cardReadMore {
  color: $darkRed;
  border-bottom: 1px solid $darkRed;
}

.newsFlex {
  flex: 1 1 calc(25% - 2rem);
  max-width: calc(25% - 2rem);
}
</style>
