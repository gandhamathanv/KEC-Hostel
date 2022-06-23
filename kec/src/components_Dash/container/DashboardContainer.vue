<template>
  <div class="app-body-main-content">
    <dashboard-container-overview v-if="true"></dashboard-container-overview>
  </div>
</template>
<script>
import DashboardContainerOverview from "./dashboardsubContainer/dashboardContainerOverview.vue";

export default {
  components: { DashboardContainerOverview },
  name: "ContainerContent",
};
</script>
