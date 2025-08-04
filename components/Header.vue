<template>
  <div :class="$style.headerWrapper">
    <nuxt-link :class="$style.logoWrapper" to="/">
      <img v-if="data.logo" :class="$style.logoImg" :src="data.logo" alt="Логотип" />
    </nuxt-link>

    <nav :class="$style.navigationWrapper">
      <component
        :is="isLink(link)"
        v-for="link in NAVIGATION_CONFIG"
        :key="link.id"
        :class="$style.navigationLink"
        :to="link.to"
        href="#"
        data-allow-mismatch
      >
        {{ link.title }}
      </component>
    </nav>

    <div :class="$style.contactsWrapper">
      <p :class="$style.phone">+7 (343) 311-03-16</p>
      <p :class="$style.timeWork">ежедневно с 9:00 до 21:00</p>
    </div>

    <!-- Burger Icon -->
    <button :class="$style.burgerIcon" @click="toggleMobileMenu">
      <span />
      <span />
      <span />
    </button>

    <div v-show="true" :class="[$style.mobileMenu, isMobileMenuOpen ? $style.open : $style.closed]">
      <ButtonClose :class="$style.buttonClose" @click="handleClose" />
      <img v-if="data.logo" :class="$style.mobileLogoImg" src="/BigLogo.png" alt="Логотип" />
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
import ButtonClose from '~/components/UI/ButtonClose.vue';

const data = {
  logo: '/logo.webp',
};

const NAVIGATION_CONFIG = [
  {
    title: 'Тарифы',
    id: '1',
  },
  {
    title: 'Портфолио',
    id: '2',
  },
  {
    title: 'Контакты',
    id: '3',
  },
];

const isLink = (nav) => {
  if (nav?.to) {
    return defineNuxtLink({});
  } else {
    return 'a';
  }
};

const isMobileMenuOpen = ref(false);

const handleClose = () => {
  isMobileMenuOpen.value = false;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style module scoped lang="scss">
.headerWrapper {
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 4rem;
  align-items: center;
  z-index: 10;
  background-color: $headerColor;
  backdrop-filter: blur(15px);
  top: 0;
  @include layoutHorizontal;
}

.logoWrapper {
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 1.6rem;

  .logoImg {
    height: 100%;
    object-fit: contain;
  }
}

.navigationWrapper {
  padding-top: 20px;
  padding-bottom: 20px;
  display: none;
  gap: 3rem;

  @include bp($bp-medium) {
    display: flex;
  }

  .navigationLink {
    color: $darkWhite;
    width: min-content;
    text-wrap: balance;
    transition: $transitionColor;
    @include textMediumBigSemiBold;

    @include bp($bp-medium-big) {
      text-wrap: nowrap;
    }

    &:hover {
      color: $darkOrange;
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
    background-color: $darkWhite;
  }

  @include bp($bp-medium) {
    display: none;
  }
}

.contactsWrapper {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-self: end;

  @include bp($bp-medium) {
    justify-self: start;
  }

  .phone {
    font-family: $headers;
    color: $darkWhite;
    @include textSuperMini;

    @include bp($bp-medium) {
      @include textMedium;
    }

    @include bp($bp-super-big) {
      @include textMediumBigLarge;
    }
  }

  .timeWork {
    color: $darkWhite;
    @include textSuperMini;
  }
}

.mobileMenu {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 28.4rem;
  background-color: $mainBlack;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 99;

  @include bp($bp-medium) {
    display: none;
  }

  .mobileLink {
    color: $darkWhite;
    @include textMediumBigSemiBold;

    &:hover {
      color: $darkOrange;
    }
  }

  .mobileLogoImg {
    object-fit: contain;
    width: 16.6rem;
    height: 13.3rem;
    margin-left: auto;
    margin-right: auto;
  }
}

.buttonClose {
  margin-left: auto;
}

.open {
  transform: translateX(0);
}

.closed {
  transform: translateX(100%);
}
</style>
