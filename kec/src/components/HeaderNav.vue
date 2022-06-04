<template>
  <div>
    <header>
      <a href="#000" class="logo">KONGU HOSTEL</a>
      <div class="toggle" @click="togglemenu"></div>
      <ul class="menu">
        <li>
          <span @click="navigateTo({ name: 'login' })">Home</span>
        </li>
        <li><span @click="navigateTo({ name: 'login' })">Login</span></li>
      </ul>
    </header>
    <!-- <nav class="nav">
      <div class="logo">KONGU HOSTEL</div>
      <input type="checkbox" id="click" />
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul class="ul">
        <li class="li"><a href="#">About</a></li>

        <li class="li"><a class="active" href="#">Login</a></li>
      </ul>
    </nav> -->
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {};
  },
  methods: {
    togglemenu() {
      // var menutoggle = document.querySelector(".toggle");
      // var menu = document.querySelector(".menu");
      // menutoggle.classList.toggle("active");
      // menu.classList.toggle("active");
    },
    navigateTo(route) {
      this.$router.push(route);
    },
  },
  mounted: function () {
    window.addEventListener("scroll", function () {
      // var header = document.querySelector("header");
      // header.classList.toggle("sticky", window.scrollY > 0);
    });
  },
};
</script>

<style scoped>
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
  content: "KONGU HOSTEL";
  position: absolute;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 3px;
  width: 100%;
  height: 100%;
  color: goldenrod;
  overflow: hidden;
  animation: animate 4s infinite;
}

@keyframes animate {
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
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
header ul li span:hover {
  color: burlywood;
}
header ul li span {
  position: relative;
  display: inline-block;
  margin: 0 15px;
  color: #fff;
  text-decoration: none;
}
header.sticky ul li span {
  color: #111;
}
header.sticky ul li span:hover {
  color: burlywood;
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
    /* TODO  */
    /* background: url(menu.jpg); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30px;
    cursor: pointer;
  }
  .toggle.active {
    /* background: url(close.png); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: 25px;
    cursor: pointer;
  }
  header.sticky .toggle {
    filter: invert(1);
  }

  @media (max-width: 600px) {
    header,
    header.sticky {
      padding: 20px 20px;
    }
  }
}
</style>
