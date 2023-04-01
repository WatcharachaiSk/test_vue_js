<script setup></script>
<!--  -->
<script>
export default {
  name: "Person",
  data() {
    return {
      // title: "ข้อมูลพนักงาน",
    };
  },
  props: {
    nameEmp: {
      type: String,
      required: true,
      default: "-",
    },
    salary: {
      type: Number,
      default: 15000,
    },
  },
};
</script>
<!--  -->
<template>
  <div>
    <sapn>
      - ชื่อพนักงาน {{ nameEmp }} เงินเดือน
      {{ salary }}
    </sapn>
  </div>
</template>
<!--  -->
<style scoped></style>
