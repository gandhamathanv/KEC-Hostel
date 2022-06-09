<template>
  <div>
    <div
      v-if="!this.$store.state.isLoading"
      class="container"
      v-bind:class="{
        'right-panel-active': isActive,
      }"
      id="container"
    >
      <div class="form-container login-up-container">
        <form action="#">
          <h1 class="h1">Staff Login</h1>
          <input
            class="input"
            type="email"
            placeholder="Email"
            v-model="staff.email"
          />
          <input
            class="input"
            type="password"
            placeholder="Password"
            v-model="staff.password"
          />
          <span class="error-message">{{ staff.error }}</span>
          <span @click="staffLogin" class="button">Login</span>
        </form>
      </div>
      <div class="form-container login-in-container">
        <form action="#">
          <h1 class="h1">Student Login</h1>
          <input
            class="input"
            type="text"
            placeholder="Roll Number"
            v-model="student.rollnumber"
          />
          <input
            class="input"
            type="password"
            placeholder="Password"
            v-model="student.password"
          />

          <span class="error-message">{{ student.error }}</span>
          <span @click="studentLogin" class="button">Login</span>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1 class="h1">For Student's</h1>
            <p class="loginp">
              Click student login button and go to the students login and enter
              your details.
            </p>
            <span @click="setActive(false)" class="button ghost" id="loginIn">
              Student Login
            </span>
          </div>
          <div class="overlay-panel overlay-right">
            <h1 class="h1">For Staff's</h1>
            <p class="loginp">
              Click Staff login button and go to the staff login and enter your
              details.
            </p>
            <span @click="setActive(true)" class="button ghost" id="loginUp">
              Staff Login
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationServices";
export default {
  name: "aboutView",
  data() {
    return {
      staff: { email: "", password: "", error: null },
      student: { rollnumber: "", password: "", error: null },
      isActive: false,
    };
  },
  methods: {
    setActive(bool) {
      this.isActive = bool;
    },

    async studentLogin() {
      try {
        this.$store.dispatch("setLoading", true);
        const response = await AuthenticationService.studentLogin({
          rollnumber: this.student.rollnumber,
          password: this.student.password,
        });
        console.log(response.cookies);
        if (response.error) {
          console.log("error");
        }
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.data.user);
        this.$store.dispatch("setViewer", response.data.data.viewer);

        this.$router.push({
          name: "studentDashboard",
        });
      } catch (error) {
        this.student.error = error.response.data.error;
      }
      this.$store.dispatch("setLoading", false);
    },
    async staffLogin() {
      console.log("Staff Login");
      this.$store.dispatch("setLoading", true);
      try {
        const response = await AuthenticationService.staffLogin({
          mailId: this.staff.email,
          password: this.staff.password,
        });
        console.log(response.data.data.level);
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.data.user);
        this.$store.dispatch("setViewer", response.data.data.viewer);
        this.$store.dispatch("setLevel", response.data.data.level);

        this.$router.push({
          name: "staffDashboard",
        });
      } catch (error) {
        this.staff.error = error.response.data.error;
        // alert(error.response.data.error);
      }
      this.$store.dispatch("setLoading", false);
    },
  },
};
// const loginUpButton = document.getElementById("loginUp");
// const loginInButton = document.getElementById("loginIn");
// const container = document.getElementById("container");

// loginUpButton.addEventListener("click", () => {
//   container.classList.add("right-panel-active");
// });

// loginInButton.addEventListener("click", () => {
//   container.classList.remove("right-panel-active");
// });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}

body {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
}

.h1 {
  font-weight: bold;
  margin: 0;
}

/* h2 {
  text-align: center;
} */
.error-message {
  color: #ff4b2b;
  padding: 1rem;
}
.loginp {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

/* span {
  font-size: 12px;
} */

/* a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
} */

.button {
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
}

.button:active {
  transform: scale(0.95);
}

.button:focus {
  outline: none;
}

.button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

.input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  font-family: "Montserrat", sans-serif;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  height: 100%;
  margin: auto;
  margin-top: 5rem;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.login-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .login-in-container {
  transform: translateX(100%);
}

.login-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .login-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}
</style>
