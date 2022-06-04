<template>
  <div>
    <LoadingPage v-if="this.$store.state.isLoading"></LoadingPage>
    <div v-else>
      <HeaderNav v-if="!this.$store.state.isUserLoggedIn"></HeaderNav>
      <DashboardNav v-if="this.$store.state.isUserLoggedIn" />
    </div>

    <router-view />
  </div>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
import LoadingPage from "@/components/dashboard/loadingPage.vue";
import DashboardNav from "@/components/dashboard/dashboardNav.vue";
import AuthenticationService from "@/services/AuthenticationServices";

export default {
  name: "app",

  components: {
    HeaderNav,
    DashboardNav,
    LoadingPage,
  },
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
    try {
      console.log(localStorage.getItem("jwt"));
      const token = localStorage.getItem("jwt");
      if (token) {
        this.$store.dispatch("setLoading", true);
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
        this.$store.dispatch("setLoading", false);
      }
    } catch (error) {
      alert(error);
    }
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
