<template>
  <div>
    <div class="container">
      <section class="main">
        <div class="main-top">
          <h1>Staff dashboard</h1>
          <i class="fas fa-user-cog"></i>
        </div>
        <div class="main-skills">
          <div class="card">
            <i class="fas fa-laptop-code"></i>
            <h3>No of students</h3>
            <p>Present : {{ NumberOfStudents }}</p>
          </div>
          <div class="card">
            <i class="fab fa-wordpress"></i>
            <h3>No of Queries</h3>
            <p>Solved: {{ NumberOfQueries }}</p>
          </div>
          <div class="card">
            <i class="fas fa-palette"></i>
            <h3>Rooms</h3>
            <p>Filled : 200</p>
            <p>Unfilled : 30</p>
          </div>
          <div class="card">
            <i class="fab fa-app-store-ios"></i>
            <h3>IOS Dev</h3>
            <p>join over 1 million students .</p>
          </div>
        </div>
      </section>
    </div>
    <!-- next rown -->
    <div class="col-div-4-1">
      <div class="box-1">
        <div class="content-box-1">
          <p class="head-1">
            <span>Querry</span>
          </p>
          <div class="buttons-query">
            <button class="info1">Add Querry</button
            ><button class="info1">View All</button>
          </div>
          <br />

          <p class="m-box">
            <i class="fa fa-circle" style="color: green !important"></i> Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p class="m-box">
            <i class="fa fa-circle"></i> Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
      </div>
    </div>
    <div class="col-div-4-1">
      <div class="box-1">
        <div class="content-box-1">
          <p class="head-1">
            <span>Rules</span>
          </p>
          <div class="buttons-query">
            <button class="info1">View All</button>
          </div>
          <br />

          <p class="m-box">
            <i class="fa fa-circle" style="color: green !important"></i> Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p class="m-box">
            <i class="fa fa-circle"></i> Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
      </div>
    </div>
    <div class="col-div-4-1">
      <div class="box-1">
        <div class="content-box-1">
          <p class="head-1">
            <span>Rules</span>
          </p>
          <div class="buttons-query">
            <button class="info1">View All</button>
          </div>
          <br />

          <p class="m-box">
            <i class="fa fa-circle" style="color: green !important"></i> Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p class="m-box">
            <i class="fa fa-circle"></i> Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profilePage",
  data() {
    return {
      NumberOfStudents: 4567,
      NumberOfQueries: 0,
    };
  },
  created() {},
};
</script>
<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=poppins:wght@400;500;600;700&display=swap"); */
* {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: "poppins", sans-serif;
}
body {
  background-color: #dfe9f5;
}
.container {
  display: flex;
}

.main {
  position: relative;
  padding: 20px;
  width: 100%;
}

.main-skills {
  display: flex;
  margin-top: 20px;
}
.main-skills .card {
  width: 25%;
  margin: 10px;
  background: #fff;
  text-align: center;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 10px 12px 20px rgba(3, 91, 233, 0.555);
}
.main-skills .card h3 {
  margin: 10px;
  text-transform: capitalize;
}
.main-skills .card p {
  font-size: 15px;
}
.main-skills .card button {
  background: orangered;
  color: rgb(250, 246, 246);
  /* color: white; */
  padding: 7px 15px;
  border-radius: 25px;
  margin-top: 15px;
  cursor: pointer;
}
.main-skills .card button:hover {
  background: rgba(223, 70, 15, 0.856);
}
.main-skills .card i {
  font-size: 30px;
  padding: 10px;
}
/*----------------*/
.col-div-4-1 {
  width: 33.3%;
  float: left;
}

.content-box-1 {
  padding: 0px 10px;
}

.box-1 {
  width: 88%;
  height: 282px;
  background-color: #ffffff;
  margin-left: 10px;
  padding: 10px;
  box-shadow: 2px 5px 10px #ddd;
  position: relative;
}

.head-1 {
  font-size: 18px !important;
  margin: 10px 0px;
  color: #6c7293;
}

.head-1 span {
  float: right;
  background-color: #5643ff;
  color: white;
  padding: 3px 10px;
  font-size: 15px;
}

.m-box {
  color: #6c7293;
  position: relative;
  padding: 0px 12px;
}

.m-box p {
  display: inline-block;
  margin: 10px 0px;
}

.active {
  background-color: #5646ff;
  color: white;
  box-shadow: 4px 3px 7px 3px #3226ad54;
}

.active .no-1 {
  color: #ddd !important;
}

.no-1 {
  font-size: 12px;
  color: #9398b1;
}

.act-p {
  font-size: 13px;
  color: #6c7293;
}

.act-p .fa {
  color: orange !important;
}

.content-box-1 {
  padding: 0px 10px;
}

.box-8 {
  width: 97.8%;
  background-color: #fff;
  height: 330px;
}

.box-8 {
  margin-left: 10px;
}

.content-box {
  padding: 20px;
}

.content-box p {
  margin: 0px;
  font-size: 20px;
  color: #6c7293;
}

.content-box p span {
  float: right;
  background-color: #5643ff;
  color: white;
  padding: 3px 10px;
  font-size: 15px;
}
/* nextrow */
</style>
