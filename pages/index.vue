<template>
  <h1>index.vue</h1>
  <NuxtLink to="/details">Details Page</NuxtLink>
</template>
<script setup>
import api from '@/api/api';
import { onMounted } from 'vue';
  const params = {
    raceId: '1000006100'
  };
  onMounted(async () => {
    const response = await $fetch(api.eventItemDetailApiName,{query:{
      ...params
    }});
    console.log(response);
  })
</script>