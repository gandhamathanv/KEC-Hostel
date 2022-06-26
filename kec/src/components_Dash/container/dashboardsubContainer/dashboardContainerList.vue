<template>
  <div class="app-body-main-content">
    <TableList
      :listType="this.$route.name"
      :tableHeader="'staff List'"
    ></TableList>
  </div>
</template>
<script>
import TableList from "@/components_Dash/miniComponents/TableList.vue";
// import "@/assets/script/script";
export default {
  name: "DashboardList",
  components: { TableList },
};
</script>
