<template>
  <div :class="$style.footerWrapper">
    <img :class="$style.decorImage" src="/decorateImg.svg" alt="Декоративная картинка" />
    <div :class="$style.footerContentWrapper">
      <div :class="$style.footerData">
        <p v-if="aboutData?.name" :class="$style.organisationName">© {{ aboutData?.name }}</p>
        <div :class="$style.contactsWrapper">
          <p v-if="aboutData?.address" :class="$style.aboutContactsAdress">
            {{ aboutData?.address }}
          </p>
          <p v-if="aboutData?.phone" :class="$style.aboutContactsPhone">
            Телефон: {{ aboutData?.phone }}
          </p>
          <p v-if="aboutData?.email" :class="$style.aboutContactsEmail">{{ aboutData?.email }}</p>
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
        <a href="https://t.me/tehvo_slava" target="_blank" :class="$style.developersLogo">
          <img src="/social/ourLogo.png" />
        </a>
        <p :class="$style.developersName">Разработано Технологии во Славу</p>
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
  display: grid;
  gap: 2rem;
  z-index: 10;
  background-color: $white;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-top: 1px solid $grey;
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

.organisationName {
  grid-area: name;
  color: $darkRed;

  @include textMiniSemiBold;

  @include bp($bp-medium) {
    @include textMediumSemiBold;
  }
}

.aboutContactsAdress {
  @include textMiniSemiBold;

  @include bp($bp-medium) {
    @include textMediumSemiBold;
  }
}

.aboutContactsPhone {
  color: $darkGrey;
  @include textMini;

  @include bp($bp-medium) {
    @include textMedium;
  }
}

.aboutContactsEmail {
  color: $darkGrey;
  @include textMini;

  @include bp($bp-medium) {
    @include textMedium;
  }
}

.navigationWrapper {
  display: flex;
  gap: 4.7rem;

  .navigationLink {
    color: $black-blue;
    width: min-content;
    text-wrap: nowrap;
    @include textMediumBigSemiBold;

    &:hover {
      color: $darkRed;
    }
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
    color: $darkRed;
    @include textMiniSemiBold;

    @include bp($bp-medium) {
      @include textMediumSemiBold;
    }
  }
}
</style>
