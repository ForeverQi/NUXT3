<template>
  <div>
    <div>
      <button>Button</button>
    </div>
  </div>
</template>

<script setup>
import api from '@/api/api';
import { onMounted } from 'vue';
  const params = {
    raceId: '111'
  };
  onMounted(async () => {
    const response = await fetch(api.eventItemDetailApi(params));
    console.log(response);
  })
</script>

<style lang="scss" scoped></style>
