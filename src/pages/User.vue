<script>
export default {
  name: "User",
  data() {
    return {
      getUser: [],
      getUserJs: [],
    };
  },
  methods: {},
  mounted() {
    axios.get("https://reqres.in/api/users/").then((res) => {
      // console.log(res);
      return (this.getUser = res.data.data);
    });
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      // console.log(res);
      return (this.getUserJs = res.data);
    });
  },
};
</script>
<script setup>
import axios from "axios";
</script>
<template>
  <div>
    <h1>ผู้ใช้งาน</h1>
    <!-- <p>{{ getUser[0] }}</p> -->
    <!-- <p>{{ getUserJs[0] }}</p> -->
    <!-- Cards Admin-->
    <div class="my-2">
      <div style="text-align: center">
        <h3>Admin</h3>
      </div>
      <div class="d-flex flex-wrap">
        <div class="m-1" v-for="(item, idx) in getUser" :key="idx">
          <div class="card" style="width: 18rem">
            <img :src="item.avatar" class="card-img-top" />
            <div class="card-body">
              <span class="card-text">
                ชื่อ: <strong>{{ item.first_name }}</strong> นามสกุล:
                <strong> {{ item.last_name }}</strong>
              </span>
              <br />
              <span class="card-text">
                อีเมล : <strong>{{ item.email }}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div style="background-color: darkgrey; width: 100%; height: 1.5px"></div>
    <!-- Cards User -->
    <div class="my-3">
      <div style="text-align: center">
        <h3>User</h3>
      </div>
      <div class="d-flex flex-wrap">
        <div class="m-1" v-for="(item, idx) in getUserJs">
          <div class="card" style="width: 18rem">
            <img
              src="http://www.jollyboxdesign.com/wp-content/uploads/2021/08/Administrator.png"
              class="card-img-top"
            />
            <div class="card-body">
              <span class="card-text">
                ชื่อ: <strong>{{ item.name }}</strong>
              </span>
              <br />
              <span
                >ชื่อเล่น: <strong>{{ item.username }}</strong></span
              >
              <br />
              <span class="card-text"
                >อีเมล : <strong>{{ item.email }}</strong></span
              >
              <br />
              <span class="card-text"
                >ติดต่อ : <strong>{{ item.phone }}</strong></span
              >
              <br />
              <span class="card-text"
                >เว็บไซต์ : <a style="color: blue">{{ item.website }}</a></span
              >
              <br />
              <!--  -->
              <div>
                <div class="mt-2" style="text-align: center">
                  <strong>ที่อยู่</strong>
                </div>

                <li>เมือง: {{ item.address.city }}</li>
                <li>ถนน: {{ item.address.street }}</li>
                <li>รหัสไปรษณีย์: {{ item.address.zipcode }}</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div style="background-color: darkgrey; width: 100%; height: 1.5px"></div>
  </div>
</template>

<style></style>
