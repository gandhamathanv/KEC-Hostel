/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPop from "../components/LoginPop.vue";
import StudentInfo from "../components/StudentInfo.vue";
import BookingView from "../views/BookingView.vue";
import Dashboard from "../views/dashBoard.vue";
import staffDashboard from "../views/staffDashBoard.vue";
import changePassword from "../components/resetPassword.vue";
import permissions from "../components/permissions.vue";
import studentRegistration from "../views/studentRegistration.vue";
import staffInfo from "../components/staffInfo.vue";
import listView from "../views/dataList.vue";
// import paymentPage from "../components/dashboard/paymentPage";

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
    {
        path: "/staffDashboard",
        name: "staffDashboard",
        component: staffDashboard,
    },
    {
        path: "/changePassword",
        name: "changePassword",
        component: changePassword,
    },
    {
        path: "/permissions",
        name: "permissionPage",
        component: permissions,
    },
    {
        path: "/registration",
        name: "studentRegisration",
        component: studentRegistration,
    },
    {
        path: "/staffInfo",
        name: "staffInfo",
        component: staffInfo,
    },
    {
        path: "/listView",
        name: "listView",
        component: listView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;