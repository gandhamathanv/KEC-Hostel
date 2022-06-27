/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import LoginPop from "../components/LoginPop.vue";
import StudentInfo from "../components/StudentInfo.vue";
import BookingView from "../views/BookingView.vue";
import Dashboard from "../views/dashBoard.vue";
import staffDashboard from "../views/staffDashBoard.vue";

import studentRegistration from "../views/studentRegistration.vue";
import staffRegistration from "../views/staffRegistration.vue";
import staffInfo from "../components/staffInfo.vue";
import updateInfo from "../components/updateInfo.vue";
import studentDataList from "../views/studentDataList.vue";
import staffDataList from "../views/staffDataList.vue";
import bookingDataList from "../views/bookingDataList.vue";
import hostelDataList from "../views/hostelDataList.vue";
import notificationList from "../views/notificationList.vue";
import Popup from "../views/bookingPopup.vue";
import roomDataList from "../views/roomDataList.vue";
import studentDetail from "../components/studentDetail.vue";
import staffDetail from "../components/staffDetail.vue";
import hostelDetail from "../components/dashboard/hostelDetail.vue";
import roomDetail from "../components/dashboard/roomDetail.vue";
import bookingDetail from "../components/dashboard/bookingDetail.vue";
import errorStatus from "../components/dashboard/errorStatus.vue";
import loadingPage from "../components/dashboard/loadingPage.vue";
import loaderPage from "../components/dashboard/loaderPage.vue";
import newDash from "../components_Dash/NewDash.vue";

//new routes

import overView from "../components_Dash/container/dashboardsubContainer/dashboardContainerOverview.vue";
import DashboardStaffList from "../components_Dash/container/dashboardsubContainer/dashboardContainerStaffList.vue";
import DashboardStudentList from "../components_Dash/container/dashboardsubContainer/dashboardContainerStudentList.vue";
import DashboardBookingList from "../components_Dash/container/dashboardsubContainer/dashboardContainerBookingList.vue";
import changePassword from "../components_Dash/container/PasswordContainer.vue";
import permissions from "../components_Dash/container/PermissionContainer.vue";
import todaysMenu from "../components_Dash/container/MenuContainer.vue";
import exportData from "../components_Dash/container/ExportContainer.vue";
import userInfo from "../components_Dash/container/UserInfo.vue";
import DashboardBookNow from "../views/BookingView.vue";

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
    path: "/studentDashboard",
    name: "studentDashboard",
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
    path: "/roomDataList/:hostelName",
    name: "roomDataList",
    component: roomDataList,
  },
  {
    path: "/hostelDataList",
    name: "hostelDataList",
    component: hostelDataList,
  },
  {
    path: "/notificationList",
    name: "notificationList",
    component: notificationList,
  },
  {
    path: "/hostelDataList/:hostelName",
    name: "hostelDetail",
    component: hostelDetail,
  },
  {
    path: "/roomDataList/:hostelName/:roomNumber",
    name: "roomDetail",
    component: roomDetail,
  },
  {
    path: "/bookingDataList/:rollnumber",
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
    path: "/loaderPage",
    name: "loaderPage",
    component: loaderPage,
  },
  {
    path: "/newdash",
    name: "NewDash",
    component: newDash,
  },

  //new routes
  {
    path: "/dashboard/home",
    component: Dashboard,
    name: "DashboardHome",
    children: [
      {
        path: "",
        component: overView,
        name: "DashboardOverview",
      },

      {
        path: "staffList",
        component: DashboardStaffList,
        name: "DashboardStaff",
      },
      {
        path: "studentList",
        component: DashboardStudentList,
        name: "DashboardStudent",
      },
      {
        path: "BookingList",
        component: DashboardBookingList,
        name: "DashboardBooking",
      },
      {
        path: "userinfo",
        name: "UserInfo",
        component: userInfo,
      },
    ],
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
    children: [
      {
        path: "changepassword",
        component: changePassword,
        name: "DashboardChangePassword",
      },
      {
        path: "permissions",
        component: permissions,
        name: "DashboardPermission",
      },
      {
        path: "Menu",
        name: "todaysMenu",
        component: todaysMenu,
      },
      {
        path: "export",
        name: "exportData",
        component: exportData,
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "errorStatus",
    component: errorStatus,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
