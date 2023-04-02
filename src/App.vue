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
        title: "Dashboard",
        href: "/",
        icon: "fa-solid fa-house",
      },
      {
        title: "About",
        href: "/about",
        icon: "fa-solid fa-address-card",
      },
    ]);

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
    <div class="content-container">
      <!-- Your other content here -->
      <router-view />
    </div>
  </div>
</template>

<!--  -->
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.sidebar-container {
  width: 60px; /* Adjust the width as needed */
}

.content-container {
  /* background: red; */
  /* Apply appropriate styles to avoid overlapping with SidebarMenu */
  flex-grow: 1;
}
</style>
