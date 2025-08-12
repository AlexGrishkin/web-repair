<template>
  <div :class="$style.mainPageWrapper">
    <Banner />
    <MainAbout
      title="КТО МЫ?"
      description="ГЕОМЕТРИЯ РЕМОНТА — это команда профессионалов, готовая реализовать
ремонт «под ключ» любого формата и любой сложности"
      :class="$style.section"
    />
    <Direction
      :title="directionData.title"
      :description="directionData.description"
      :class="$style.section"
      :additionally="dataAdditionally"
    />
    <MainReasons :reasons="reasons" />
    <CustomersBenefit
      :title="customersData.title"
      :description="customersData.description"
      :sub-title="customersData.subtitle"
      :class="$style.section"
    />
    <Tarifs
      :title="tarifsData.title"
      :sub-title="tarifsData.subtitle"
      :tarifs="tarifsData.tarifs"
    />
    <RepairSteps
      :title="repairStepsData.title"
      :sub-title="repairStepsData.subtitle"
      :description="repairStepsData.description"
    />
    <Questions title="Появились вопросы?" sub-title="попробуем ответить!" />
  </div>
</template>

<script setup lang="ts">
import Banner from '~/components/Main/Banner.vue';
import Direction from '~/components/Main/Direction.vue';
import CustomersBenefit from '~/components/Main/CustomersBenefit.vue';
import Tarifs from '~/components/Main/Tarifs.vue';
import RepairSteps from '~/components/Main/RepairSteps.vue';
import Questions from '~/components/Main/Questions.vue';

const tarifsData = {
  title: 'ТАРИФЫ',
  subtitle:
    'Всё просто: выбирайте из 5 тарифов. Материалы, работы и уборка уже включены. Никаких лишних трат.',
  tarifs: [
    {
      id: 1,
      title: 'Эконом',
      price: 10900,
      description: [
        'Демонтаж и стяжка пола',
        'Электрика и сантехника',
        'Плитка в ванной',
        'Покраска стен',
      ],
      image: '/tarifs/tarifImg.png',
    },
    {
      id: 2,
      title: 'Эконом',
      price: 10900,
      description: [
        'Демонтаж и стяжка пола',
        'Электрика и сантехника',
        'Плитка в ванной',
        'Покраска стен',
      ],
      image: '/tarifs/tarifImg.png',
    },
    {
      id: 3,
      title: 'Эконом',
      price: 10900,
      description: [
        'Демонтаж и стяжка пола',
        'Электрика и сантехника',
        'Плитка в ванной',
        'Покраска стен',
      ],
      image: '/tarifs/tarifImg.png',
    },
    {
      id: 4,
      title: 'Эконом',
      price: 10900,
      description: [
        'Демонтаж и стяжка пола',
        'Электрика и сантехника',
        'Плитка в ванной',
        'Покраска стен',
      ],
      image: '/tarifs/tarifImg.png',
    },
    {
      id: 5,
      title: 'Эконом',
      price: 10900,
      description: [
        'Демонтаж и стяжка пола',
        'Электрика и сантехника',
        'Плитка в ванной',
        'Покраска стен',
      ],
      image: '/tarifs/tarifImg.png',
    },
  ],
};

const customersData = {
  title: 'КАЖДЫЙ НАШ',
  subtitle: 'КЛИЕНТ ПОЛУЧАЕТ',
  description: [
    {
      text: 'Все доставки и разгрузки материалов за наш счет',
      image: '/customers/homeCustomer.svg',
    },
    {
      text: 'Все доставки и разгрузки материалов за наш счет',
      image: '/customers/homeCustomer.svg',
    },
    {
      text: 'Бесплатную визуализацию',
      image: '/customers/homeCustomer.svg',
    },
    {
      text: 'Бесплатную визуализацию',
      image: '/customers/homeCustomer.svg',
    },
    {
      text: 'Все доставки и разгрузки материалов за наш счет',
      image: '/customers/homeCustomer.svg',
    },
    {
      text: 'Бесплатную визуализацию',
      image: '/customers/homeCustomer.svg',
    },
    {
      text: 'Бесплатную визуализацию',
      image: '/customers/homeCustomer.svg',
    },
    {
      text: 'Все доставки и разгрузки материалов за наш счет',
      image: '/customers/homeCustomer.svg',
    },
    {
      text: 'Бесплатную визуализацию',
      image: '/customers/homeCustomer.svg',
    },
    {
      text: 'Все доставки и разгрузки материалов за наш счет',
      image: '/customers/homeCustomer.svg',
    },
  ],
};

const directionData = {
  title: 'НАШИ НАПРАВЛЕНИЯ',
  description: [
    {
      text: 'Ремонт по индивидуальным дизайн-проектам',
    },
    {
      text: 'Ремонт по индивидуальным дизайн-проектам',
    },
    {
      text: 'Ремонт по индивидуальным дизайн-проектам',
    },
    {
      text: 'Ремонт по индивидуальным дизайн-проектам',
    },
  ],
};

const dataAdditionally = [
  {
    text: 'Осуществляем профессиональную приёмку квартир от застройщика с сертифицированными специалистами;',
  },
  { text: 'Разработка дизайн-проектов;' },
  { text: 'Помощь с выбором и поставкой сантехники и мебели на выгодных условиях.' },
];

const reasons = [
  {
    title: 'Стоимость известна заранее известна заранее',
    text: 'Она фиксирована. Вы можете рассчитать её прямо сейчас на сайте. После заключения договора стоимость не меняется независимо от ситуации на рынке.',
  },
  {
    title: 'Стоимость известна заранее известна заранее',
    text: 'Она фиксирована. Вы можете рассчитать её прямо сейчас на сайте. После заключения договора стоимость не меняется независимо от ситуации на рынке.',
  },
  {
    title: 'Стоимость известна заранее известна заранее',
    text: 'Она фиксирована. Вы можете рассчитать её прямо сейчас на сайте. После заключения договора стоимость не меняется независимо от ситуации на рынке.',
  },
  {
    title: 'Стоимость известна заранее известна заранее',
    text: 'Она фиксирована. Вы можете рассчитать её прямо сейчас на сайте. После заключения договора стоимость не меняется независимо от ситуации на рынке.',
  },
  {
    title: 'Стоимость известна заранее известна заранее',
    text: 'Она фиксирована. Вы можете рассчитать её прямо сейчас на сайте. После заключения договора стоимость не меняется независимо от ситуации на рынке.',
  },
  {
    title: 'Стоимость известна заранее известна заранее',
    text: 'Она фиксирована. Вы можете рассчитать её прямо сейчас на сайте. После заключения договора стоимость не меняется независимо от ситуации на рынке.',
  },
  {
    title: 'Стоимость известна заранее известна заранее',
    text: 'Она фиксирована. Вы можете рассчитать её прямо сейчас на сайте. После заключения договора стоимость не меняется независимо от ситуации на рынке.',
  },
];

const repairStepsData = {
  title: 'ВАШ РЕМОНТ В',
  subtitle: '3 ПРОСТЫХ ШАГА',
  description: [
    {
      title: 'Заявка и расчёт стоимости',
      description: 'Вы оставляете заявку на ремонт мы сразу же делаем расчёт',
    },
    {
      title: 'Заявка и расчёт стоимости',
      description: 'Вы оставляете заявку на ремонт мы сразу же делаем расчёт',
    },
    {
      title: 'Заявка и расчёт стоимости',
      description: 'Вы оставляете заявку на ремонт мы сразу же делаем расчёт',
    },
  ],
};

// const config = useRuntimeConfig();
</script>

<style module lang="scss">
.mainPageWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>
