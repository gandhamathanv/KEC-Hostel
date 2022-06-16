<template>
  <div class="app-body-main-content">
    <tiles-dashboard></tiles-dashboard>
    <tiles-dashboard></tiles-dashboard>
    <tiles-dashboard></tiles-dashboard>
    <tiles-dashboard></tiles-dashboard>
  </div>
</template>
<script>
import TilesDashboard from "../miniComponents/TilesDashboard.vue";
export default {
  components: { TilesDashboard },
  name: "PasswordContainer",
};
</script>
