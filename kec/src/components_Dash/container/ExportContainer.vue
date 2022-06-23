<template>
  <div class="app-body-main-content">
    <div class="tiles">
      <tiles-dashboard
        :hostelName="'amaravathi'"
        :capacity="4"
      ></tiles-dashboard>
      <tiles-dashboard
        :hostelName="'amaravathi'"
        :capacity="4"
      ></tiles-dashboard>
    </div>
  </div>
</template>
<script>
import TilesDashboard from "../miniComponents/TilesDashboard.vue";
export default {
  components: { TilesDashboard },
  name: "PasswordContainer",
};
</script>
