<template>
  <section class="service-section">
    <h2>{{ tableHeader }}</h2>
    <!-- <div class="app-content"> -->
    <div class="app-content-actions">
      <input class="search-bar" placeholder="Search..." type="text" />
      <div class="app-content-actions-wrapper">
        <div @click="setActive('filter')" class="filter-button-wrapper active">
          <button class="action-button filter jsFilter">
            <span>Filter</span
            ><span class="material-symbols-outlined"> filter_list </span>
          </button>
          <div
            @mouseleave="setActive(null)"
            class="filter-menu"
            :class="{ active: this.active === 'filter' }"
          >
            <label>Category</label>
            <select>
              <option>All Categories</option>
              <option>Furniture</option>
              <option>Decoration</option>
              <option>Kitchen</option>
              <option>Bathroom</option>
            </select>
            <label>Status</label>
            <select>
              <option>All Status</option>
              <option>Active</option>
              <option>Disabled</option>
            </select>
            <div class="filter-menu-buttons">
              <button class="filter-button reset">Reset</button>
              <button class="filter-button apply">Apply</button>
            </div>
          </div>
        </div>
        <button
          class="action-button list"
          @click="this.view = 'listView'"
          :class="{ active: this.view === 'listView' }"
          title="List View"
        >
          <span class="material-symbols-outlined"> list </span>
        </button>
        <button
          @click="this.view = 'gridView'"
          class="action-button grid"
          :class="{ active: this.view === 'gridView' }"
          title="Grid View"
        >
          <span class="material-symbols-outlined"> grid_view </span>
        </button>
      </div>
    </div>
    <div
      class="products-area-wrapper"
      :class="{
        tableView: this.view === 'listView',
        gridView: this.view === 'gridView',
      }"
    >
      <div class="products-header">
        <div v-for="item in header" :key="item" class="product-cell">
          {{ item }}
          <button class="sort-button"></button>
        </div>
      </div>
      <div class="products-row">
        <div v-for="(keys, value) in data" :key="value" class="product-cell">
          <div v-if="value == 'status'">
            <span class="cell-label"> Status:</span>
            <span class="status active">Active</span>
          </div>
          <div v-else>
            <span class="cell-label">{{ value }}</span
            >{{ keys }}
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>
<script>
// import "@/assets/script/script";
export default {
  name: "TableList",
  props: ["tableHeader", "listType"],
  data() {
    return {
      view: "gridView",
      active: null,
      data: {
        name: "Gandhamathan V",
        rollnumber: "20CSR051",
        dept: "CSE",
        status: "Active",
      },
    };
  },
  computed: {
    header: {
      get() {
        return Object.keys(this.data);
      },
    },
  },
  methods: {
    setActive(data) {
      this.active = data;
      console.log(data);
    },
  },
  async mounted() {
    console.log("props", this.listType);
  },
};
</script>
<style scoped>
@import "@/assets/styles/table.css";
</style>
