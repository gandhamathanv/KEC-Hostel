<template>
  <article class="tile">
    <div class="tile-header">
      <i class="ph-lightning-light"></i>
      <h3>
        <span>{{ hostelName }}</span>
        <span>{{ capacity }}</span>
      </h3>
    </div>
    <a href="#">
      <span>view details</span>
      <span class="material-symbols-outlined"> info </span>
    </a>
  </article>
</template>
<script>
export default {
  name: "TilesDashboard",
  props: ["hostelName", "capacity"],
};
</script>
