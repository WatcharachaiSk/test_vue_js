<script setup>
import ListData from "../components/ListData.vue";
import FormData from "../components/form/FormData.vue";
</script>
<!--  -->
<script>
export default {
  name: "App",
  data() {
    return {
      dataEmployees: [
        { id: 1, nameEmp: "Employ 1", salary: 40000 },
        { id: 2, nameEmp: "Employ 2", salary: 15000 },
        { id: 3, nameEmp: "Employ 3", salary: 20000 },
        { id: 4, nameEmp: "Employ 4", salary: 30000 },
        { id: 5, nameEmp: "Employ 5", salary: 40000 },
        { id: 6, nameEmp: "Employ 6", salary: 45000 },
      ],
    };
  },
  components: { ListData, FormData },
};
</script>
<!--  -->
<template>
  <header>
    <h1 class="center">ระบบจัดการพนักงาน</h1>
  </header>
  <section>
    <FormData />
    <!--  -->
    <ListData :dataEmployees="dataEmployees" />
  </section>
  <!--  -->
</template>

<style scoped></style>
<style>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: red; */
  margin: 5px;
}
</style>
