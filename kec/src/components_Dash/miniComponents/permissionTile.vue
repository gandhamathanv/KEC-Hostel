<template>
  <span class="tile">
    <div @click="toggle" class="tile-header">
      <h3>
        <span>{{ label }}</span>
        <span>No of hostels {{ count }}</span>
      </h3>
      <h4>{{ isOpen ? "OPEN" : "CLOSED" }}</h4>
    </div>
    <div>
      <div>
        <div class="tile-middle">
          <h4>OPEN :</h4>
          <span> {{ openCount }}</span>
        </div>
        <div class="tile-middle">
          <h4>CLOSED :</h4>
          <span> {{ closedCount }}</span>
        </div>
      </div>
    </div>
    <a @click="clickTile">
      <span>view details</span>
      <span class="material-symbols-outlined"> info </span>
    </a>
  </span>
</template>
<script>
export default {
  name: "permissionTile",
  props: ["label", "count", "isOpen", "openCount", "closedCount"],
  data() {
    return {};
  },
  methods: {
    clickTile() {
      console.log("tile");
    },
    toggle() {
      console.log("toggle");
    },
  },
};
</script>
<style scoped>
.tile-header {
  justify-content: space-between;
}
.tile-middle {
  display: flex;
}
</style>
