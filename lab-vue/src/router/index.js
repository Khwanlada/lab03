import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/About.vue";
import ShowNew from "../views/ShowNew.vue";
import ShowStudent from "../views/showStudent.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/show",
    name: "ShowNew",
    component: ShowNew
  },
  {
    path: "/student",
    name: "ShowStudent",
    component: ShowStudent
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
