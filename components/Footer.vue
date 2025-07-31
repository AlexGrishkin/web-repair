<template>
  <div :class="$style.footerWrapper">
    <div :class="$style.footerContentWrapper">
      <div :class="$style.footerData">
        <nuxt-link :class="$style.logoWrapper" to="/">
          <img v-if="data.logo" :class="$style.logoImg" :src="data.logo" alt="Логотип" />
        </nuxt-link>
        <div :class="$style.contactsWrapper">
          <p :class="$style.phone">+7 (343) 311-03-16</p>
          <p :class="$style.timeWork">ежедневно с 9:00 до 21:00</p>
          <p :class="$style.city">г.Тверь</p>
          <p :class="$style.timeWork">ул. Ленина, д. 4</p>
        </div>
        <div :class="$style.socialLinksWrapper">
          <a href="https://vk.com/svnikolakr" target="_blank">
            <img src="/social/Vk.png" />
          </a>
          <a href="https://t.me/svyato_nikolsky_bot" target="_blank">
            <img src="/social/tgBot.png" />
          </a>
        </div>
      </div>
      <div :class="$style.developersInfo">
        <p :class="$style.developersName">Разработано @Alex Grishkin</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

interface AboutProps {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  imageUrl: string;
  description: string;
}

const data = {
  logo: '/logo.webp',
};

const aboutData = ref<AboutProps | null>(null);

onMounted(async () => {
  try {
    const response = await $fetch<AboutProps>(`${config.public.apiBase}/churches`);
    aboutData.value = response;
  } catch (error) {
    console.error('Ошибка при загрузке информации о церкви:', error);
  }
});
</script>

<style module scoped lang="scss">
.footerWrapper {
  position: relative;
  display: grid;
  gap: 2rem;
  z-index: 10;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-top: 2px dashed $darkWhite;
  @include layoutHorizontal;
}

.footerContentWrapper {
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @include bp($bp-medium) {
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
  }
}

.footerData {
  display: grid;
  row-gap: 1rem;
  grid-template-columns: repeat(auto-fit, 21.5rem);
  grid-template-areas:
    'name contacts'
    'social contacts';

  @include bp($bp-medium) {
    grid-template-columns: repeat(auto-fit, 25.2rem);
  }
}

.contactsWrapper {
  grid-area: contacts;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.socialLinksWrapper {
  grid-area: social;

  img {
    width: 4rem;
    height: 4rem;
  }
}

.decorImage {
  justify-self: center;
  max-width: 25.4rem;
  height: 3.6rem;
}

.developersInfo {
  display: grid;
  grid-template-areas:
    'logo devname'
    'logo devname';
  align-items: center;
  justify-content: start;
  gap: 1rem;

  .developersLogo {
    grid-area: logo;
    img {
      width: 4rem;
      height: 4rem;
    }
  }

  .developersName {
    grid-area: devname;
    color: $darkWhite;
    @include textMiniSemiBold;

    @include bp($bp-medium) {
      @include textMediumSemiBold;
    }
  }
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

.contactsWrapper {
  display: flex;
  flex-direction: column;
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
    @include textMediumBigSemiBold;
  }

  .city {
    color: $darkOrange;
    @include textMediumBigSemiBold;
  }
}
</style>
