<template>
  <section class="service-section">
    <h2>DashBoard</h2>
    <!-- <div class="service-section-header">
        <div class="search-field">
          <i class="ph-magnifying-glass"></i>
          <input type="text" placeholder="Name,Roll" />
        </div>
        <button class="flat-button">Search</button>
      </div> -->
    <!-- <div class="mobile-only">
        <button class="flat-button">Toggle search</button>
      </div> -->
    <div class="tiles">
      <tiles-dashboard></tiles-dashboard>
    </div>
    <div class="service-section-footer">
      <p>Your Hostel Information Will Only be visible.</p>
    </div>
  </section>
</template>
<script>
import TilesDashboard from "@/components_Dash/miniComponents/TilesDashboard.vue";
export default {
  name: "dashboardContainerOverview",
  components: { TilesDashboard },
};
</script>
