<template>
  <div v-if="this.id" class="app-body-main-content">
    <div class="mainDiv">
      <div class="cardStyle">
        <form action="" method="post" name="signupForm" id="signupForm">
          <img src="../../assets/img/homepage/keclogo.png" id="signupLogo" />
          <h2 class="formTitle">change password</h2>
          <div class="inputContainer">
            <input-field
              :fieldInput="id"
              :label="'ID'"
              :disable="true"
            ></input-field>
            <input-field
              :label="'password'"
              @changeValue="setValue"
              :type="'password'"
            ></input-field>
            <input-field
              :label="'confirmPassword'"
              @changeValue="setValue"
              :type="'password'"
              @focusout="checkPassword"
            ></input-field>
            <div class="error">
              <p class="error-line">{{ error }}</p>
            </div>
            <button-field :disable="buttonDisable" class="save"></button-field>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonField from "../miniComponents/ButtonField.vue";
import inputField from "../miniComponents/inputField.vue";
export default {
  name: "PasswordContainer",
  data() {
    return {
      viewer: null,
      id: null,
      password: null,
      confirmPassword: null,
      error: null,
      buttonDisable: true,
    };
  },
  components: { inputField, ButtonField },
  methods: {
    setValue(payload) {
      const { label, value } = payload;
      console.log(payload);
      if (label == "password") {
        this.password = value;
        console.log("pasd", this.password);
      } else if (label == "confirmPassword") {
        this.confirmPassword = value;
      }
    },
    checkPassword() {
      if (this.password != this.confirmPassword) {
        this.error = "msmatch";
      } else {
        this.error = null;
      }
    },
  },
  watch: {
    password: function () {
      if (this.password === this.confirmPassword) {
        this.buttonDisable = false;
      }
    },
    confirmPassword: function () {
      if (this.password === this.confirmPassword) {
        this.buttonDisable = false;
      }
    },
  },
  mounted() {
    this.viewer = this.$store.state.viewer;
    if (this.viewer === "STAFF") {
      this.id = this.$store.state.user.collegeMailID;
    } else if (this.viewer === "STUDENT") {
      this.id = this.$store.state.user.rollnumber;
    }
    console.log(this.viewer);
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
