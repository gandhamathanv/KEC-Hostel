<template>
  <div>
    <h2>Students Information</h2>
    <section class="fullinfo-box">
      <div class="div-box">
        <div class="div-title">Name:</div>
        <div>
          <p class="div-content">{{ user.name }}</p>
        </div>
      </div>
      <div class="div-box">
        <div class="div-title">Roll Number:</div>
        <div>
          <p class="div-content">{{ user.rollnumber }}</p>
        </div>
      </div>
      <div class="div-box">
        <div class="div-title">Class:</div>
        <div>
          <p class="div-content">{{ user.department }}-{{ user.class }}</p>
        </div>
      </div>
      <div class="div-box">
        <div class="div-title">Year of Studying:</div>
        <div>
          <p class="div-content">{{ user.year }}</p>
        </div>
      </div>
      <div class="div-box">
        <div class="div-title">Department:</div>
        <div>
          <p class="div-content">{{ user.department }}</p>
        </div>
      </div>
      <div class="div-box">
        <div class="div-title">Date of Birth:</div>
        <div>
          <p class="div-content">{{ user.dob }}</p>
        </div>
      </div>
      <div class="div-box">
        <div class="div-title">Students Mobile Number:</div>
        <div>
          <p class="div-content">{{ user.studentPhoneno }}</p>
        </div>
      </div>
      <div class="div-box">
        <div class="div-title">Students Mail Id:</div>
        <div>
          <p class="div-content">{{ user.studentMailId }}</p>
        </div>
      </div>
      <div class="div-box">
        <div class="div-title">Hostel Name:</div>
        <div>
          <p class="div-content">{{ user.hostelName }}</p>
        </div>
      </div>
      <div class="div-box">
        <div class="div-title">Hostel Room Number:</div>
        <div>
          <p class="div-content">{{ user.hostelRoomNo }}</p>
        </div>
      </div>
      <div class="div-box">
        <div class="div-title">Parents Name:</div>
        <div>
          <p class="div-content">{{ user.parentsName }}</p>
        </div>
      </div>
      <!-- <div class="div-box">
        <div class="div-title">Parents Mobile Number:</div>
        <div>
          <p class="div-content">{{ parents }}</p>
        </div>
      </div> -->
      <div class="div-box">
        <div class="div-title">Address:</div>
        <div>
          <p class="div-content">
            {{ user.address }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "StudentInfo",
  data() {
    return {
      user: this.$store.state.user,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.header-fixed {
  background-color: #292c2f;
  box-shadow: 0 1px 1px #ccc;
  padding: 20px 40px;
  height: 80px;
  color: #ffffff;
  box-sizing: border-box;
  top: -100px;
  -webkit-transition: top 0.3s;
  transition: top 0.3s;
}

.header-fixed .header-limiter {
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
}

.header-fixed-placeholder {
  height: 80px;
  display: none;
}
/* Logo */

.header-fixed .header-limiter h1 {
  float: left;
  font: normal 28px Cookie, Arial, Helvetica, sans-serif;
  line-height: 40px;
  margin: 0;
}

.header-fixed .header-limiter h1 span {
  color: #f3390a;
}
/* The navigation links */

.header-fixed .header-limiter a {
  color: #ffffff;
  text-decoration: none;
}

.header-fixed .header-limiter nav {
  font: 16px Arial, Helvetica, sans-serif;
  line-height: 40px;
  float: right;
}

.header-fixed .header-limiter nav a {
  display: inline-block;
  padding: 0 5px;
  text-decoration: none;
  color: #ffffff;
  opacity: 0.9;
}

.header-fixed .header-limiter nav a:hover {
  opacity: 1;
}

.header-fixed .header-limiter nav a.selected {
  color: #608bd2;
  pointer-events: none;
  opacity: 1;
}

body.fixed .header-fixed {
  padding: 10px 40px;
  height: 50px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

body.fixed .header-fixed-placeholder {
  display: block;
}

body.fixed .header-fixed .header-limiter h1 {
  font-size: 24px;
  line-height: 30px;
}

body.fixed .header-fixed .header-limiter nav {
  line-height: 28px;
  font-size: 13px;
}

@media all and (max-width: 600px) {
  .header-fixed {
    padding: 20px 0;
    height: 75px;
  }
  .header-fixed .header-limiter h1 {
    float: none;
    margin: -8px 0 10px;
    text-align: center;
    font-size: 24px;
    line-height: 1;
  }
  .header-fixed .header-limiter nav {
    line-height: 1;
    float: none;
  }
  .header-fixed .header-limiter nav a {
    font-size: 13px;
  }
  body.fixed .header-fixed {
    display: none;
  }
}

body {
  margin: 0;
  padding: 0;
  height: 800px;
}

h1 {
  text-align: center;
  color: white;
}

h2 {
  text-align: center;
  text-transform: uppercase;
  margin: 20px;
  color: black;
}

.fullinfo-box {
  border: #608bd2 2px solid;
  width: 90%;
  padding: 20px;
  margin: auto;
}

.div-box {
  width: 600px;
  border-radius: 25px;
  font-family: serif;
  border-collapse: collapse;
  width: max-content;
  margin-left: 2%;
}

.div-box:hover {
  transform: scale(1.1);
  text-shadow: #666 2px 2px 5px;
}

.div-title {
  text-transform: lowercase;
  color: orangered;
  /* text-shadow: orangered 2px 5px 5px; */
  opacity: 80%;
}

.div-content {
  text-transform: capitalize;
  width: max-content;
  color: #292c2f;
  font-size: larger;
  color: #333;
  padding-bottom: 2%;
  margin: 12px 0px 30px 20px;
}
</style>
