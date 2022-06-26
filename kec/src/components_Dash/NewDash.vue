<template>
  <div>
    <header class="app-header">
      <div class="app-header-logo">
        <div class="logo">
          <span class="logo-icon">
            <img src="../assets/img/homepage/keclogo.png" />
          </span>
          <h1 class="logo-title">
            <span>KEC</span>
            <span>HOSTEL</span>
          </h1>
        </div>
      </div>
      <div class="app-header-navigation">
        <div v-if="this.$store.state.viewer === 'STAFF'" class="tabs">
          <router-link
            :class="{ active: this.$route.name == 'DashboardOverview' }"
            :to="{ name: 'DashboardOverview' }"
          >
            Overview
          </router-link>
          <router-link
            :class="{ active: this.$route.name == 'DashboardStaff' }"
            :to="{ name: 'DashboardStaff' }"
          >
            Staff
          </router-link>
          <router-link
            :class="{ active: this.$route.name == 'DashboardStudent' }"
            :to="{ name: 'DashboardStudent' }"
          >
            Student
          </router-link>
          <router-link
            :class="{ active: this.$route.name == 'DashboardBooking' }"
            :to="{ name: 'DashboardBooking' }"
          >
            Booking
          </router-link>
        </div>
      </div>
      <div class="app-header-actions">
        <button class="user-profile">
          <span class="icon-button large">
            {{ this.$store.state.user.name[0] }}
          </span>
          <span>{{ this.$store.state.user.name }} </span>
        </button>
        <div class="app-header-actions-buttons">
          <!-- <button class="icon-button large">
            <span class="material-symbols-outlined"> search </span>
          </button> -->
          <button @click="logout" class="icon-button large">
            <span class="material-symbols-outlined"> logout </span>
          </button>
        </div>
      </div>
      <div class="app-header-mobile">
        <button class="icon-button large">
          <span class="material-symbols-outlined"> menu </span>
        </button>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      localStorage.clear();
      console.log("logout");
      // this.$router.push({
      //   name: "home",
      // });
    },
  },
  mounted() {},
};
</script>
