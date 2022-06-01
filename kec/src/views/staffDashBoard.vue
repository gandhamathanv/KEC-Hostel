<template>
  <div>
    <div class="container">
      <section class="main">
        <div class="header-title">
          <h1>Staff dashboard</h1>
        </div>
        <div class="main-title">
          <div class="card">
            <h1 class="card-title">student</h1>
            <span @click="navigateTo('studentList')" class="card-button"
              >view students</span
            >
            <h3 class="h3">No of students</h3>
            <p>{{ NumberOfStudents }}</p>
          </div>
          <div class="card">
            <h1 class="card-title">staff</h1>
            <span @click="navigateTo('staffList')" class="card-button"
              >view staff</span
            >

            <h3 class="h3">No of staff</h3>
            <p>{{ NumberOfStudents }}</p>
          </div>
          <div class="card">
            <h1 class="card-title">Booking</h1>
            <span @click="navigateTo('bookingList')" class="card-button"
              >view booking</span
            >

            <h3 class="h3">No of Booking</h3>

            <p>{{ NumberOfBooking }}</p>
          </div>
          <div class="card">
            <h1 class="card-title">Hostels</h1>
            <span @click="navigateTo('hostelList')" class="card-button"
              >View Hostels</span
            >

            <h3 class="h3">No of Hostels</h3>

            <p>{{ NumberOfRooms }}</p>
          </div>
        </div>
      </section>
    </div>

    <!-- next rown -->
    <div class="container1">
      <div class="container-box">
        <div class="notification">
          <div class="notification-box">
            <div class="menu">
              <table>
                <tr>
                  <td>
                    <ul>
                      <li class="menu1">
                        <a href="#link1">MONDAY</a>
                      </li>
                      <li class="menu1">
                        <a href="#link2">TUESDAY</a>
                      </li>
                      <li class="menu1">
                        <a href="#link3">WEDNESDAY</a>
                      </li>
                      <li class="menu1">
                        <a href="#link4">THURSDAY</a>
                      </li>
                      <li class="menu1">
                        <a href="#link5">FRIDAY</a>
                      </li>
                      <li class="menu1">
                        <a href="#link6">SATURDAY</a>
                      </li>
                      <li class="menu1">
                        <a href="#link7">SUNDAY</a>
                      </li>
                    </ul>
                  </td>
                  <td class="items">
                    <div id="link1">
                      <h3 CLASS="break">breakfast</h3>
                      <h4>DOSA,CHUTNEY,CHAPATHI</h4>
                      <h3 CLASS="lunch">lunch</h3>
                      <h4>RICE,SAMBER,CHAPATHI</h4>
                      <h3 CLASS="dinner">dinner</h3>
                      <h4>IDLI,CHUTNEY,CURD RICE</h4>
                    </div>

                    <div id="link2">
                      <h3 CLASS="break">breakfast</h3>
                      <h4>RICE,SAMBER,CHAPATHI</h4>
                      <h3 CLASS="lunch">lunch</h3>
                      <h4>DOSA,CHUTNEY,CHAPATHI</h4>
                      <h3 CLASS="dinner">dinner</h3>
                      <h4>IDLI,CHUTNEY,CURD RICE</h4>
                    </div>
                    <div id="link3">
                      <h3 CLASS="break">breakfast</h3>
                      <h4>DOSA,CHUTNEY,CHAPATHI</h4>
                      <h3 CLASS="lunch">lunch</h3>
                      <h4>IDLI,CHUTNEY,CURD RICE</h4>
                      <h3 CLASS="dinner">dinner</h3>
                      <h4>RICE,SAMBER,CHAPATHI</h4>
                    </div>
                    <div id="link4">
                      <h3 CLASS="break">breakfast</h3>
                      <h4>DOSA,CHUTNEY,CHAPATHI</h4>
                      <h3 CLASS="lunch">breakfast</h3>
                      <h4>RICE,SAMBER,CHAPATHI</h4>
                      <h3 CLASS="dinner">breakfast</h3>
                      <h4>IDLI,CHUTNEY,CURD RICE</h4>
                    </div>
                    <div id="link5">
                      <h3 CLASS="break">breakfast</h3>
                      <h4>DOSA,CHUTNEY,CHAPATHI</h4>
                      <h3 CLASS="lunch">breakfast</h3>
                      <h4>RICE,SAMBER,CHAPATHI</h4>
                      <h3 CLASS="dinner">breakfast</h3>
                      <h4>IDLI,CHUTNEY,CURD RICE</h4>
                    </div>
                    <div id="link6">
                      <h3 CLASS="break">breakfast</h3>
                      <h4>DOSA,CHUTNEY,CHAPATHI</h4>
                      <h3 CLASS="lunch">breakfast</h3>
                      <h4>RICE,SAMBER,CHAPATHI</h4>
                      <h3 CLASS="dinner">breakfast</h3>
                      <h4>IDLI,CHUTNEY,CURD RICE</h4>
                    </div>
                    <div id="link7">
                      <h3 CLASS="break">breakfast</h3>
                      <h4>DOSA,CHUTNEY,CHAPATHI</h4>
                      <h3 CLASS="lunch">breakfast</h3>
                      <h4>RICE,SAMBER,CHAPATHI</h4>
                      <h3 CLASS="dinner">breakfast</h3>
                      <h4>IDLI,CHUTNEY,CURD RICE</h4>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="container-box">
        <div class="notification">
          <div class="notification-box">
            <div class="left">
              <div>
                <a class="btn" href="contact.html"> </a>
              </div>
              <div class="noof">
                <div class="number1">
                  Number of Notifications:
                  <div class="buttons-query">
                    <button class="info2">5</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-box">
        <div class="notification">
          <div class="notification-box">//export data</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import staffServices from "@/services/StaffServices";
export default {
  name: "DashBoard",

  data() {
    return {
      NumberOfStudents: 4567,
      NumberOfQueries: 0,
      NumberOfRooms: null,
      notification: null,
    };
  },
  async created() {
    const { data } = await staffServices.getDash(this.$store.state.token);
    this.NumberOfStudents = data.data.studentCount;
    this.NumberOfRooms = data.data.roomCount;
    this.notification = data.data.noti;
    console.log(this.notification);
  },
  methods: {
    navigateTo(route) {
      if (route === "studentList") {
        this.$router.push({
          name: "studentDataList",
        });
      } else if (route === "staffList") {
        this.$router.push({
          name: "staffDataList",
        });
      } else if (route == "bookingList") {
        this.$router.push({
          name: "bookingDataList",
        });
      } else if (route == "hostelList") {
        this.$router.push({
          name: "hostelDataList",
        });
      }
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 10px 10px;
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
.container1 {
  display: flex;
  align-items: center;
}

.main {
  position: relative;
  padding: 20px;
  width: 100%;
}

.main-title {
  display: flex;
  margin-top: 20px;
  justify-content: space-evenly;
}
.main-title .card {
  width: 25%;
  height: auto;
  margin: 10px;

  text-align: center;
  border-radius: 20px;
  padding: 10px;

  box-shadow: 2px 2px 10px black;
}
.main-title .card .h3 {
  margin: 10px;
  margin-top: 15px;
  text-transform: capitalize;
}
.main-title .card {
  font-size: 15px;
}
.card-title {
  font-size: 25px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* font-weight: bold; */
  text-transform: uppercase;
  margin-bottom: 90px;
  align-items: center;
}
.card-button {
  text-shadow: 2px 2px 15px white;
  padding: 4%;
  color: white;
  background-color: black;
  border-radius: 4px;
  font-family: "Times New Roman", Times, serif;
}
.card-button:hover {
  text-shadow: 2px 2px 15px black;
  padding: 4%;
  color: black;
  background-color: white;
  border-radius: 4px;
  border: 2px solid black;
  cursor: pointer;
}

.card-title {
  margin: 0;
}

.main-title .card .button {
  /* background: orangered; */
  color: rgb(250, 246, 246);
  padding: 7px 15px;
  border-radius: 25px;
  margin-top: 15px;
  cursor: pointer;
}
/* .main-title .card .button:hover {
  background: rgba(223, 70, 15, 0.856);
} */
.main-title .card i {
  font-size: 30px;
  padding: 10px;
}
/*----------------*/
.container-box {
  width: 33.3%;
  height: auto;
  float: left;
}

.notification {
  width: 150%;
  height: fit-content;
  background-color: #ffffff;
  margin-left: 10px;
  padding: 10px;
  box-shadow: 2px 5px 10px #ddd;
  position: relative;
  box-shadow: 2px 2px 10px black;
}

.span {
  float: right;
  background-color: #5643ff;
  color: white;
  padding: 3px 10px;
  font-size: 15px;
}

.notification-box {
  padding: 0px 10px;
}

.span {
  float: right;
  background-color: #5643ff;
  color: white;
  padding: 3px 10px;
  font-size: 15px;
}
.message-box {
  border-bottom: 2px solid burlywood;
  padding: 10px 0px;
}
.name-date {
  display: flex;
  justify-content: space-between;
}
.message {
  text-align: center;
} /************************menu items */
.menu1 {
  background-color: #dfc0ba;
  width: 140px;
  padding: 10px;
  text-align: center;
  margin: 10px;
  border-radius: 20px;
  text-decoration: none;
  list-style-type: none;
}
.menu1:hover {
  box-shadow: 2px 5px 5px rgb(158, 158, 238);
  background-color: rgb(158, 211, 211);
}

.menu div {
  display: none;
}

.menu div:target {
  display: block;
}
.items {
  background-color: #9fcef5;
  border-radius: 20px;
  margin: 10px;
  padding: 20px;
  text-align: center;
}
.break {
  background-color: #ffffff;
  width: 140px;
  box-shadow: 2px 5px 5px #3c4043;
  margin: 10px;
  border-radius: 5px;
  height: 45px;
}
.lunch {
  background-color: #ffffff;
  width: 140px;
  box-shadow: 2px 5px 5px #3c4043;
  margin: 10px;
  border-radius: 5px;
  height: 45px;
}
.dinner {
  background-color: #ffffff;
  width: 140px;
  box-shadow: 2px 5px 5px #3c4043;
  margin: 10px;
  border-radius: 5px;
  height: 45px;
}
/* notification */
.btn {
  height: 56px;
  width: 56px;
  border-radius: 50%;
  background-color: white;
  color: #3c4043;
  display: inline-flex;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);
  transition: 0.5s;
}

.btn::before {
  background-image: url(https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 32px;
  content: "";
  min-width: 56px;

  display: block;
}
.number1 {
  font-family: system-ui;
  color: grey;
  width: 180px;
  position: relative;
  bottom: 20px;
  margin: 20px;
  font-size: 15px;
}
.left {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  left: 100px;
}
.info2 {
  background-color: #c0d9ec;
  box-shadow: 2px 5px 10px #ddd;
  border-radius: 20px;
  border: none;
  width: 120px;
  height: 40px;
  position: relative;
  right: 150px;
  bottom: 20px;
}
</style>
