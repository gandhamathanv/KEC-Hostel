<template>
  <div>
    <h1>kechostels</h1>
    <toggle-button me></toggle-button>
  </div>
</template>

<script>
import ToggleButton from "../components/components/ToggleButton.vue";
export default {
  name: "permissionsPage",
  props: {
    msg: String,
  },
  components: { ToggleButton },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin-top: 200px;
  font-size: 200px;
  align-items: center;
}
</style>
