<template>
  <div>
    <div class="container">
      <div class="search-box">
        <input
          type="text"
          v-model="search"
          class="search-input"
          placeholder="Search.."
        />
        <button class="search-button"></button>
      </div>
    </div>
    <div class="outer-wrapper">
      <div class="table-wrapper">
        <table id="emp-table">
          <thead>
            <th col-index="1">
              attachedBathroom
              <select
                v-model="data.filter.attachedBathroom"
                class="table-filter"
                @change="filter_rows()"
              >
                <option
                  v-for="name in data.options.attachedBathroom"
                  :key="name"
                  :value="name"
                >
                  {{ name }}
                </option>
              </select>
            </th>
            <th col-index="2">
              capacity
              <select
                v-model="data.filter.capacity"
                class="table-filter"
                @change="filter_rows()"
              >
                <option
                  v-for="name in data.options.capacity"
                  :key="name"
                  :value="name"
                >
                  {{ name }}
                </option>
              </select>
            </th>

            <th col-index="3">
              availability
              <select
                class="table-filter"
                v-model="data.filter.availability"
                @change="filter_rows()"
              >
                <option
                  v-for="name in data.options.availability"
                  :key="name"
                  :value="name"
                >
                  {{ name }}
                </option>
              </select>
            </th>
          </thead>
        </table>
      </div>
    </div>
    <div class="dash">
      <figure v-for="el in listData" :key="el" class="box">
        <div class="box-title">
          <h2 class="box-rollno">{{ el.roomNumber }}</h2>
        </div>
        <div class="box-title">
          <h6 class="box-name">{{ el.capacity }}</h6>
        </div>
        <div class="box-dept">
          <div class="box-deptname">
            <h6 class="box-name">{{ el.availability }}</h6>
          </div>

          <a @click="showDetails(el.roomNumber)" class="box-details" href="#">
            <span>Detail -></span>
          </a>
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
import getDetails from "@/services/getDetails";
export default {
  name: "hostelDataList",
  data() {
    return {
      listName: this.$route.params.route,
      search: "",
      data: {
        filter: {
          availability: null,
          capacity: null,
          attachedBathroom: null,
        },
        options: {
          availability: null,
          capacity: null,
          attachedBathroom: null,
        },
      },
      listData: null,
    };
  },

  methods: {
    setList(listName) {
      this.listName = listName;
    },
    filter_rows() {
      this.listData = this.realData
        .filter((el) => {
          return this.data.filter.availability
            ? el.availability === this.data.filter.availability
            : true;
        })
        .filter((el) =>
          this.data.filter.capacity
            ? el.capacity === this.data.filter.capacity
            : true
        )
        .filter((el) =>
          this.data.filter.attachedBathroom
            ? el.attachedBathroom === this.data.filter.attachedBathroom
            : true
        );
      // .filter((el) => {
      //   return (
      //     this.search !== "" &&
      //     Object.values(el)
      //       .join(" ")
      //       .toLowerCase.includes(this.search.toLowerCase)
      //   );

      console.log(this.listData);
    },
    showDetails(roomNumber) {
      this.$router.push({
        name: "roomDetail",
        params: {
          hostelName: this.$route.params.hostelName,
          roomNumber,
        },
      });
    },
  },
  async created() {
    const { data } = await getDetails.getRoomsList({
      hostelName: this.$route.params.hostelName,
    });
    this.data.options.availability = [
      ...new Set(
        data.data.map((el) => {
          return el.availability;
        })
      ),
    ];
    this.data.options.attachedBathroom = [
      ...new Set(
        data.data.map((el) => {
          return el.attachedBathroom;
        })
      ),
    ];
    this.data.options.capacity = [
      ...new Set(
        data.data.map((el) => {
          return el.capacity;
        })
      ),
    ];
    console.log(data.data);
    this.listData = data.data;
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
  width: 80%;
  height: auto;

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
}
/* card */
.dash {
  width: 70rem;
  margin: 0 auto;
}

.box {
  background: white;
  box-shadow: 0 2rem 6rem 1rem rgba(0, 0, 0, 0.15);
  margin-bottom: 2rem;
  transform: skewX(-20deg);
  display: flex;
  transition: all 0.5s;
  justify-content: space-between;
  height: 70px;
}

.box-title {
  background: linear-gradient(to bottom, #eb9604, #e63007);

  display: flex;
  align-items: center;
  padding: 0 3rem;
}

.box-rollno {
  color: white;
  font-size: 1.2rem;
  transform: skewX(20deg);
}

.box-dept {
  display: flex;
}

.box-deptname {
  align-self: stretch;
  border-right: 1px solid #ddd;
  display: flex;
  align-items: center;
}

.box-deptname:last-child {
  border: none;
}

.box-name {
  font-weight: 400;
  font-size: 1.2rem;
  transform: skewX(20deg);
  padding: 1.75rem;
}

.box-details:link,
.box-details:visited {
  flex: 0 0 auto;
  background: linear-gradient(to bottom, #d89608, #e63007);
  color: white;
  font-size: 1.2rem;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 2.5rem;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}
.box-details {
  height: 70px;
}

.box-details:hover,
.box-details:active {
  background-color: #9be15d;
}

.box-details span {
  transform: skewX(20deg);
}
</style>
