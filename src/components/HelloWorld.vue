<!--  -->
<script setup>
import { ref } from "vue";
defineProps({
  msg: String,
  listData: Object,
});
const count = ref(0);
</script>
<!--  -->
<template>
  <h2>{{ msg }}</h2>
  <h3>{{ listData }}</h3>
</template>
<!--  -->
<style scoped></style>
