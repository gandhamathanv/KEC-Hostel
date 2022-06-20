<template>
  <div class="app-body-navigation">
    <nav class="navigation">
      <router-link
        :class="{ focus: this.$route.name == 'DashboardOverview' }"
        :to="{ name: 'DashboardOverview' }"
      >
        <span>Dashboard</span>
      </router-link>

      <routerLink
        :class="{ focus: this.$route.name == 'DashboardChangePassword' }"
        :to="{ name: 'DashboardChangePassword' }"
      >
        <span>Change Password</span>
      </routerLink>
      <routerLink
        :class="{ focus: this.$route.name == 'DashboardPermission' }"
        :to="{ name: 'DashboardPermission' }"
      >
        <span>Permissions</span>
      </routerLink>
      <routerLink
        :class="{ focus: this.$route.name == 'todaysMenu' }"
        :to="{ name: 'todaysMenu' }"
      >
        <span>Todays Menu</span>
      </routerLink>
      <routerLink
        :class="{ focus: this.$route.name == 'exportData' }"
        :to="{ name: 'exportData' }"
      >
        <span>Export</span>
      </routerLink>
    </nav>
    <footer class="footer">
      <h1>KONGU INSTITUTION<small></small></h1>
      <div></div>
    </footer>
  </div>
</template>
