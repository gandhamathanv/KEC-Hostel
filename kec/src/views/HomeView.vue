<template>
  <div class="home">
    <HelloWorld v-if="!$store.state.isUserLoggedIn" />
    <!-- <DashboardBegin v-if="$store.state.isUserLoggedIn" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import DashboardBegin from "../components/dashboard/dashboardBegin.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    // DashboardBegin,
  },
};
</script>
