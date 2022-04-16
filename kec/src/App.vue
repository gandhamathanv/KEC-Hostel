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
  async created() {
    const token = localStorage.getItem("jwt");
    if (token) {
      this.$store.dispatch("setToken", token);

      try {
        const response = await AuthenticationService.getData(token);
        if (response.error) {
          console.log("error");
        }
        console.log(response.data.data.user);
        const user = response.data.data.user;
        const viewer = response.data.data.viewer;
        this.$store.dispatch("setUser", user);
        this.$store.dispatch("setViewer", viewer);
        // this.$router.push({
        // name: "homeview",
        // });
      } catch (error) {
        // console.log(error);
        // this.error = error.response.data.error;
        alert(error);
      }
    } else {
      this.$store.dispatch("setUser", null);
      this.$store.dispatch("setViewer", null);
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
