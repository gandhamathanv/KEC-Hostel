<template>
  <div class="app-body-main-content">
    <dashboard-container-overview v-if="false"></dashboard-container-overview>
    <dashboard-container-staff-list
      v-if="true"
    ></dashboard-container-staff-list>
  </div>
</template>
<script>
import DashboardContainerOverview from "./dashboardsubContainer/dashboardContainerOverview.vue";
import DashboardContainerStaffList from "./dashboardsubContainer/dashboardContainerStaffList.vue";
export default {
  components: { DashboardContainerOverview, DashboardContainerStaffList },
  name: "ContainerContent",
};
</script>
