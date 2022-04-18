<template>
  <div>
    <HeaderNav v-if="!this.$store.state.isUserLoggedIn"></HeaderNav>
    <DashboardNav v-if="this.$store.state.isUserLoggedIn" />

    <router-view />
  </div>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
import DashboardNav from "@/components/dashboard/dashboardNav.vue";
import AuthenticationService from "@/services/AuthenticationServices";

export default {
  name: "app",

  components: {
    HeaderNav,
    DashboardNav,
  },
  // async created() {
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
  async created() {
    try {
      const token = localStorage.getItem("jwt");
      const res = await AuthenticationService.getData(token);
      console.log(res);
      if (res.status == "success") {
        this.$store.dispatch("setToken", res.data.token);
        this.$store.dispatch("setUser", res.data.data.user);
        this.$store.dispatch("setViewer", res.data.data.viewer);
      } else {
        this.$store.dispatch("setToken", null);
        this.$store.dispatch("setUser", null);
        this.$store.dispatch("setViewer", null);
      }
    } catch (error) {
      console.log(error);
      // this.error = error.response.data.error;
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
