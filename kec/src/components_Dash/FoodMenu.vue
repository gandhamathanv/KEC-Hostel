<template>
  <div class="app-body-sidebar">
    <section class="payment-section">
      <h2>Todays Menu</h2>
      <div class="payments">
        <div class="payment">
          <div class="payment-details">
            <h3>Breakfast</h3>
            <div>
              <span>{{ this.$store.state.menu.breakfast }}</span>
            </div>
          </div>
        </div>
        <div class="payment">
          <div class="payment-details">
            <h3>Lunch</h3>
            <div>
              <span>{{ this.$store.state.menu.lunch }}</span>
            </div>
          </div>
        </div>
        <div class="payment">
          <div class="payment-details">
            <h3>Dinner</h3>
            <div>
              <span>{{ this.$store.state.menu.dinner }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "FoodMenuSideBar",
};
</script>
