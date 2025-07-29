<template>
  <div :class="$style.priestsPage">
    <h1 :class="$style.priestsTitle">Служители</h1>
    <img :class="$style.decorImage" src="/decorateImg.svg" alt="Декоративная картинка" />

    <div v-if="priests.length" :class="$style.priestsWrapper">
      <PriestCard v-for="priest in priests" :key="priest.id" :priest-data="priest" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PriestCard from '~/components/common/PriestCard.vue';

const config = useRuntimeConfig();

// const { data: priestsData } = await useAsyncData(
//   'priestsData',
//   async () => {
//     try {
//       const response = await $fetch(`${config.public.apiBase}/clergy`);
//       return { list: response };
//     } catch (error) {
//       console.error('Ошибка при загрузке служителей:', error);
//       return { list: [] };
//     }
//   },
//   { server: true },
// ); // ✅ обязательно на Vercel

const priests = ref([]);

// Функция запроса
const fetchPriests = async () => {
  try {
    const response = await $fetch(`${config.public.apiBase}/clergy`);
    priests.value = response || [];
  } catch (error) {
    console.error('Ошибка при загрузке служителей:', error);
  }
};

// Вызов при маунте (только на клиенте)

onMounted(() => {
  fetchPriests();
  document.body.classList.add('priests');
});
onBeforeUnmount(() => {
  document.body.classList.remove('priests');
});
</script>
<style lang="scss" module>
.priestsPage {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.3rem;
  padding-top: 4rem;
  padding-bottom: 4rem;

  @include layoutHorizontal;
}

.priestsWrapper {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 4rem;
  width: 100%;
}

.priestsTitle {
  text-transform: capitalize;

  @include textSuperBigBold;
}

.decorImage {
  max-width: 25.4rem;
  height: 3.6rem;
}
</style>
