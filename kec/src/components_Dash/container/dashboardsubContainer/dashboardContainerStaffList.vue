<template>
  <div class="app-body-main-content">
    <TableList :tableHeader="'staff List'"></TableList>
  </div>
</template>
<script>
import TableList from "@/components_Dash/miniComponents/TableList.vue";
// import "@/assets/script/script";
export default {
  name: "ContainerContent",
  components: { TableList },
};
</script>
