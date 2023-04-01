<script setup>
import { ref } from "vue";
import Person from "./Person.vue";
const count = ref(0);
</script>
<!--  -->
<script>
export default {
  name: "ListData",
  data() {
    return {
      title: "แสดงรายชื่อพนักงาน",
    };
  },
  components: {
    Person,
  },
  props: {
    dataEmployees: {
      type: Object,
      required: true,
    },
  },
};
</script>
<!--  -->
<template>
  <div>
    <div class="center">
      <h3>{{ title }}</h3>
    </div>
    <div class="center">
      <div class="boxPerson">
        <Person
          v-if="dataEmployees"
          v-for="(item, idx) in dataEmployees"
          :key="idx"
          :nameEmp="item.nameEmp"
          :salary="item.salary"
        />
        <!--  -->
        <Person nameEmp="ทดสอบ default" />
      </div>
    </div>
  </div>
</template>
<!--  -->
<style scoped>
.boxPerson {
  display: flex;
  flex-direction: column;
  align-items: start;

  /* background: #dfdf; */
}
</style>
