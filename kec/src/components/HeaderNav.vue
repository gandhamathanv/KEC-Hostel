<template>
  <div>
    <nav class="header-nav">
      <span @click="navigateTo({ name: 'home' })"
        ><img src="@/assets/img/homepage/keclogo.png"
      /></span>
      <div class="nav-links" id="nav-links">
        <!-- <i class="fa fa-times" Onclick="hideMenu()"></i> -->

        <ul>
          <li>
            <span href="#">HOME</span>
          </li>
          <li>
            <span @click="navigateTo({ name: 'login' })">LOGIN</span>
          </li>
        </ul>
      </div>
      <i class="fa fa-bars"></i
      ><!---onclick="showMenu()"--->
    </nav>
  </div>
</template>

<script type="text/javascript">
export default {
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
// $(document).ready(function () {
//   var showHeaderAt = 150;

//   var win = $(window),
//     body = $("body");

//   if (win.width() > 400) {
//     win.on("scroll", function (e) {
//       if (win.scrollTop() > showHeaderAt) {
//         body.addClass("fixed");
//       } else {
//         body.removeClass("fixed");
//       }
//     });
//   }
// });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  display: flex;
  padding: 0% 6%;
  /* padding-bottom: 30pc; */
  justify-content: space-between;
  align-items: center;
}
nav img {
  width: 75px;
}
.nav-links {
  flex: 1;
  text-align: right;
  color: black;
}
.nav-links ul li {
  list-style: none;
  display: inline-block;
  padding: 8px 12px;
  position: relative;
}
.nav-links ul li::after {
  content: "";
  width: 0%;
  height: 2px;
  cursor: pointer;
  background: #f44336;
  display: block;
  margin: auto;
  transition: 0.5s;
}
.nav-links ul li:hover::after {
  width: 100%;
}
.text-box {
  width: 90%;
  color: #fff;
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.text-box h1 {
  font-size: 62px;
}
.text-box p {
  margin: 10px 0 40px;
  font-size: 14px;
  color: #fff;
}
nav .fa {
  display: none;
}
@media (max: width 700px) {
  .text-box h1 {
    font-size: 20px;
  }
  .nav-links ul li {
    display: block;
  }
  .nav-links {
    position: absolute;
    background: #f44336;
    height: 100vh;
    width: 200px;
    top: 0;
    right: -200px;
    text-align: left;
    z-index: 2;
    transition: 1s;
  }
  nav .fa {
    display: block;
    color: #fff;
    margin: 10px;
    font-size: 22px;
    cursor: pointer;
  }
  .nav-links ul {
    padding: 30px;
  }
}
</style>
