/* eslint-disable */
import { createApp } from "vue";
import { sync } from "vuex-router-sync";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import excel from "vue-excel-export";

createApp(App).use(store).use(router).use(excel).mount("#app");

sync(store, router);
