import VueRouter from "vue-router";
import routes from "./routers";

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
