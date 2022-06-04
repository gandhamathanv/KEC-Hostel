<template>
  <div>
    <div class="four">404</div>
    <div class="pnf">Page Not Found</div>
    <div class="server">
      The resource requested could not be found on this server.
    </div>
  </div>
</template>
<script>
export default {
  name: "errorStatus",
  data() {
    return {};
  },
};
</script>
<style scoped>
.four {
  font-size: 170px;
  font-weight: bold;
  margin-top: 150px;
}
.pnf {
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 20px;
}
</style>
