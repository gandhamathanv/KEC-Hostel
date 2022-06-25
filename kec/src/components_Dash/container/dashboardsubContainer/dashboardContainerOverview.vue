<template>
  <section class="service-section">
    <h2>DashBoard</h2>

    <div class="tiles">
      <tiles-dashboard
        @click="showHostel(hostel.hostelName)"
        v-for="hostel in hostelList"
        :key="hostel"
        :hostelName="hostel.hostelName"
        :capacity="hostel.capacity"
      ></tiles-dashboard>
    </div>
    <div class="service-section-footer">
      <p>Your Hostel Information Will Only be visible.</p>
    </div>
  </section>
</template>
<script>
import TilesDashboard from "@/components_Dash/miniComponents/TilesDashboard.vue";
import getDetails from "@/services/getDetails";
export default {
  name: "dashboardContainerOverview",
  data() {
    return {
      hostelList: {},
    };
  },
  methods: {
    showHostel(hostelName) {
      console.log(hostelName);
    },
  },
  components: { TilesDashboard },
  async created() {
    const response = await getDetails.getHostelList();
    if (response.data.status === "success") {
      this.hostelList = response.data.data;
    }
    console.log(response);
  },
};
</script>
