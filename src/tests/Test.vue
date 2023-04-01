<script>
export default {
  name: "Test",
  // ---> <---
  data() {
    return {
      fistName: "Watcharachai",
      lastName: "SamKhan",
      age: 23,
      imgName: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      w: 75,
      h: 175,
      hobby: ["gym", "game", "work", "วิ่ง"],
    };
  },
  // ---> <---
  methods: {
    ageP() {
      return this.age++;
    },
    ageD() {
      return this.age--;
    },
    setFistName(event) {
      this.fistName = event.target.value;
    },
    setLastName(event) {
      this.lastName = event.target.value;
    },
    submitForm(event) {
      // event.preventDefault();
      // console.log(this.$refs.imgRef);
      alert("Scc");
    },
  },
  // ---> <---
  computed: {
    getFullName() {
      return `${this.fistName}  ${this.lastName}`;
    },
  },
  // --> <---
  watch: {
    age(value) {
      if (value >= 30) {
        setTimeout(() => {
          this.age = 30;
        }, 1500);
      } else {
      }
    },
  },
};
</script>
<!--  -->
<script setup>
import HelloWorld from "../components/HelloWorld.vue";
</script>
<!--  -->
<template>
  <div>
    <div class="container">
      <h1>ชื่อ: {{ getFullName }}</h1>
      <img v-bind:src="imgName" width="100" height="100" ref="imgRef" />
    </div>
    <div class="container">
      <h1>อายุ: {{ age }}</h1>
      <h3>น้ำหนัก {{ w }}</h3>
      <h3>ส่วนสูง {{ h }}</h3>
      <p>
        เสียงโรค: <strong>{{ w > 100 ? "เสี่ยง" : "ไม่เสี่ยง" }}</strong>
      </p>
    </div>

    <div>
      <ul v-if="hobby.length == 0">
        ไม่มีงานอดิเรก
      </ul>
      <ul v-else>
        งานอดิเรก
      </ul>
      <li v-for="(item, idx) in hobby" :key="idx">
        <strong>{{ idx + 1 }}. {{ item }}</strong>
      </li>
    </div>

    <div class="container-input">
      <form @submit.prevent="submitForm">
        <label>ชื่อใหม่:</label>
        <input class="box-input" type="text" v-on:input="setFistName" />
        <label>นามสกุลใหม่:</label>
        <input class="box-input" type="text" v-on:input="setLastName" />
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="container-button">
      <button @click="ageP()" class="box-button">อายุ +</button>
      <button @click="ageD()" class="box-button">อายุ -</button>
    </div>
  </div>

  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.container {
  display: flex;
  /* background: red; */
  align-items: center;
  justify-content: space-between;
}
.container-button {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-button {
  padding: 5px;
  margin: 5px;
  align-items: center;
  justify-content: center;
}
.container-input {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
}
.box-input {
  margin: 5px;
  width: 150px;
  height: 20px;
}
</style>
