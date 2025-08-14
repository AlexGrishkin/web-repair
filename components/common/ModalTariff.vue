<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="modelValue" class="overlay" @click.self="close">
        <transition name="pop">
          <div v-show="modelValue" class="card">
            <img v-if="image" :src="image" alt="" class="thumb" />
            <div class="head">
              <div class="title_wrapper">
                <h3 class="title">{{ title }}</h3>
                <div class="price">{{ price }}</div>
              </div>
              <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
              <div class="body">
                <ul class="list">
                  <li v-for="(item, i) in items" :key="i" class="row">
                    <img src="/tarifs/pointer.svg" />
                    <span class="text">{{ item }}</span>
                  </li>
                </ul>
                <p v-if="note" class="note">{{ note }}</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
  title: String,
  price: String,
  subtitle: String,
  items: Array,
  image: String,
  note: String,
});

const emit = defineEmits(['update:modelValue', 'close']);

function close() {
  emit('update:modelValue', false);
  emit('close');
}

function onKey(e) {
  if (e.key === 'Escape') close();
}

watch(
  () => props.modelValue,
  (v) => {
    if (import.meta.client) {
      document.body.style.overflow = v ? 'hidden' : '';
      if (v) window.addEventListener('keydown', onKey);
      else window.removeEventListener('keydown', onKey);
    }
  },
  { immediate: true },
);

onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', onKey);
  }
});
</script>

<style scoped lang="scss">
/* overlay */
.overlay {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.5);
  z-index: 1000;
  @include layoutHorizontal;
}

/* card */
.card {
  display: grid;
  position: relative;
  height: 75vh;
  max-height: 75rem;
  overflow: auto;
  width: 100%;
  max-width: 737px;
  border-radius: 20px;
  background: rgba(242, 242, 242, 0.95);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  padding: 4rem;
  gap: 4rem;

  @include bp($bp-medium) {
    grid-template-columns: 12.5rem 1fr;
  }
}

/* header */
.head {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 16px;
}

.title_wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-family: $headers;
  margin: 0;
  @include textBig;
}
.price {
  margin-left: auto;
  font-weight: 800;
  font-size: 20px;
  color: $darkRed;
  @include textBig;
}
.subtitle {
  color: #666;
  @include textMediumBig;
}

/* body */
.body {
  display: grid;
  gap: 8px;
}
.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}
.row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.thumb {
  width: 100%;
  object-fit: contain;
  border-radius: 8px;
}
.text {
  color: $mainBlack;
  display: block;
  line-height: 1.35;

  @include textMediumBig;
}
.note {
  margin-top: 12px;
  font-size: 12px;
  color: #888;
}

/* animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}
.pop-enter-from,
.pop-leave-to {
  transform: translateY(8px) scale(0.98);
  opacity: 0;
}

.card::-webkit-scrollbar {
  width: 8px; /* толщина вертикального скролла */
}

.card::-webkit-scrollbar-track {
  background: transparent; /* трек прозрачный */
}

.card::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.6); /* чёрный полупрозрачный */
  border-radius: 8px; /* скругление */
}

.card::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.8);
}

/* Firefox */
.card {
  scrollbar-width: thin; /* thin | auto */
  scrollbar-color: rgba(0, 0, 0, 0.6) transparent; /* thumb | track */
}

.card::-webkit-scrollbar-button {
  display: none;
  height: 0;
}
</style>
