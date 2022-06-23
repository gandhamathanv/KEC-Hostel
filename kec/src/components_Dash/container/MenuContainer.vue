<template>
  <div class="app-body-main-content">
    <section class="service-section">
      <form action="" method="post" name="signupForm" id="signupForm">
        <h2 class="formTitle">Change Menu</h2>
        <div class="inputContainer">
          <input-field
            :label="'breakfast'"
            :fieldInput="menu.breakfast"
            @changeValue="changeMenu"
          ></input-field>
          <input-field
            :label="'lunch'"
            :fieldInput="menu.lunch"
            @changeValue="changeMenu"
          ></input-field>
          <input-field
            :label="'dinner'"
            :fieldInput="menu.dinner"
            @changeValue="changeMenu"
          ></input-field>

          <button-field class="save"></button-field>
        </div>
      </form>
    </section>
  </div>
</template>
<script>
import inputField from "../miniComponents/inputField.vue";
export default {
  components: { inputField },
  name: "PasswordContainer",
  data() {
    return {
      menu: this.$store.state.menu,
    };
  },
  methods: {
    changeMenu(lab, menu) {
      console.log(lab, menu);
    },
  },
};
</script>
<style scoped>
.mainDiv {
  display: flex;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
}
.cardStyle {
  width: 500px;
  border-color: white;

  padding: 36px 0;
  border-radius: 4px;
  margin: 30px 0;
  box-shadow: 0px 0 2px 0 white;
}
#signupLogo {
  max-height: 100px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.formTitle {
  font-weight: 600;
  margin-top: 20px;
  color: white;
  text-align: center;
}
.inputContainer {
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.save {
  margin: 0 auto;
}
</style>
