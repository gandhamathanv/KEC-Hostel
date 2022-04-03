<template>
  <div class="body">
    <div v-if="hostelName != null">
      <label> Select a hostel</label>
      <button
        v-for="name in hostelName"
        :key="name"
        @click="getData(name.hostelName)"
      >
        {{ name.hostelName }}
      </button>
    </div>
    <div v-if="data != null" class="floor">
      <label> Select a Floor:</label>

      <button @click="flr(0)">Ground Floor</button>
      <button @click="flr(1)">First Floor</button>
      <button @click="flr(2)">Second Floor</button>
      <button @click="flr(3)">Third Floor</button>
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
      <button @click="bk" type="button" class="book-button">Book</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HostelService from "@/services/HostelServices";
export default {
  name: "bookingView",
  data() {
    return {
      rooms: [
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
        {
          attachedBathroom: false,
          availability: 3,
          capacity: 5,
          createdAt: null,
          floor: 0,
          hostelName: "KAMBAN",
          roomNumber: "KBN001",
          updatedAt: null,
        },
      ],
      booked: [],
      data: [],
      hostelName: "KAMBAN",
    };
  },

  methods: {
    setHostel(data) {
      this.hostelName = data;
      console.log(this.hostelName);
    },
    book(n) {
      this.booked = n.roomNumber;
    },
    flr(n) {
      this.rooms = this.data.filter((da) => {
        return da.floor == n;
      });
      console.log(this.rooms);
    },
    bk() {
      alert(`you have booked ${this.booked} `);
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

  async created() {
    const hostels = await HostelService.getHostels({
      year: this.$store.state.user.year,
      gender: this.$store.state.user.gender,
    });
    // console.log(hostels);
    if (hostels.data.status == "Closed") {
      console.log("booking closed");
    } else if (hostels.data.status == "Success") {
      // console.log(hostels.data.data);
      this.setHostel(hostels.data.data);
    }
  },
  async mounted() {},
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
  /* height: 100vh; */
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
/*
.bed:nth-last-of-type(3) {
  margin-left: 18px;
}
**/
.bed:not(.sold):hover {
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
</style>
