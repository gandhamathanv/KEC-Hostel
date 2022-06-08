<template>
  <body>
    <div id="main">
      <div class="clearfix"></div>
      <br />

      <div class="clearfix"></div>
      <br />

      <div class="col-div-4-1">
        <div class="box-1">
          <div class="content-box-1">
            <p class="student-name">today's menu</p>
            <div v-if="todaysMenu != null">
              <div class="m-box">
                <p>
                  {{ todaysMenu.breakfast }}<br /><span class="no-1"
                    >breakfast</span
                  >
                </p>
                <span class="no">7:30</span>
              </div>
              <div class="m-box">
                <p>
                  {{ todaysMenu.lunch }}<br /><span class="no-1">lunch</span>
                </p>
                <span class="no">12:30</span>
              </div>
              <div class="m-box">
                <p>
                  {{ todaysMenu.eveningSnacks }}<br /><span class="no-1"
                    >evening Snacks</span
                  >
                </p>
                <span class="no">4:00</span>
              </div>
              <div class="m-box">
                <p>
                  {{ todaysMenu.dinner }}<br /><span class="no-1">dinner</span>
                </p>
                <span class="no">07:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="col-div-4-1">
        <div class="box-1">
          <div class="profile-box">
            <h3 class="student-name">Students Details</h3>
            <p class="hostel">No of Students:</p>
            <button type="button">View Students</button>
          </div>
        </div>
      </div>
      <div class="col-div-4-1">
        <div class="box-1">
          <div class="profile-box">
            <h3 class="student-name">Staff Details</h3>
  
            <p class="hostel">No of Staffs:</p>
            <button type="button">View Staffs</button>
          </div>
        </div>
      </div> -->

      <div class="clearfix"></div>
      <br />

      <div class="clearfix"></div>
    </div>
  </body>
</template>

<script>
import HostelService from "@/services/HostelServices";
const weekday = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];

const date = new Date();
const day = weekday[date.getDay()];
export default {
  name: "HomeView",
  data() {
    return {
      notification: null,
      todaysMenu: null,
    };
  },
  async mounted() {
    console.log(day);
    const menu = await HostelService.getMenu({
      day,
    });

    this.todaysMenu = menu.data.menu[0];
    console.log(this.todaysMenu);
  },
};
</script>
<style scoped>
body {
  margin: 0px;
  padding: 0px;
  background-color: #efeff5;
  font-family: system-ui;
}

.clearfix {
  clear: both;
}

#main {
  padding: 16px;
}

.head {
  padding: 0px 6px;
  border-bottom: 1px solid #d6d6d8b8;
  padding-bottom: 10px;
}

.col-div-6 {
  width: 50%;
  float: left;
  display: flex;
}

.profile {
  display: inline-block;
  /* float: right; */
  width: 200px;
}

.pro-img {
  float: left;
  width: 40px;
  margin-top: 8px;
  margin-left: 20px;
}

.profile p {
  color: #6c7293;
  font-weight: 500;
  margin-left: 35px;
  margin-top: 10px;
  font-size: 13.5px;
  background-color: white;
  padding: 10px;
  border-radius: 25px;
  padding-left: 35px;
  cursor: pointer;
}

.dots {
  margin-left: 10px;
}

.book-now {
  position: absolute;
  right: 22%;
  top: 25px;
  background-color: white;
  padding: 13px;
  border-radius: 21px;
  color: #6c7293;
  cursor: pointer;
}

.profile-div {
  background-color: white;
  width: 140px;
  border: 1px solid #ddd;
  padding: 10px 0px;
  right: 2%;
  border-radius: 5px;
  position: absolute;
  z-index: 9;
  display: none;
}

.profile-div:after {
  content: "";
  position: absolute;
  height: 10px;
  width: 10px;
  background-color: white;
  top: -6px;
  border-left: 1px solid #ddd;
  border-top: 1px solid #ddd;
  transform: rotate(45deg);
  right: 10%;
}

.profile-div p {
  margin: 0px;
  padding: 10px 20px;
}

.profile-div p:hover {
  margin: 0px;
  padding: 10px 20px;
  background-color: #5643ff;
  border-radius: 0px;
  color: white;
}

.notification-div {
  background-color: white;
  width: 240px;
  border: 1px solid #ddd;
  padding: 10px 0px;
  right: 16%;
  border-radius: 5px;
  top: 12%;
  position: absolute;
  z-index: 9;
  display: none;
}

.notification-div:after {
  content: "";
  position: absolute;
  height: 10px;
  width: 10px;
  background-color: white;
  top: -6px;
  border-left: 1px solid #ddd;
  border-top: 1px solid #ddd;
  transform: rotate(45deg);
  right: 10%;
}

.noti-head {
  display: block;
  margin: 0px;
  color: #6c7293;
}

.noti-head:hover {
  background-color: white !important;
  color: #6c7293 !important;
}

.noti-head span {
  position: absolute;
  right: 8%;
  top: 10%;
  background-color: #5643ff;
  padding: 1px 5px;
  color: white;
  border-radius: 20px;
}

.hr {
  margin: 0px;
  border: none;
  background-color: #ddd;
  height: 1px;
}

.notification-div p {
  margin: 0px;
  padding: 10px 20px;
  color: #6c7293;
}

.notification-div p span {
  font-size: 11px;
  display: block;
}

.notification-div p:hover {
  margin: 0px;
  padding: 10px 20px;
  background-color: #5643ff;
  border-radius: 0px;
  color: white;
}

.noti-icon {
  position: absolute;
  right: 17%;
  top: 25px;
  background-color: #5643ff;
  padding: 13px;
  border-radius: 21px;
  color: #fff;
  cursor: pointer;
}

.noti-icon:after {
  content: "";
  height: 5px;
  width: 5px;
  border-radius: 5px;
  top: 5px;
  left: 20px;
  position: absolute;
  background-color: red;
}

.col-div-4-1 {
  width: 33.3%;
  float: left;
}

.box {
  width: 88%;
  height: 130px;
  background-color: #ffffff;
  margin-left: 10px;
  padding: 10px;
  box-shadow: 2px 5px 10px #ddd;
  position: relative;
}

.box p {
  color: #6c7293;
  font-weight: 500;
  padding-left: 10px;
}

.number {
  font-size: 35px;
  margin-bottom: 0px;
  margin-top: 20px;
}

.percent {
  margin: 0px;
  font-size: 14px;
  color: #37bf37 !important;
}

.percent span {
  font-size: 12px;
  color: #9398b1;
  padding-left: 3px;
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

.box-icon {
  font-size: 20px !important;
  margin-top: 35px !important;
  color: #5643ff;
  padding-right: 10px;
  background-color: #efeff5;
  padding: 15px;
  border-radius: 25px;
  position: absolute;
  right: 16px;
  top: -18px;
}

.box-1 {
  width: 88%;
  height: fit-content;
  background-color: #ffffff;
  margin-left: 10px;
  padding: 10px;
  box-shadow: 2px 5px 10px #ddd;
  position: relative;
}

.m-box {
  color: #6c7293;
  position: relative;
  padding: 0px 12px;
}

.active {
  background-color: #5646ff;
  color: white;
  box-shadow: 4px 3px 7px 3px #3226ad54;
}

.active .no-1 {
  color: #ddd !important;
}

.m-box p {
  display: inline-block;
  margin: 10px 0px;
}

.no {
  position: absolute !important;
  top: 21px;
  right: 15px;
  font-weight: 500;
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

.col-div-12 {
  width: 100%;
}

.col-div-4 {
  width: 30%;
  float: left;
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

.box-8 {
  width: 97.8%;
  background-color: #fff;
  height: 330px;
}

.nav {
  font-size: 30px;
  cursor: pointer;
  color: #6c7293;
  margin: 11px 0px;
}

.box-8 {
  margin-left: 10px;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  color: #6c88be;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 10px;
}

tr:nth-child(even) {
  background-color: #5643ff29;
  color: #6c7293 !important;
}

.circle-wrap {
  margin: 50px auto;
  width: 150px;
  height: 150px;
  background: #e6e2e7;
  border-radius: 50%;
}

.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
}

.circle-wrap .circle .mask {
  clip: rect(0px, 150px, 150px, 75px);
}

.circle-wrap .circle .mask .fill {
  clip: rect(0px, 75px, 150px, 0px);
  background-color: #5646ff;
}

.circle-wrap .circle .mask.full,
.circle-wrap .circle .fill {
  animation: fill ease-in-out 3s;
  transform: rotate(126deg);
}

@keyframes fill {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(126deg);
  }
}

.circle-wrap .inside-circle {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #fff;
  line-height: 130px;
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
  position: absolute;
  z-index: 100;
  font-weight: 700;
  font-size: 2em;
  color: #6c7293;
}
.profile-box {
  background: #ff574a;
  width: 100%;
  text-align: center;
  padding: 68px 0px;
  color: #fff;
  position: relative;
  border-radius: 20px;
}

.profile-box button {
  background: #fff;
  color: #f1480b;
  border: none;
  outline: none;
  box-shadow: 0 5px 10px rgba(8, 19, 237, 0.5);
  padding: 14px 30px;
  border-radius: 30px;
  margin-bottom: -50px;
  font-weight: 200;
  font-size: 13px;
  cursor: pointer;
}
.profile-box button:hover {
  background-color: rgb(67, 65, 69);
}
.student-name {
  font-size: 25px;
  margin-bottom: 20px;
  color: black;
}
/* .dept {
  margin-bottom: 5px;
} */
.hostel {
  font-size: 18px;
  margin-bottom: 15px;
}
</style>
