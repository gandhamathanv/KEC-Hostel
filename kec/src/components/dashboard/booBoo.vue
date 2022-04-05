<template>
  <div class="body">
    <div class="container">
      <div class="col-div-4-1">
        <div class="box-1 content-box-1">
          <p class="head-1">Today's Attendance</p>
          <p class="number">Present</p>
          <div class="percent">
            <p class="num">
              99%
              <span>for sem III</span>
            </p>
          </div>
          <i class="fa fa-line-chart box-icon"></i>
        </div>
      </div>
      <div></div>
      <div></div>
      <div class="col-div-4-1">
        <div class="box-1">
          <div class="content-box-1">
            <p class="head-1">today's menu</p>
            <br />
            <div class="m-box active">
              <button class="active-button info">
                <p>Member Profit<br /><span class="no-1">Last Months</span></p>
                <!-- <span class="no">+2343</span> -->
              </button>
            </div>

            <div class="m-box">
              <p>Member Profit<br /><span class="no-1">Last Months</span></p>
              <!-- <span class="no">+2343</span> -->
            </div>

            <div class="m-box">
              <p>Member Profit<br /><span class="no-1">Last Months</span></p>
              <!-- <span class="no">+2343</span> -->
            </div>
          </div>
        </div>
      </div>
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
              Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p class="m-box">
              <i class="fa fa-circle"></i> Lorem Ipsum is simply dummy text of
              the printing and typesetting industry.
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
              Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p class="m-box">
              <i class="fa fa-circle"></i> Lorem Ipsum is simply dummy text of
              the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "booBoo",
};
</script>
<style scoped>
.body {
  width: auto;
  height: 100%;
}
/* * {
  font-family: system-ui;
} */
/* .box {
  width: 500px;
  height: auto;

  box-shadow: 5px 8px 15px #ddd;
  background-color: #ffffff;
  margin-left: 10px;
  padding-left: 15px;
} */
.head-1 {
  font-family: system-ui;
  padding-left: 10px;
  padding-top: 10px;
  color: grey;
  font-size: 20px;
  padding-bottom: 0;
}
.number {
  font-family: system-ui;
  color: grey;
  padding-left: 10px;
  font-size: 35px;
}
/* b .percent {
  font-family: system-ui;

  font-size: 15px;
  padding-left: 10px;
  padding-bottom: 20px;
} */
.box-icon {
  font-size: 20px !important;
  margin-top: 35px !important;
  color: #5143ce;
  padding-right: 10px;
  background-color: #efeff5;
  padding: 15px;
  border-radius: 25px;
  position: absolute;
  left: 410px;
  top: 74px;
}
.head-1 span {
  padding-right: 20px;
  padding-top: 8px;
}
span {
  color: grey;
}

.col-div-4-1 {
  display: flex;
  flex-direction: column;
}

.m-box p {
  display: inline-block;
  margin: 10px 0px;
}
.active .no-1 {
  color: rgb(255, 255, 255) !important;
}

.m-box {
  color: #6e5d5d;

  padding: 0px 12px;
}

/* .box p {
  color: #6c7293;
  font-weight: 500;
  padding-left: 10px;
} */

.box-1 {
  width: 500px;
  height: 282px;
  background-color: #ffffff;
  margin-left: 10px;
  padding-left: 10px;
  box-shadow: 2px 5px 10px #ddd;
  position: relative;
  margin-bottom: 20px;
  margin-right: 10px;
  margin-top: 20px;
  float: left;
}
.content-box-1 {
  position: relative;
  align-items: center;
}
.container {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
}
.active-button {
  border: none;
  color: rgb(255, 255, 255);
  width: 90%;
  cursor: pointer;
}
.info {
  background-color: #098cf8;
  box-shadow: 2px 5px 10px #ddd;
}
.info1 {
  background-color: #c0d9ec;
  box-shadow: 2px 5px 10px #ddd;

  border: none;
  width: 180px;
  height: 40px;
}
.info:hover {
  background: #9fcef5;
}
.info1:hover {
  background: #9fcef5;
}
.buttons-query {
  border: none;
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 14px 28px;
  cursor: pointer;
  width: 400px;
}

/* responsive */
@media (max-width: 400px) {
  .col-div-4-1 {
    width: 100%;
  }
  .box-1 {
    width: 35%;
    margin-right: 15px;
    margin-left: 10px;
    margin-top: 10px;
    margin-right: 10px;
    height: 100%;
  }
  .box-icon {
    left: 10px;
    top: -20px;
  }

  .container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }
  .info1 {
    width: 25%;

    display: flex;
    flex-direction: column;
  }
  .buttons-query {
    border: none;
    width: 80px;
    display: flex;
    flex-direction: column;

    cursor: pointer;
    width: 400px;
  }
}
</style>
