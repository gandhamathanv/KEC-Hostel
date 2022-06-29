<template>
  <LoadingPage v-if="this.$store.state.isLoading"></LoadingPage>

  <router-view v-else></router-view>
</template>
<script>
// import HeaderNav from "@/components/HeaderNav.vue";
import LoadingPage from "@/components/dashboard/loadingPage.vue";
// import DashboardNav from "@/components/dashboard/dashboardNav.vue";
import AuthenticationService from "@/services/AuthenticationServices";

export default {
  name: "app",
  components: { LoadingPage },
  // async mounted() {
  //   try {
  //     const res = await AuthenticationService.getData(this.$store.state.token);
  //     console.log(res);
  //     if (res.status == "success") {
  //       this.$store.dispatch("setToken", res.data.token);
  //       this.$store.dispatch("setUser", res.data.data.user);
  //       this.$store.dispatch("setViewer", res.data.data.viewer);
  //     } else {
  //       this.$store.dispatch("setToken", null);
  //       this.$store.dispatch("setUser", null);
  //       this.$store.dispatch("setViewer", null);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     // this.error = error.response.data.error;
  //     alert(error);
  //   }
  // },
  // un comment
  async mounted() {
    this.$store.dispatch("setLoading", true);
    try {
      console.log(localStorage.getItem("jwt"));
      const token = localStorage.getItem("jwt");
      if (token) {
        const res = await AuthenticationService.getData(token);
        console.log(res);
        if (res.data.status == "success") {
          this.$store.dispatch("setToken", res.data.token);
          this.$store.dispatch("setUser", res.data.data.user);
          this.$store.dispatch("setViewer", res.data.data.viewer);
          this.$store.dispatch("setLevel", res.data.data.level);
        } else {
          this.$store.dispatch("setToken", null);
          this.$store.dispatch("setUser", null);
          this.$store.dispatch("setViewer", null);
          this.$store.dispatch("setLevel", null);
          localStorage.removeItem("jwt");
        }
      }
    } catch (error) {
      alert(error);
    }
    this.$store.dispatch("setLoading", false);
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/newDash.css";

.dash-container {
  height: 100%;
}
.container-view {
  max-height: 100%;
  max-width: 100%;
  overflow-y: scroll;
} //before

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   // text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
