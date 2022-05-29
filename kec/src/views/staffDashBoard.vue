<template>
  <div>
    <DashBoard v-on:list="navigateTo($event)"></DashBoard>
    <DataList data="data"></DataList>
  </div>
</template>

<script>
import staffServices from "@/services/StaffServices";
import DashBoard from "../components/dashboard/DashBoard.vue";
import DataList from "./dataList.vue";
export default {
  name: "profilePage",
  components: { DashBoard, DataList },

  data() {
    return {
      NumberOfStudents: 4567,
      NumberOfQueries: 0,
      NumberOfRooms: null,
      notification: null,
      state: null,
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
      console.log(route);
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
