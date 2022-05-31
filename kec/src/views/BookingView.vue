<template>
  <div class="body">
    <div v-if="hostelName != null">
      <label> Select a hostel:</label><br />
      <button
        class="button"
        v-for="name in hostelName"
        :key="name"
        @click="getData(name.hostelName)"
      >
        {{ name.hostelName }}
      </button>
    </div>
    <div v-if="data != null" class="floor">
      <label> Select a Floor:</label> <br />

      <button class="button" @click="flr(0)">Ground Floor</button>
      <button class="button" @click="flr(1)">First Floor</button>
      <button class="button" @click="flr(2)">Second Floor</button>
      <button class="button" @click="flr(3)">Third Floor</button>
    </div>
    <div v-if="rooms != null">
      <ul class="showcase">
        <li>
          <div class="bed"></div>
          <small>Available</small>
        </li>
        <li>
          <div class="bed selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div class="bed sold"></div>
          <small>Booked</small>
        </li>
      </ul>
      <div class="con1">
        <div v-for="room in rooms" :key="room">
          <fieldset class="room" @click="book(room)">
            <span>{{ room.roomNumber }}</span>
            <span class="washroom" v-if="room.attachedBathRoom"> AB</span>
            <div class="row">
              <div
                v-for="bed in room.capacity - room.availability"
                :key="bed"
                class="bed sold"
              ></div>
              <div
                v-for="bed in room.availability"
                :key="bed"
                class="bed"
              ></div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
    <div>
      <booking-popup v-if="pop"></booking-popup>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HostelService from "@/services/HostelServices";
import bookingPopup from "./bookingPopup.vue";
export default {
  components: { bookingPopup },
  name: "bookingView",
  data() {
    return {
      pop: false,
      rooms: null,
      booked: null,
      data: null,
      hostelName: null,
    };
  },

  methods: {
    setHostel(data) {
      this.hostelName = data;
      console.log(this.hostelName);
    },
    book(n) {
      this.booked = n.roomNumber;
      alert(`you have booked ${this.booked} `);
    },
    flr(n) {
      this.rooms = this.data.filter((da) => {
        return da.floor == n;
      });
    },
    async getData(n) {
      try {
        console.log("getting data for ", n);
        const room = await HostelService.getRooms({
          hostelName: n,
        });
        console.log(room);
        this.data = room.data.data;
      } catch (error) {
        alert(error.response.data.error);
      }
    },
  },

  async mounted() {
    console.log(this.$store.state.user.year);
    const hostels = await HostelService.getHostels({
      year: this.$store.state.user.year,
      gender: this.$store.state.user.gender,
    });
    if (hostels.data.status == "Closed") {
      alert("booking closed");
      this.$router.push({
        name: "homeview",
      });
    } else if (hostels.data.status == "Success") {
      console.log(hostels.data.data);
      this.setHostel(hostels.data.data);
    }
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
[v-cloak] {
  display: none;
}
* {
  box-sizing: border-box;
}

.body {
  margin-top: 4000px;
  background-color: #242333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "Lato", sans-serif;
  margin: 0;
}

.floor {
  margin: 20px 0;
}

.floor select {
  background-color: #fff;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  margin-left: 10px;
  padding: 5px 15px 5px 15px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

.div-room {
  perspective: 1000px;
  margin-bottom: 30px;
}

.bed {
  background-color: #444451;
  height: 26px;
  width: 32px;
  margin: 3px;
  font-size: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.bed.selected {
  background-color: green;
}

.bed.sold {
  background-color: #fff;
}

.bed:nth-of-type(5) {
  margin-right: 18px;
}

.bed:not(.sold):hover {
  cursor: pointer;
  background-color: green;
  transform: scale(1.2);
}
.bed:not(.sold):active {
  cursor: pointer;
  background-color: green;
  transform: scale(1.2);
}

.showcase .bed:not(.sold):hover {
  cursor: default;
  transform: scale(1);
}

.showcase {
  background: rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 5px;
  color: #777;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

.showcase li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}
.showcase li small {
  margin-left: 2px;
}

.row {
  display: flex;
}

.con1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.book-button {
  width: 80px;
  height: 40px;
}
.washroom {
  color: red;
}
.button {
  align-items: center;
  height: 40px;
  max-width: 100px;
  border: none;
  margin: 16px;
  justify-content: space-around;
  outline: none;
  border-radius: 6px;
  background: green;
  cursor: pointer;
}
.button:hover {
  box-shadow: 0 0 40px 40px rgb(223, 40, 12) inset;
}
</style>
