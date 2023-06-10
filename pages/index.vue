<template>
  <h1>index.vue</h1>
  <h2>{{ counter }}</h2>
  <div>
    <button @click="counter++">+</button>
  </div>
  <NuxtLink to="/details">Details Page</NuxtLink>
</template>
<script setup>
import api from '@/api/api';
import { onMounted } from 'vue';
const params = {
  raceId: '1000006100'
};
let counter = useCounter();

onMounted(() => {
  const response = $fetch(api.eventItemDetailApiName, {
    query: {
      ...params
    }
  });
});
let foo = null;
foo.abc
</script>
