<template>
  <div v-if="aboutData" :class="$style.aboutPageWrapper">
    <h1 v-if="aboutData.name" :class="$style.aboutTitle">{{ aboutData.name }}</h1>
    <img :class="$style.decorImage" src="/decorateImg.svg" alt="Декоративная картинка" />
    <div :class="$style.mainContent">
      <div :class="$style.aboutPicture">
        <nuxt-img
          v-if="aboutData.imageUrl"
          :class="$style.aboutMainImg"
          :src="aboutData.imageUrl"
        />
        <div :class="$style.aboutContactsWrapper">
          <div v-if="aboutData.address" :class="$style.aboutContacts">
            <img :class="$style.aboutContactsIcon" src="/location.svg" alt="Адрес" />
            <p :class="$style.aboutContactsText">{{ aboutData.address }}</p>
          </div>
          <div v-if="aboutData.phone" :class="$style.aboutContacts">
            <img :class="$style.aboutContactsIcon" src="/phone.svg" alt="Телефон" />
            <p :class="$style.aboutContactsText">{{ aboutData.phone }}</p>
          </div>
          <div v-if="aboutData.email" :class="$style.aboutContacts">
            <img :class="$style.aboutContactsIcon" src="/email.svg" alt="Почта" />
            <p :class="$style.aboutContactsText">{{ aboutData.email }}</p>
          </div>
          <div :class="$style.aboutSocialLinksWrapper">
            <a href="https://vk.com/svnikolakr" target="_blank">
              <img src="/social/Vk.png" />
            </a>
            <a href="https://t.me/svyato_nikolsky_bot" target="_blank">
              <img src="/social/tgBot.png" />
            </a>
          </div>
        </div>
      </div>
      <div
        v-if="aboutData.description"
        :class="$style.aboutDescription"
        v-html="aboutData.description"
      />
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

const { data: aboutData } = await useAsyncData('aboutData', async () => {
  try {
    return await $fetch<AboutProps>(`${config.public.apiBase}/churches`);
  } catch (error) {
    console.error('Ошибка при загрузке информации о церкви:', error);
    return null;
  }
});
</script>
<style lang="scss" module>
.aboutPageWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  margin-top: 4rem;
  margin-bottom: 4rem;

  @include layoutHorizontal;

  .mainContent {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @include bp($bp-medium) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .aboutPicture {
      display: flex;
      gap: 2rem;

      @include bp($bp-medium) {
        gap: 5rem;
        flex-direction: column;
      }

      .aboutMainImg {
        border-radius: 1rem;
        object-fit: contain;
        max-width: 18.6rem;

        @include bp($bp-medium) {
          max-width: 100%;
        }
      }

      .aboutContactsWrapper {
        display: flex;
        flex-direction: column;
        gap: 2.1rem;

        .aboutContacts {
          display: flex;
          gap: 1.2rem;

          .aboutContactsIcon {
            object-fit: contain;
            width: 2.4rem;
            height: 2.4rem;
          }

          .aboutContactsText {
            @include textMediumBig;
          }
        }
      }
    }
  }
}
.aboutTitle {
  text-align: center;
  @include textSuperBigBold;
}
.decorImage {
  max-width: 25.4rem;
  height: 3.6rem;
}

.aboutDescription {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @include textMediumBig;
}

.aboutSocialLinksWrapper {
  display: flex;
  gap: 1rem;
  img {
    width: 3rem;
    height: 3rem;
  }
}
</style>
