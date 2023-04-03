import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import User from "../pages/User.vue";
import Posts from "../pages/Posts.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/user", component: User },
  { path: "/posts", component: Posts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
