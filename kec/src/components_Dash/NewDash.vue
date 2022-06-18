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
        <div class="tabs">
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
          <router-link
            :class="{ active: this.$route.name == 'DashboardHostel' }"
            :to="{ name: 'DashboardHostel' }"
          >
            Hostel
          </router-link>
        </div>
      </div>
      <div class="app-header-actions">
        <button class="user-profile">
          <span>Gandhamathan </span>
          <span>
            <img
              src="https://assets.codepen.io/285131/almeria-avatar.jpeg"
              alt="profile"
            />
          </span>
        </button>
        <div class="app-header-actions-buttons">
          <!-- <button class="icon-button large">
            <span class="material-symbols-outlined"> search </span>
          </button> -->
          <button class="icon-button large">
            <span class="material-symbols-outlined"> notifications </span>
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
  mounted() {
    console.log(this.$route.name == "DashboardBooking" && "Tru");
  },
};
</script>
