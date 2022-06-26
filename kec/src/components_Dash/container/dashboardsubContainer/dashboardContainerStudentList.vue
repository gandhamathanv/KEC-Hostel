<template>
  <div class="app-body-main-content">
    <TableList
      v-if="listData"
      :data="listData"
      :tableHeader="'student List'"
      :options="this.data.options"
    ></TableList>
  </div>
</template>
<script>
import TableList from "@/components_Dash/miniComponents/TableList.vue";
import getDetails from "@/services/getDetails";

// import "@/assets/script/script";
export default {
  name: "DashboardList",
  components: { TableList },
  data() {
    return {
      data: {
        options: {
          hostelName: null,
          gender: null,
          year: null,
          department: null,
        },
      },
      listData: null,
    };
  },
  methods: {},

  async mounted() {
    const { data } = await getDetails.getStudentList();
    this.data.options.hostelName = [
      ...new Set(
        data.data.map((el) => {
          return el.hostelName;
        })
      ),
    ];
    this.data.options.gender = [
      ...new Set(
        data.data.map((el) => {
          return el.gender;
        })
      ),
    ];
    this.data.options.year = [
      ...new Set(
        data.data.map((el) => {
          return el.year;
        })
      ),
    ];
    this.data.options.department = [
      ...new Set(
        data.data.map((el) => {
          return el.department;
        })
      ),
    ];
    this.listData = data.data;
    this.realData = data.data;
  },
};
</script>
