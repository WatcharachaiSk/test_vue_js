import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//

import SidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import "@fortawesome/fontawesome-free/css/all.css";

import router from "./routers/router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// const app = createApp(App);
// app.use(VueSidebarMenu);
// app.mount("#app");

const app = createApp(App);
app.use(router);
app.use(SidebarMenu);

app.mount("#app");
