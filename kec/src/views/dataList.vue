<template>
  <div>
    <div class="container">
      <div class="search-box">
        <input type="text" class="search-input" placeholder="Search.." />
        <button class="search-button"></button>
      </div>
    </div>
    <div class="outer-wrapper">
      <div class="table-wrapper">
        <table id="emp-table">
          <thead>
            <th col-index="1">
              hostelName
              <select class="table-filter" onchange="filter_rows()">
                <option value="all">Amaravathi</option>
                <option value="all">Kaveri</option>
                <option value="all">Bhavani</option>
                <option value="all">Dheeran</option>
                <option value="all">Bharathi</option>
              </select>
            </th>
            <th col-index="2">
              gender
              <select class="table-filter" onchange="filter_rows()">
                <option value="all">Female</option>
                <option value="all">Male</option>
              </select>
            </th>

            <th col-index="3">
              year
              <select class="table-filter" onchange="filter_rows()">
                <option value="all">1</option>
                <option value="all">2</option>
                <option value="all">3</option>
                <option value="all">4</option>
              </select>
            </th>
          </thead>
          <!-- <tbody>
            <tr>
              <td>Dheeran</td>
              <td>Male</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Amaravathi</td>
              <td>Female</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Bhavani</td>
              <td>Female</td>
              <td>2</td>
            </tr>

            <tr>
              <td>Ponnar</td>
              <td>Female</td>
              <td>1</td>
            </tr>
          </tbody> -->
        </table>
      </div>
    </div>
    <div class="container1">
      <div class="profile-box">
        <h3 class="student-name">Aanandhene M</h3>
        <p class="dept">CSE</p>
        <p class="hostel">Amaravathi</p>
        <button type="button">View Details</button>
      </div>
      <div class="profile-box">
        <h3 class="student-name">Aanandhene M</h3>
        <p class="dept">CSE</p>
        <p class="hostel">Amaravathi</p>
        <button type="button">View Details</button>
      </div>
      <div class="profile-box">
        <h3 class="student-name">Aanandhene M</h3>
        <p class="dept">CSE</p>
        <p class="hostel">Amaravathi</p>
        <button type="button">View Details</button>
      </div>
      <div class="profile-box">
        <h3 class="student-name">Aanandhene M</h3>
        <p class="dept">CSE</p>
        <p class="hostel">Amaravathi</p>
        <button type="button">View Details</button>
      </div>
      <div class="profile-box">
        <h3 class="student-name">Aanandhene M</h3>
        <p class="dept">CSE</p>
        <p class="hostel">Amaravathi</p>
        <button type="button">View Details</button>
      </div>
      <div class="profile-box">
        <h3 class="student-name">Aanandhene M</h3>
        <p class="dept">CSE</p>
        <p class="hostel">Amaravathi</p>
        <button type="button">View Details</button>
      </div>

      <div class="profile-box">
        <h3 class="student-name">Aanandhene M</h3>
        <p class="dept">CSE</p>
        <p class="hostel">Amaravathi</p>
        <button type="button">View Details</button>
      </div>
      <div class="profile-box">
        <h3 class="student-name">Aanandhene M</h3>
        <p class="dept">CSE</p>
        <p class="hostel">Amaravathi</p>
        <button type="button">View Details</button>
      </div>
      <div class="profile-box">
        <h3 class="student-name">Aanandhene M</h3>
        <p class="dept">CSE</p>
        <p class="hostel">Amaravathi</p>
        <button type="button">View Details</button>
      </div>
      <div class="profile-box">
        <h3 class="student-name">Aanandhene M</h3>
        <p class="dept">CSE</p>
        <p class="hostel">Amaravathi</p>
        <button type="button">View Details</button>
      </div>
      <div class="profile-box">
        <h3 class="student-name">Aanandhene M</h3>
        <p class="dept">CSE</p>
        <p class="hostel">Amaravathi</p>
        <button type="button">View Details</button>
      </div>
      <div class="profile-box">
        <h3 class="student-name">Aanandhene M</h3>
        <p class="dept">CSE</p>
        <p class="hostel">Amaravathi</p>
        <button type="button">View Details</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      toggleFacilityButton: false,
    };
  },
  methods: {
    toggleFacility() {
      this.toggleFacilityButton = !this.toggleFacilityButton;
    },
  },
};
</script>
<style scoped>
body {
  font-family: sans-serif;
}
.search-box {
  width: 100%;
  position: relative;

  display: flex;
}
.search-input {
  width: 50%;
  padding: 10px;
  border: 4px solid #111d5e;
  border-radius: 10px 0 0 10px;
  border-right: none;
  outline: none;
  font-size: 15px;
  color: rgb(15, 15, 15);
  background: none;
}
.search-button {
  text-align: center;
  height: 51px;
  width: 40px;
  outline: none;
  cursor: pointer;
  border: 4px solid #111d5e;
  border-radius: 0 10px 10px 0;
  border-left: none;
  background: none;
  font-size: 20px;
  border-left: 4px solid #111d5e;
}
.container {
  width: 45%;
  position: absolute;
  left: 69%;
}
/* filter */

.heading {
  display: flex;
  background-color: #232f3e;
  box-shadow: 0px 1px 2px #232f3e;
}
h1 {
  color: coral;
  font-weight: bold;

  background: transparent;
  padding: 7px;
}

.outer-wrapper {
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.9);
  max-width: 39%;
  margin-bottom: 30px;
  max-height: fit-content;
}
.table-wrapper {
  height: fit-content;
  margin-top: 22px;
  margin: 0 auto;
}

table {
  min-width: max-content;

  border-collapse: separate;
  border-spacing: 0px;
}
.table-filter {
  border-radius: 5px;
  visibility: visible;
  opacity: 1;

  box-shadow: 0px 3px 5px -1px #ccc;
}
.table-filter:hover {
  color: rgb(77, 80, 172);
}
table th {
  position: sticky;
  top: 0px;

  background-color: #133b5c;
  color: rgb(241, 245, 179);

  text-align: center;
  font-weight: normal;
  font-size: 18px;
  outline: 0.7px solid black;
  border: 1.5px solid black;
}

table th,
table td {
  padding: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
}

table td {
  text-align: left;

  font-size: 15px;
  border: 1px solid rgb(177, 177, 177);
  padding-left: 20px;
}
/* card */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins", sans-serif;
}
.container1 {
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;

  align-items: center;
  justify-content: center;
}
.profile-box {
  background: #ff574a;
  width: 100%;
  text-align: center;
  padding: 45px 60px;
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
  font-size: 17px;
  margin-bottom: 20px;
  color: black;
}
.dept {
  margin-bottom: 5px;
}
.hostel {
  font-size: 17px;
  margin-bottom: 15px;
}

@media only screen and (max-width: 1200px) {
  .container1 {
    width: 50%;
    height: auto;

    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr;
  }
} ;
</style>
