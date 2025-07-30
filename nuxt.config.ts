// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    public: {
      apiBase: process.env.NODE_ENV === 'development' ? 'http://84.38.180.101:8080' : '/api',
    },
  },
  nitro: {
    devProxy: {
      '/api/': {
        target: 'http://84.38.180.101:8080',
        changeOrigin: true,
        pathRewrite: { '^/api/': '' },
      },
    },
  },
  devtools: { enabled: false },
  ssr: true,
  vue: {
    config: {
      productionTip: false, // Убирает отладочные комментарии
    },
    compilerOptions: {
      comments: false, // Убирает отладочные комментарии в шаблонах
    },
  },
  components: true, // Автоимпорт компонентов
  modules: [
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxt/image',
    '@pinia/nuxt',
    'dayjs-nuxt',
    'nuxt-file-storage',
    '@nuxt/eslint',
    'nuxt-typed-router',
  ],
  families: [
    { name: 'montserrat', provider: 'google' },
    { name: 'geist', provider: 'google' },
    { name: 'manrope', provider: 'google' },
    { name: 'Roboto Slab', provider: 'google' },
    { name: 'Prosto One', provider: 'google' },
    { name: 'Nunito', provider: 'google' },
  ],
  css: ['~/assets/scss/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
        @use "~/assets/scss/_vars.scss" as *;
        @use "~/assets/scss/_mixins.scss" as *;
        @use "~/assets/scss/_typography.scss" as *;
        `,
        },
      },
    },
  },
});
