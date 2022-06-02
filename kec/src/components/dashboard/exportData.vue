<template>
  <div class="container">
    <div>
      <div class="buttons">
        <!-- :data="json_data" -->
        <export-excel
          class="submit"
          :fetch="StudentGetData"
          :fields="json_fields"
          worksheet="My Worksheet"
          name="filename.xls"
          @click="getData"
        >
          Download Excel (you can customize this with html code!)
        </export-excel>
      </div>
    </div>
  </div>
</template>

<script>
import exportDetails from "@/services/exportDetails";
export default {
  name: "exportData",
  data() {
    return {
      json_fields: {
        "Complete name": "name",
        City: "city",
        Telephone: "phone.mobile",
        "Telephone 2": {
          field: "phone.landline",
          callback: (value) => {
            return `Landline Phone - ${value}`;
          },
        },
      },
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8",
          },
        ],
      ],
    };
  },
  methods: {
    async StudentGetData() {
      const { data } = await exportDetails.StudentData();
      return data.data;
    },
  },
};
</script>

<style scoped>
.submit {
  /* display: flex; */
  align-items: center;
  justify-content: center;
  height: 45px;
  max-width: 200px;
  width: 100%;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  margin: 25px 0;
  cursor: pointer;

  background-color: #e36f11;
  transition: all 0.3s linear;
}
</style>
