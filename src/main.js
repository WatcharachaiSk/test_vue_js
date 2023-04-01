import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

import router from "./routers/router";

// const app = createApp(App);
// app.use(VueSidebarMenu);
// app.mount("#app");

const app = createApp(App);
app.use(router);
app.use(VueSidebarMenu);
app.mount("#app");
