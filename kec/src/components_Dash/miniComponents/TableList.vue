<template>
  <section class="service-section">
    <h2>Staff List</h2>
    <!-- <div class="app-content"> -->
    <div class="app-content-actions">
      <input class="search-bar" placeholder="Search..." type="text" />
      <div class="app-content-actions-wrapper">
        <div class="filter-button-wrapper">
          <button class="action-button filter jsFilter">
            <span>Filter</span
            ><span class="material-symbols-outlined"> filter_list </span>
          </button>
          <div class="filter-menu">
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
        <button class="action-button list active" title="List View">
          <span class="material-symbols-outlined"> list </span>
        </button>
        <button class="action-button grid" title="Grid View">
          <span class="material-symbols-outlined"> grid_view </span>
        </button>
      </div>
    </div>
    <div class="products-area-wrapper tableView">
      <div class="products-header">
        <div class="product-cell image">
          Items
          <button class="sort-button"></button>
        </div>
        <div class="product-cell category">
          Category<button class="sort-button"></button>
        </div>
        <div class="product-cell status-cell">
          Status<button class="sort-button"></button>
        </div>
        <div class="product-cell sales">
          Sales<button class="sort-button"></button>
        </div>
        <div class="product-cell stock">
          Stock<button class="sort-button"></button>
        </div>
        <div class="product-cell price">
          Price<button class="sort-button"></button>
        </div>
      </div>
      <div class="products-row">
        <div class="product-cell image">
          <span>Ocean</span>
        </div>
        <div class="product-cell category">
          <span class="cell-label">Category:</span>Furniture
        </div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
        <div class="product-cell sales">
          <span class="cell-label">Sales:</span>11
        </div>
        <div class="product-cell stock">
          <span class="cell-label">Stock:</span>36
        </div>
        <div class="product-cell price">
          <span class="cell-label">Price:</span>$560
        </div>
      </div>
      <div class="products-row">
        <div class="product-cell image">
          <span>Ocean</span>
        </div>
        <div class="product-cell category">
          <span class="cell-label">Category:</span>Furniture
        </div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
        <div class="product-cell sales">
          <span class="cell-label">Sales:</span>11
        </div>
        <div class="product-cell stock">
          <span class="cell-label">Stock:</span>36
        </div>
        <div class="product-cell price">
          <span class="cell-label">Price:</span>$560
        </div>
      </div>
      <div class="products-row">
        <div class="product-cell image">
          <span>Ocean</span>
        </div>
        <div class="product-cell category">
          <span class="cell-label">Category:</span>Furniture
        </div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
        <div class="product-cell sales">
          <span class="cell-label">Sales:</span>11
        </div>
        <div class="product-cell stock">
          <span class="cell-label">Stock:</span>36
        </div>
        <div class="product-cell price">
          <span class="cell-label">Price:</span>$560
        </div>
      </div>
      <div class="products-row">
        <div class="product-cell image">
          <span>Ocean</span>
        </div>
        <div class="product-cell category">
          <span class="cell-label">Category:</span>Furniture
        </div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
        <div class="product-cell sales">
          <span class="cell-label">Sales:</span>11
        </div>
        <div class="product-cell stock">
          <span class="cell-label">Stock:</span>36
        </div>
        <div class="product-cell price">
          <span class="cell-label">Price:</span>$560
        </div>
      </div>
      <div class="products-row">
        <div class="product-cell image">
          <span>Ocean</span>
        </div>
        <div class="product-cell category">
          <span class="cell-label">Category:</span>Furniture
        </div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
        <div class="product-cell sales">
          <span class="cell-label">Sales:</span>11
        </div>
        <div class="product-cell stock">
          <span class="cell-label">Stock:</span>36
        </div>
        <div class="product-cell price">
          <span class="cell-label">Price:</span>$560
        </div>
      </div>
      <div class="products-row">
        <div class="product-cell image">
          <span>Ocean</span>
        </div>
        <div class="product-cell category">
          <span class="cell-label">Category:</span>Furniture
        </div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
        <div class="product-cell sales">
          <span class="cell-label">Sales:</span>11
        </div>
        <div class="product-cell stock">
          <span class="cell-label">Stock:</span>36
        </div>
        <div class="product-cell price">
          <span class="cell-label">Price:</span>$560
        </div>
      </div>
      <div class="products-row">
        <div class="product-cell image">
          <span>Ocean</span>
        </div>
        <div class="product-cell category">
          <span class="cell-label">Category:</span>Furniture
        </div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
        <div class="product-cell sales">
          <span class="cell-label">Sales:</span>11
        </div>
        <div class="product-cell stock">
          <span class="cell-label">Stock:</span>36
        </div>
        <div class="product-cell price">
          <span class="cell-label">Price:</span>$560
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
};
</script>
<style scoped>
@import "@/assets/styles/table.css";
</style>
