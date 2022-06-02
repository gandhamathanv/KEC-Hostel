<template>
  <div class="container">
    <div>
      <div class="buttons">
        <button class="submit">
          <span class="submit">Student Data </span>
        </button>
      </div>
      <div class="buttons">
        <button class="submit">
          <span class="submit">staff Data </span>
        </button>
      </div>
      <div class="buttons">
        <button class="submit">
          <span class="submit">booking Data </span>
        </button>
      </div>
      <div class="buttons">
        <button class="submit">
          <span class="submit">hostel Data </span>
        </button>
      </div>
    </div>
    <div>
      <button :theme-color="'primary'" @click="exportExcel">
        Export Excel
      </button>
    </div>
  </div>
</template>

<script>
import { saveExcel } from "@progress/kendo-vue-excel-export";

export default {
  name: "exportData",
  data() {
    return {
      items: [],
      columns: [
        { field: "ProductID" },
        { field: "ProductName", title: "Product Name" },
        { field: "UnitPrice", title: "Unit Price" },
      ],
    };
  },
  methods: {
    exportExcel() {
      saveExcel({
        data: this.items,
        fileName: "myFile",
        columns: [
          { field: "ProductID" },
          { field: "ProductName", title: "Product Name" },
        ],
      });
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
