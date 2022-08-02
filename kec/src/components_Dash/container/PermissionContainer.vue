<template>
  <div class="app-body-main-content">
    <section class="service-section">
      <h2>PERMISSION</h2>

      <div class="tiles">
        <permission-tile
          :label="'booking'"
          :count="booking.count"
          :openCount="booking.openCount"
          :closedCount="booking.closedCount"
          :isOpen="getBooking"
          @click="showPermission('booking')"
        ></permission-tile>
        <permission-tile
          :label="'Registration'"
          :isOpen="false"
          @click="showPermission('registration')"
        ></permission-tile>
      </div>
      <permissions
        v-if="permission"
        :permission="permission"
        class="permission-tile"
      ></permissions>

      <div class="service-section-footer">
        <p>Your Hostel Information Will Only be visible.</p>
      </div>
    </section>
  </div>
</template>
<script>
import permissionTile from "../miniComponents/permissionTile.vue";
import Permissions from "@/components/permissions.vue";
import getDetails from "@/services/getDetails";
export default {
  components: { permissionTile, Permissions },
  data() {
    return {
      permission: null,
      booking: {
        count: 0,
        openCount: 0,
        closedCount: 0,
      },
    };
  },
  methods: {
    showPermission(lab) {
      this.permission = lab;
    },
  },
  name: "PermissionContainer",
  computed: {
    getBooking() {
      return this.booking.openCount == 0 ? false : true;
    },
  },
  async created() {
    const response = await getDetails.getPermissionCount();
    this.booking.openCount = response.data.data.filter(
      (el) => el.booking === true
    ).length;
    this.booking.count = response.data.data.length;
    this.booking.closedCount = response.data.data.filter(
      (el) => el.booking === false
    ).length;
  },
};
</script>
<style scoped>
.permission-tile {
  grid-template-columns: 3fr;
  background-color: var(--c-olive-500);
  border-radius: 6px;
}
</style>
