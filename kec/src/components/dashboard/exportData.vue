<template>
  <div class="container">
    <div>
      <div class="buttons">
        <button class="submit" @click="exportExcel('student')">
          Student Export Excel
        </button>
      </div>
      <div class="buttons">
        <button class="submit" @click="exportExcel('staff')">
          Staff Export Excel
        </button>
      </div>
      <div class="buttons">
        <button class="submit" @click="exportExcel('booking')">
          Booking Export Excel
        </button>
      </div>
      <div class="buttons">
        <button class="submit" @click="exportExcel('rooms')">
          Rooms Export Excel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
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
      // saveExcel({
      //   data: this.items,
      //   fileName: "myFile",
      //   columns: [
      //     { field: "ProductID" },
      //     { field: "ProductName", title: "Product Name" },
      //   ],
      // });
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
