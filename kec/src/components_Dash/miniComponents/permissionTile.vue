<template>
  <article class="tile">
    <div class="tile-header">
      <h3>
        <span>GITHUB</span>
        <span>4</span>
      </h3>
      <div class="toggle-button-cover">
        <div class="button-cover">
          <div class="button r" id="button-1">
            <input type="checkbox" class="checkbox" />
            <div class="knobs"></div>
            <div class="layer"></div>
          </div>
        </div>
      </div>
    </div>
    <a href="#">
      <span>view Booking</span>
      <span class="material-symbols-outlined"> info </span>
    </a>
  </article>
</template>
<script>
export default {
  name: "permissionTile",
};
</script>
<style scoped>
.tile-header {
  justify-content: space-between;
}
</style>
