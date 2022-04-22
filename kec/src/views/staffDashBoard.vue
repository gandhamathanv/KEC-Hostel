<template>
  <div>
    <div class="container">
      <section class="main">
        <div class="main-top">
          <h1>Staff dashboard</h1>
        </div>
        <div class="main-skills">
          <div class="card">
            <h1 class="card-title">student</h1>
            <span class="card-button">view student</span>

            <h3>No of students</h3>
            <p>Present : {{ NumberOfStudents }}</p>
          </div>
          <div class="card">
            <h1 class="card-title">staff</h1>
            <span class="card-button">view staff</span>

            <h3>No of staff</h3>
            <p>Present : {{ NumberOfStudents }}</p>
          </div>
          <div class="card">
            <h3>No of Queries</h3>
            <p>Solved: {{ NumberOfQueries }}</p>
          </div>
          <div class="card">
            <h1 class="card-title">room</h1>
            <span class="card-button">view room</span>

            <h3>No of room</h3>

            <p>rooms : {{ NumberOfRooms }}</p>
          </div>
        </div>
      </section>
    </div>

    <!-- next rown -->
    <div class="container">
      <div class="col-div-4-1">
        <div class="box-1">
          <div class="content-box-1">
            <section
              v-for="noti in notification"
              :key="noti"
              class="message-box"
            >
              <div class="name-date">
                <p class="name">{{ noti.by }}</p>
                <p class="date">{{ noti.date }}</p>
              </div>
              <p class="message">{{ noti.message }}</p>
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
  justify-content: space-evenly;
}
.main-skills .card {
  width: 25%;
  height: auto;
  margin: 10px;

  text-align: center;
  border-radius: 20px;
  padding: 10px;

  box-shadow: 2px 2px 10px black;
}
.main-skills .card h3 {
  margin: 10px;
  margin-top: 15px;
  text-transform: capitalize;
}
.main-skills .card p {
  font-size: 15px;
}
.card-title {
  font-size: 30px;
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
.card-line {
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  padding: 40px 0px;
}
.card-line .card-title {
  margin: 0;
}
.card-line .card-button {
  padding: 5px;
  gap: 3px;
}
.buttons-query {
  display: flex;
  gap: 5px;
  align-items: center;
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
  height: auto;
  float: left;
}

.content-box-1 {
  padding: 0px 10px;
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

/* nextrow */
</style>
