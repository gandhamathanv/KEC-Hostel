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
            <span class="card-button">view student</span>

            <h3 class="h3">No of students</h3>
            <p>Present : {{ NumberOfStudents }}</p>
          </div>
          <div class="card">
            <h1 class="card-title">staff</h1>
            <span class="card-button">view staff</span>

            <h3 class="h3">No of staff</h3>
            <p>Present : {{ NumberOfStudents }}</p>
          </div>
          <div class="card">
            <h3 class="h3">No of Queries</h3>
            <p>Solved: {{ NumberOfQueries }}</p>
          </div>
          <div class="card">
            <h1 class="card-title">room</h1>
            <span class="card-button">view room</span>

            <h3 class="h3">No of room</h3>

            <p>rooms : {{ NumberOfRooms }}</p>
          </div>
        </div>
      </section>
    </div>

    <!-- next rown -->
    <div class="container">
      <div class="container-box">
        <div class="notification">
          <div class="notification-box">
            <section class="message-box">
              <div class="name-date">
                <p class="name">Kannan</p>
                <p class="date">24/04/2022</p>
              </div>
              <p class="message">
                Tomorrow will be declared as holiday. You can leave the hostel
                by tommorow evening.
              </p>
            </section>
            <section class="message-box">
              <div class="name-date">
                <p class="name">Kannan</p>
                <p class="date">24/04/2022</p>
              </div>
              <p class="message">
                Tomorrow will be declared as holiday. You can leave the hostel
                by tommorow evening.
              </p>
            </section>
          </div>
        </div>
      </div>
      <div class="container-box">
        <div class="notification">
          <div class="notification-box">
            <section class="message-box">
              <div class="name-date">
                <p class="name">Kannan</p>
                <p class="date">24/04/2022</p>
              </div>
              <p class="message">
                Tomorrow will be declared as holiday. You can leave the hostel
                by tommorow evening.
              </p>
            </section>
            <section class="message-box">
              <div class="name-date">
                <p class="name">Kannan</p>
                <p class="date">24/04/2022</p>
              </div>
              <p class="message">
                Tomorrow will be declared as holiday. You can leave the hostel
                by tommorow evening.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import staffServices from "@/services/StaffServices";
export default {
  name: "profilePage",
  data() {
    return {
      NumberOfStudents: 4567,
      NumberOfQueries: 0,
      NumberOfRooms: null,
    };
  },
  async created() {
    const { data } = await staffServices.getDash(this.$store.state.token);
    this.NumberOfStudents = data.data.studentCount;
    this.NumberOfRooms = data.data.roomCount;
    console.log(data);
  },
};
</script>
<style scoped>
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
  margin-bottom: 30px;
  align-items: center;
}
.card-button {
  text-shadow: 2px 2px 15px white;
  padding: 2%;
  color: white;
  background-color: black;
  border-radius: 4px;
  font-family: "Times New Roman", Times, serif;
}
.card-button:hover {
  text-shadow: 2px 2px 15px black;
  padding: 2%;
  color: black;
  background-color: white;
  border-radius: 4px;
  border: 2px solid black;
  cursor: pointer;
}

.card-title {
  margin: 0;
}
.card-button {
  padding: 5px;
  gap: 3px;
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
  width: 88%;
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
}
</style>
