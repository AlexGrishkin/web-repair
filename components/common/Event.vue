<template>
  <div :class="[$style.eventWrapper, { [$style.eventsFlex]: isFlex }]">
    <h3 :class="$style.eventWeekDay">{{ groupedEvent.dayWeek }}</h3>
    <p :class="$style.calendyDay">
      {{ groupedEvent.day }} {{ groupedEvent.month }} {{ groupedEvent.year }}
    </p>
    <img :class="$style.decorImage" src="/EventImg.svg" alt="Декоративная картинка" />
    <div v-if="groupedEvent.events?.length" :class="$style.daysPartsWrapper">
      <p :class="$style.eventTitle">{{ groupedEvent.title }}</p>
      <div v-for="(event, i) in groupedEvent.events" :key="i" :class="$style.daysPartWrapper">
        <p :class="$style.daysPart">{{ event.partDay }}</p>
        <p :class="$style.daysPartText">
          {{ event.startTime }} - {{ event.endTime }}
          <img
            :class="$style.daysPartTextPointer"
            src="/TextPointer.svg"
            alt="Декоративная картинка"
          />
          {{ event.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
interface EventProps {
  id: number;
  date: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  priest: string;
  category: string;
  dayWeek: string;
  day: number;
  year: number;
  month: string;
  partDay: string;
}
const props = defineProps({
  eventData: {
    type: Array as PropType<EventProps[]>,
    required: true,
  },
  isFlex: {
    type: Boolean,
    default: false,
  },
});

const groupedEvent = computed(() => {
  const [first] = props.eventData;
  return {
    id: first.id,
    dayWeek: first.dayWeek,
    day: first.day,
    month: first.month,
    year: first.year,
    title: first.title,
    priest: first.priest,
    category: first.category,
    events: props.eventData.map((e) => ({
      partDay: e.partDay,
      startTime: e.startTime.slice(0, 5),
      endTime: e.endTime.slice(0, 5),
      description: e.description,
    })),
  };
});
</script>

<style scoped lang="scss" module>
.eventWrapper {
  border-radius: 1rem;
  height: 46rem;
  padding: 3rem;
  background-color: $white;
  cursor: pointer;

  .eventWeekDay {
    text-transform: capitalize;
    color: $darkRed;
    margin-bottom: 1rem;

    @include textBigSemiBold;
  }

  .calendyDay {
    color: $darkRed;
    margin-bottom: 2rem;

    @include textMedium;
  }

  .daysPartsWrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .eventTitle {
      text-transform: capitalize;

      @include textMedium;
    }

    .daysPartWrapper {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;

      @include textMedium;

      .daysPart {
        text-transform: uppercase;
        color: $darkRed;
      }

      .daysPartText {
        text-wrap: balance;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;

        .daysPartTextPointer {
          vertical-align: middle;
          display: inline-block;
          width: 0.8rem;
          height: 0.6rem;
          margin-bottom: 0.1rem;
        }
      }
    }
  }

  .decorImage {
    margin-bottom: 2rem;
    max-width: 7rem;
    height: 2.3rem;
  }
}

.eventsFlex {
  flex: 1 1 calc(25% - 2rem);
  max-width: calc(25% - 2rem);
}
</style>
