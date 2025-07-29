<template>
  <div :class="$style.headerWrapper">
    <nuxt-link :class="$style.logoWrapper" to="/">
      <nuxt-img v-if="data.logo" :class="$style.logoImg" :src="data.logo" />
      <p :class="$style.organisationName">{{ organisationName }}</p>
    </nuxt-link>

    <div :class="$style.navigationWrapper">
      <nuxt-link
        v-for="link in NAVIGATION_CONFIG"
        :key="link.id"
        :class="$style.navigationLink"
        :to="link.to"
        data-allow-mismatch
      >
        {{ link.title }}
      </nuxt-link>
    </div>

    <!-- Burger Icon -->
    <button :class="$style.burgerIcon" @click="toggleMobileMenu">
      <span />
      <span />
      <span />
    </button>

    <div v-show="true" :class="[$style.mobileMenu, isMobileMenuOpen ? $style.open : $style.closed]">
      <img :class="$style.decorImage" src="/decorateImg.svg" alt="Декоративная картинка" />
      <nuxt-link
        v-for="link in NAVIGATION_CONFIG"
        :key="link.id"
        :class="$style.mobileLink"
        :to="link.to"
        @click="isMobileMenuOpen = false"
      >
        {{ link.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = {
  logo: '/logo.png',
  name: 'Свято-Никольский храм на Красной слободе',
};

const NAVIGATION_CONFIG = [
  {
    to: '/about',
    title: 'О\u00A0храме',
    id: '1',
  },
  {
    to: '/events',
    title: 'Расписание богослужений',
    id: '2',
  },
  {
    to: '/news',
    title: 'Новости',
    id: '3',
  },
  {
    to: '/priests',
    title: 'Служители',
    id: '4',
  },
];

const organisationName = computed(() => {
  return data.name && data.name.length ? data.name : 'Свято-Никольский храм на Красной слободе';
});

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style module scoped lang="scss">
.headerWrapper {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background-color: $white;
  top: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid $grey;
  @include layoutHorizontal;
}

.logoWrapper {
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 1.6rem;

  .logoImg {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
  }
}

.organisationName {
  max-width: 22.8rem;
  color: $darkRed;
  @include textMediumBigBold;
}

.navigationWrapper {
  display: none;
  gap: 3rem;

  @include bp($bp-medium) {
    display: flex;
  }

  .navigationLink {
    color: $black-blue;
    width: min-content;
    text-wrap: balance;
    @include textMediumBigSemiBold;

    @include bp($bp-medium-big) {
      text-wrap: nowrap;
    }

    &:hover {
      color: $darkRed;
    }
  }
}

.burgerIcon {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background-color: $black-blue;
  }

  @include bp($bp-medium) {
    display: none;
  }
}

.mobileMenu {
  position: fixed;
  top: 91px;
  right: 0;
  height: 40vh;
  width: 100%;
  background-color: $white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 99;

  @include bp($bp-small) {
    max-width: 41.4rem;
  }

  .mobileLink {
    color: $black-blue;
    @include textMediumBigSemiBold;

    &:hover {
      color: $darkRed;
    }
  }

  @include bp($bp-medium) {
    display: none;
  }
}

.open {
  transform: translateX(0);
}

.closed {
  transform: translateX(100%);
}

.decorImage {
  margin-left: auto;
  margin-right: auto;
  max-width: 25.4rem;
  height: 3.6rem;
}
</style>
