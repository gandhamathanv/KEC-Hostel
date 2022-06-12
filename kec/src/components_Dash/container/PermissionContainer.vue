<template>
  <div class="app-body-main-content">
    <section class="service-section">
      <h2>Permisions</h2>

      <div class="tiles">
        <permission-tile></permission-tile>
        <permission-tile></permission-tile>
        <permission-tile></permission-tile>
        <permission-tile></permission-tile>
      </div>
      <div class="service-section-footer">
        <p>Your Hostel Information Will Only be visible.</p>
      </div>
    </section>
  </div>
</template>
<script>
import permissionTile from "../miniComponents/permissionTile.vue";
export default {
  components: { permissionTile },
  name: "PermissionContainer",
};
</script>
