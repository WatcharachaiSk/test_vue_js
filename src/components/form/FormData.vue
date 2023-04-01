<script setup>
import { ref } from "vue";
defineProps({});
const count = ref(0);
</script>
<script>
export default {
  name: "FormData",
  data() {
    return {
      title: "แบบฟอร์มบันทึกข้อมูลพนักงาน",
    };
  },
};
</script>
<!--  -->
<template>
  <div class="center boxTitle">
    <h3>{{ title }}</h3>
  </div>
</template>
<!--  -->
<style scoped>
.boxTitle {
  background: #dfdf;
  border-radius: 5px;
  border-width: 20px;
  border-color: #000;
  box-shadow: #000;
}
</style>
