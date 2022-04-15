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

export default {
  name: "app",

  components: {
    HeaderNav,
    DashboardNav,
  },
  created() {
    this.$store.dispatch("setToken", localStorage.getItem("jwt"));
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
