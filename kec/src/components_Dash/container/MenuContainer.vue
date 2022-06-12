<template>
  <div class="app-body-main-content">
    <section class="service-section">
      <h2>Change Menu</h2>
      <input-field></input-field>
      <input-field></input-field>
      <input-field></input-field>
    </section>
  </div>
</template>
<script>
import inputField from "../miniComponents/inputField.vue";
export default {
  components: { inputField },
  name: "PasswordContainer",
};
</script>
