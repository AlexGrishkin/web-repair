<template>
  <div :class="$style.eventsPage">
    <h1 :class="$style.eventsTitle">Расписание богослужений</h1>
    <img :class="$style.decorImage" src="/decorateImg.svg" alt="Декоративная картинка" />

    <div v-if="grouppedEvents && Object.keys(grouppedEvents).length" :class="$style.eventsWrapper">
      <Event v-for="(event, date) in grouppedEvents" :key="date" :event-data="event" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Event from '~/components/common/Event.vue';

// useHead({
//   bodyAttrs: {
//     class: 'bg-events',
//   },
// });

const config = useRuntimeConfig();

const { data: events } = await useAsyncData('eventsData', async () => {
  try {
    return await $fetch(`${config.public.apiBase}/events`, {
      params: {
        page: 0,
        size: 100,
      },
    });
  } catch (error) {
    console.error('Ошибка при загрузке событий:', error);
    return null;
  }
});

// Безопасный reduce
const grouppedEvents = computed(() => {
  if (!events.value?.content?.length) {
    return {};
  }
  return events.value.content.reduce((acc, item) => {
    if (!acc[item.date]) {
      acc[item.date] = [];
    }
    acc[item.date].push(item);
    return acc;
  }, {});
});

onMounted(() => {
  document.body.classList.add('bg-events');
});
onBeforeUnmount(() => {
  document.body.classList.remove('bg-events');
});
</script>
<style lang="scss" module>
.eventsPage {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.3rem;
  margin-top: 4rem;
  margin-bottom: 4rem;

  @include layoutHorizontal;
}

.eventsWrapper {
  margin-top: 4rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  column-gap: 2rem;
  row-gap: 4rem;

  @include bp($bp-medium) {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }

  @include bp($bp-medium-big) {
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  }
}

.eventsTitle {
  text-align: center;
  text-transform: capitalize;

  @include textSuperBigBold;
}

.decorImage {
  max-width: 25.4rem;
  height: 3.6rem;
}
</style>
