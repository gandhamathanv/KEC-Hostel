/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPop from "../components/LoginPop.vue";
import StudentInfo from "../components/StudentInfo.vue";
import BookingView from "../views/BookingView.vue";
import Dashboard from "../views/dashBoard.vue";
// import Dashboard2 from "../components/dashboard/booBoo.vue";
import changePassword from "../components/resetPassword.vue";

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/login",
        name: "login",
        component: LoginPop,
    },
    {
        path: "/Student",
        name: "studentInfo",
        component: StudentInfo,
    },
    {
        path: "/booking",
        name: "BookingView",
        component: BookingView,
    },
    {
        path: "/dash",
        name: "homeview",
        component: Dashboard,
    },
    // {
    //     path: "/booboo",
    //     name: "homeview",
    //     component: Dashboard2,
    // },
    {
        path: "/changePassword",
        name: "changePassword",
        component: changePassword,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;