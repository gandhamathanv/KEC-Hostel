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
import staffRegistration from "../views/staffRegistration.vue";
import staffInfo from "../components/staffInfo.vue";
import updateInfo from "../components/updateInfo.vue";
import Popup from "../views/bookingPopup.vue";
import studentDataList from "../views/studentDataList.vue";
import staffDataList from "../views/staffDataList.vue";
import bookingDataList from "../views/bookingDataList.vue";
import hostelDataList from "../views/hostelDataList.vue";
import studentDetail from "../components/studentDetail.vue";
import staffDetail from "../components/staffDetail.vue";
import hostelDetail from "../components/dashboard/hostelDetail.vue";
import bookingDetail from "../components/dashboard/bookingDetail.vue";
import exportData from "../components/dashboard/exportData.vue";
import errorStatus from "../components/dashboard/errorStatus.vue";
import loadingPage from "../components/dashboard/loadingPage.vue";

const routes = [
  {
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
    name: "permissionsPage",
    component: permissions,
  },
  {
    path: "/studentRegistration",
    name: "studentRegisration",
    component: studentRegistration,
  },
  {
    path: "/staffRegistration",
    name: "staffRegisration",
    component: staffRegistration,
  },
  {
    path: "/staffInfo",
    name: "staffInfo",
    component: staffInfo,
  },

  {
    path: "/updateInfo",
    name: "updateInfo",
    component: updateInfo,
  },

  {
    path: "/popup",
    name: "popup",
    component: Popup,
  },
  {
    path: "/studentDataList",
    name: "studentDataList",
    component: studentDataList,
  },
  {
    path: "/studentDataList/:rollnumber",
    name: "studentdetail",
    component: studentDetail,
  },

  {
    path: "/staffDataList",
    name: "staffDataList",
    component: staffDataList,
  },
  {
    path: "/staffDataList/:staffID",
    name: "staffDetail",
    component: staffDetail,
  },
  {
    path: "/bookingDataList",
    name: "bookingDataList",
    component: bookingDataList,
  },
  {
    path: "/hostelDataList",
    name: "hostelDataList",
    component: hostelDataList,
  },
  {
    path: "/hostelDataList/:hostelName",
    name: "hostelDetail",
    component: hostelDetail,
  },
  {
    path: "/bookingDataList/:hostelName",
    name: "bookingDetail",
    component: bookingDetail,
  },
  {
    path: "/exportData",
    name: "exportData",
    component: exportData,
  },
  {
    path: "/loadingPage",
    name: "loadingPage",
    component: loadingPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "errorStatus",
    component: errorStatus,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
