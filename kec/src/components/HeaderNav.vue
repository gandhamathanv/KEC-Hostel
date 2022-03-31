<template>
  <div>
    <header v-if="!$store.state.isUserLoggedIn">
      <router-link to="/" class="logo" @click="navigateTo({ name: 'home' })"
        >KEC HOSTEL</router-link
      >
      <div class="toggle" @click="togglemenu"></div>
      <ul class="menu">
        <li>
          <router-link to="/" @click="togglemenu">Home</router-link>
        </li>
        <li>
          <router-link to="/" @click="togglemenu">Hostel</router-link>
        </li>
        <!-- <li>
          <router-link to="/booking" @click="togglemenu">Booking</router-link>
        </li> -->

        <li>
          <button @click="navigateTo({ name: 'login' })">Login</button>
        </li>
      </ul>
    </header>

    <DashboardNav v-if="$store.state.isUserLoggedIn" />
  </div>
</template>

<script type="text/javascript">
import DashboardNav from "../components/dashboard/dashboardNav.vue";
// window.addEventListener("scroll", function () {
//   var header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 0);
// });
export default {
  components: {
    DashboardNav,
  },
  methods: {
    togglemenu() {
      var menutoggle = document.querySelector(".toggle");
      var menu = document.querySelector(".menu");
      menutoggle.classList.toggle("active");
      menu.classList.toggle("active");
    },
    showLogin() {
      this.loginPop = !this.loginPop;
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "home",
      });
    },
    navigateTo(route) {
      this.$router.push(route);
    },
  },
  data() {
    return {
      loginPop: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
}
section {
  padding: 100px;
}

.btn {
  position: absolute;
  background: #2196f3;
  display: inline-block;
  color: #fff;
  margin-top: 20px;
  padding: 10px 30px;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: 500;
}
.btn:hover {
  background-color: #0084ff;
}
.btn:active {
  opacity: 0.6;
}
.btn2 {
  position: relative;
  background: #2196f3;
  display: inline-block;
  color: #fff;
  margin-top: 20px;
  padding: 10px 30px;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: 500;
}
.btn2:hover {
  background-color: #0084ff;
}
.btn2:active {
  opacity: 0.6;
}
.btn1 {
  position: relative;
  background: #2196f3;
  display: inline-block;
  color: #fff;
  margin-top: 20px;
  padding: 10px 30px;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: 500;
  border: none;
  outline: none;
}
.btn1:hover {
  opacity: 0.8;
  cursor: pointer;
}
.btn1:active {
  opacity: 0.6;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  background-color: #111;
}
header.sticky {
  background: #fff;
  padding: 20px 100px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}
header .logo {
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 3px;
  position: relative;
}
header .logo:hover {
  color: burlywood;
}
header.sticky .logo {
  color: #111;
  border: 2px solid black;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 5px;
}
header.sticky .logo:before {
  content: "KEC HOSTEL";
  position: absolute;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 3px;
  width: 100%;
  height: 100%;
  color: goldenrod;
  overflow: hidden;
  animation: animate 6s infinite;
  animation: animate 4s infinite;
}

@keyframes animate {
  0% {
    width: 2%;
  }
  25% {
    width: 50%;
    width: 0%;
  }
  50% {
    width: 100%;
  }
  75% {
    width: 40%;
  }
  100% {
    width: 2%;
    width: 0%;
  }
}

header.sticky .logo:hover {
  opacity: 0.6;
}
header ul {
  position: relative;
  display: flex;
}
header ul li {
  position: relative;
  list-style: none;
  font-weight: 500;
}
header ul li a:hover {
  color: burlywood;
}
header ul li a {
  position: relative;
  display: inline-block;
  margin: 0 15px;
  color: #fff;
  text-decoration: none;
}
header.sticky ul li a {
  color: #111;
}
header.sticky ul li a:hover {
  color: burlywood;
}
.heading {
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  color: #111;
}
.heading h2 {
  font-weight: 600;
  font-size: 30px;
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  animation-name: animatetop;
  animation-duration: 0.4s;
}
/* Add Animation */
@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

/* The Close Button */
.close {
  color: #888;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: rgb(126, 2, 2);
  text-decoration: none;
  cursor: pointer;
}
/* responsive */
@media (max-width: 991px) {
  header,
  header.sticky {
    padding: 20px 50px;
    z-index: 1000;
  }
  header.sticky ul li a {
    color: #fff;
  }
  .banner {
    align-items: flex-start;
  }
  .menu {
    position: fixed;
    top: 75px;
    left: -100%;
    display: block;
    padding: 100px 50px;
    text-align: center;
    width: 100%;
    height: 100vh;
    background: #111;
    transition: 0.5s;
    z-index: 999;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  .menu.active {
    left: 0;
  }
  header ul li a {
    font-size: 24px;
    margin: 10px;
  }
  header ul li a:hover {
    color: burlywood;
  }
  .toggle {
    width: 40px;
    height: 40px;
    background: url(@/assets/img/menu.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30px;
    cursor: pointer;
  }
  .toggle.active {
    background: url(@/assets/img/close.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 25px;
    cursor: pointer;
  }
  header.sticky .toggle {
    filter: invert(1);
  }
  section {
    padding: 100px 50px;
  }

  .btn {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 16px;
  }
  .heading h2 {
    font-size: 24px;
  }
}
@media (max-width: 600px) {
  header,
  header.sticky {
    padding: 20px 20px;
  }
  .btn {
    border-radius: 10px;
    left: 250px;
    bottom: 90px;
  }

  section {
    padding: 100px 20px;
  }
  .textBx {
    position: relative;
    bottom: 20px;
  }
  .about .content .contentbx p {
    font-size: small;
  }
}
</style>
