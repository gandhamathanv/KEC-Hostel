<template>
  <article class="tile">
    <div class="tile-header">
      <h3>
        <span>{{ label }}</span>
        <span>No of hostels {{ count }}</span>
      </h3>
      <label class="toggle">
        <input type="checkbox" />
        <span></span>
      </label>
    </div>
    <a href="#">
      <span>view details</span>
      <span class="material-symbols-outlined"> info </span>
    </a>
  </article>
</template>
<script>
export default {
  name: "permissionTile",
  props: ["label", "count"],
};
</script>
<style scoped>
.tile-header {
  justify-content: space-between;
}

.toggle span {
  display: block;
  width: 40px;
  height: 24px;
  border-radius: 99em;
  background-color: white;
  box-shadow: inset 1px 1px 1px 0 rgba(0, 0, 0, 0.05);
  position: relative;
  transition: 0.15s ease;
}
.toggle span:before {
  content: "";
  display: block;
  position: absolute;
  left: 3px;
  top: 3px;
  height: 18px;
  width: 18px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
  transition: 0.15s ease;
}
.toggle input {
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
.toggle input:checked + span {
  background-color: blue;
}
.toggle input:checked + span:before {
  transform: translateX(calc(100% - 2px));
}
.toggle input:focus + span {
  box-shadow: 0 0 0 4px var(--c-background-tertiary);
}
</style>
