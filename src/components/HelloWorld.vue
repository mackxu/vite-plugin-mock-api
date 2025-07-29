<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);

const handleClick = async () => {
  const res = await fetch('https://localhost:3000/api/user');
  console.log(await res.json());
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="handleClick">mock 请求</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.card {
  display: flex;
  gap: 20px;
}
</style>
