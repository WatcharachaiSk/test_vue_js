<script>
import SidebarMenu from "vue-sidebar-menu";
import { ref } from "vue";
export default {
  setup() {
    const menu = ref([
      {
        header: "Vue Js Test",
        hiddenOnCollapse: true,
      },
      {
        title: "Who Posts",
        href: "/posts",
        icon: "fa-solid fa-inbox",
      },
      {
        title: "Add Employee",
        href: "/",
        icon: "fa-solid fa-house",
      },
      {
        title: "User",
        href: "/user",
        icon: "fa-solid fa-user",
      },
      {
        title: "About",
        href: "/about",
        icon: "fa-solid fa-address-card",
      },
    ]);
    // <i class="fa-duotone fa-mailbox"></i>
    return { menu };
  },
};
</script>
<!--  -->
<template>
  <div class="container">
    <div class="sidebar-container">
      <sidebar-menu :menu="menu" />
    </div>
    <div class="content my-3">
      <!-- Your other content here -->
      <router-view />
    </div>
  </div>
</template>

<!--  -->
<style scoped>
.container {
  position: relative;
}

.sidebar-menu {
  position: absolute;
  top: 0;
  left: 0;
}

.content {
  /* background: red; */
  margin-left: 55px;
}
</style>
