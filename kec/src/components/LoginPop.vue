<template>
  <div class="container">
    <div class="ln">
      <h2 class="ln-here">Staff Login</h2>

      <div class="input-box">
        <i class="fa fa-envelope-o"></i>
        <input type="email" v-model="staff.email" placeholder="Email Id" />
      </div>
      <div class="input-box">
        <i class="fa fa-key"></i>
        <input
          type="password"
          v-model="staff.password"
          placeholder="password"
          class="myInput"
        />
        <span class="eye1" onclick="myfunction()">
          <i class="hide1 fa fa-eye"></i>
          <i id="hide2" class="fa fa-eye-slash"> </i>
        </span>
      </div>
      <button type="button" @click="staffLogin" class="login-btn">LOGIN</button>
    </div>
    <div class="ln">
      <h2 class="ln-here">Student Login</h2>

      <div class="input-box">
        <i class="fa fa-envelope-o"></i>
        <input
          type="text"
          v-model="student.rollnumber"
          placeholder="Roll Number"
        />
      </div>
      <div class="input-box">
        <i class="fa fa-key"></i>
        <input
          type="password"
          v-model="student.password"
          placeholder="password"
          class="myInput"
        />
        <span class="eye2" onclick="myfunction()">
          <i class="hide1 fa fa-eye"></i>
          <i id="hide2" class="fa fa-eye-slash"> </i>
        </span>
      </div>
      <span v-if="this.student.error">{{ student.error }}</span>
      <button type="button" @click="studentLogin" class="login-btn">
        LOGIN
      </button>
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
    };
  },
  methods: {
    myfunction() {
      var x = document.getElementsByClassName("myInput");
      var y = document.getElementsByClassName("hide1");
      var z = document.getElementById("hide2");
      if (x.type === "password") {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
      } else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
      }
    },
    async register() {
      try {
        await AuthenticationService.register({
          rollnumber: this.rollnumber,
          password: this.password,
        });
      } catch (error) {
        // this.error = error.response.data.error;
        alert(error.response.data.error);
      }
    },

    async studentLogin() {
      try {
        const response = await AuthenticationService.studentLogin({
          rollnumber: this.student.rollnumber,
          password: this.student.password,
        });
        if (response.error) {
          console.log("error");
        }
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setStudent", response.data);
        localStorage.setItem("jwt", response.data.token);
        this.$router.push({
          name: "homeview",
        });
      } catch (error) {
        // console.log(error);
        // this.error = error.response.data.error;
        alert(error.response.data.error);
      }
    },
    async staffLogin() {
      try {
        console.log("Staff Login");
        const response = await AuthenticationService.staffLogin({
          mailId: this.staff.email,
          password: this.staff.password,
        });
        console.log(response.data);
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setStaff", response.data);
        localStorage.setItem("jwt", response.data.token);
        this.$router.push({
          name: "staffDashboard",
        });
      } catch (error) {
        // this.error = error.response.data.error;
        alert(error.response.data.error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url("https://fonts.googleapis.com");
@import url("https://fonts.gstatic.com"); */
/* @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"); */
/* @import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"); */
.ln {
  width: 500px;
  background: rgba(0, 0, 0, 0.8);
  margin: 12% auto;
  padding: 50px 0;
  color: #fff;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);
}

.ln-here {
  text-align: center;
  margin-bottom: 40px;
}
.input-box {
  margin: 31px auto;
  width: 80%;
  border-bottom: 1px solid #fff;
  padding-top: 10px;
  padding-bottom: 5px;
  display: flex;
}
.input-box input {
  width: 96%;
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
}
::placeholder {
  color: #ccc;
}
.fa {
  margin-right: 10px;
}
.eye1,
.eye2 {
  position: absolute;
  float: right;
}
.hide1 {
  display: none;
}
.login-btn {
  margin: 40px auto 20px;
  width: 80%;
  display: block;
  outline: none;
  padding: 10px 0;
  border: 1px solid #fff;
  cursor: pointer;
  background: transparent;
  color: #fff;
  font-size: 16px;
}
.link {
  text-align: right;
  padding-right: 10%;
}
.container {
  display: flex;
}
</style>
