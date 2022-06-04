<template>
  <div class="container">
    <div class="ln">
      <h2 class="ln-here">Reset Password</h2>

      <div v-if="viewer == 'STAFF'" class="input-box">
        <i class="fa fa-envelope-o"></i>
        <input
          type="email"
          placeholder="Email Id"
          :readonly="true"
          :value="id"
        />
      </div>
      <div v-if="viewer == 'STUDENT'" class="input-box">
        <i class="fa fa-envelope-o"></i>
        <input
          type="text"
          placeholder="Rollnumber"
          :readonly="true"
          :value="id"
        />
      </div>
      <div class="input-box">
        <i class="fa fa-key"></i>
        <input
          type="password"
          placeholder="Current Password"
          v-model="currentPassword"
          class="myInput"
        />
        <span class="eye1" onclick="myfunction()">
          <!-- <i id="hide1" class="fa fa-eye"></i>
          <i id="hide2" class="fa fa-eye-slash"> </i> -->
        </span>
      </div>
      <div class="input-box">
        <i class="fa fa-key"></i>
        <input
          type="password"
          placeholder="New Password"
          class="myInput"
          v-model="newPassword"
        />
        <span class="eye1" onclick="myfunction()">
          <!-- <i id="hide1" class="fa fa-eye"></i>
          <i id="hide2" class="fa fa-eye-slash"> </i> -->
        </span>
      </div>
      <div class="input-box">
        <i class="fa fa-key"></i>
        <input
          type="password"
          placeholder="Confirm Password"
          v-model="confirmPassword"
          class="myInput"
        />
        <span class="eye1" onclick="myfunction()">
          <!-- <i id="hide1" class="fa fa-eye"></i>
          <i id="hide2" class="fa fa-eye-slash"> </i> -->
        </span>
      </div>
      <div class="error">
        <p class="error-line">{{ error }}</p>
      </div>
      <button @click="changePassword()" type="button" class="login-btn">
        Change Password
      </button>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationServices";
export default {
  name: "changePassword",
  data() {
    return {
      viewer: null,
      id: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      error: null,
    };
  },
  watch: {
    confirmPassword: function (val) {
      console.log(this.newPassword, this.confirmPassword);
      if (this.newPassword != val) {
        this.error = "PASSWORD MISSMATCH";
      } else {
        this.error = null;
      }
    },
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
    async changePassword() {
      try {
        console.log("change password");
        await AuthenticationService.changePassword({
          viewer: this.viewer,
          id: this.id,
          currentPassword: this.currentPassword,
          newPassword: this.newPassword,
        });
        console.log("success");
      } catch (error) {
        this.error = error.response.data.error;
        // alert(error.respsonse.data.error);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url("https://fonts.googleapis.com");
@import url("https://fonts.gstatic.com"); */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap");
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
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
