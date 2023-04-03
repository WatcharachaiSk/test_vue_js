<script setup>
defineProps({});
</script>
<script>
export default {
  name: "FormData",
  data() {
    return {
      title: "แบบฟอร์มบันทึกข้อมูลพนักงาน",
      inputForm: "btn btn-secondary",
      isSubmitted: false,
      employee: [
        {
          nameEmp: "Test1",
          salaryEmp: 50000,
        },
      ],
    };
  },
  methods: {
    inputFormChanged() {
      // console.log(this.$refs.nameEmp.value);
      if (this.$refs.nameEmp.value && this.$refs.salaryEmp.value) {
        return [
          (this.inputForm = "btn btn-success"),
          (this.isSubmitted = true),
        ];
      } else
        return [
          (this.inputForm = "btn btn-secondary"),
          (this.isSubmitted = false),
        ];
    },
    onSubmit() {
      if (this.isSubmitted) {
        let arr = this.employee;
        arr.push({
          nameEmp: this.$refs.nameEmp.value,
          salaryEmp: this.$refs.salaryEmp.value,
        });
        return (this.employee = arr);
      } else {
        alert("ข้อมูลยังไม่ครบ");
      }
    },
  },
  computed: {},
  watch: {},
};
</script>
<!--  -->
<template>
  <div class="center boxTitle">
    <h3>{{ title }}</h3>
    <!--  -->
  </div>
  <div>
    <form @change="inputFormChanged()" @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="nameEmp" class="form-label">ชื่อพนักงาน</label>
        <input
          ref="nameEmp"
          type="text"
          class="form-control"
          id="name"
          placeholder="ชื่อพนักงาน"
        />
      </div>
      <div class="mb-3">
        <label for="salaryEmp" class="form-label">เงินเดือนพนักงาน</label>
        <input
          ref="salaryEmp"
          type="number"
          class="form-control"
          id="name"
          placeholder="15,000"
        />
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" :class="[inputForm, 'boxButton']">บันทึก</button>
      </div>
    </form>
    <!--  -->
    <!-- <form>
      <label for="salaryEmp" class="form-label">Password</label>
      <input
        ref="password"
        type="password"
        class="form-control"
        id="name"
        placeholder="password"
      />
    </form> -->
    <div class="my-3">
      <div class="center">
        <h3>แสดงรายชื่อพนักงาน</h3>
      </div>
      <li v-for="(item, idx) in employee" :key="idx">
        <strong>
          ชื่อพนักงาน {{ item.nameEmp }} เงินเดือน {{ item.salaryEmp }}
          ตำแหน่ง
          <strong style="color: red" v-if="item.salaryEmp >= 50000">
            senior
          </strong>
          <strong style="color: greenyellow" v-else=""> junior</strong>
        </strong>
      </li>
    </div>
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
.boxButton {
  width: 100px;
  height: 50px;
}
</style>
