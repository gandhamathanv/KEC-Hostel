<template>
  <div>
    <div class="container-pop">
      <div class="close">+</div>
      <div class="container-full">
        <h2 class="heading">Room Details</h2>
        <h3 class="heading-details">
          <span class="heading-title">Name:</span>{{ data.hostelName }}
        </h3>

        <h3 class="heading-details">
          <span class="heading-title">Room Number:</span>{{ data.roomNumber }}
        </h3>
        <h3 class="heading-details">
          <span class="heading-title">Floor:</span>{{ data.floor }}
        </h3>

        <h3 class="heading-details">
          <span class="heading-title">Capacity:</span>{{ data.capacity }}
        </h3>
        <h3 class="heading-details">
          <span class="heading-title">Availability:</span
          >{{ data.availability }}
        </h3>
        <h3 class="heading-details">
          <span class="heading-title">Attached Bathroom:</span
          >{{ data.attachedBathRoom ? "Yes" : "No" }}
        </h3>

        <a @click="bookNow" class="button">Book Now</a>
      </div>
    </div>
  </div>
</template>
<script>
import HostelService from "../services/HostelServices";
export default {
  name: "bookingPopUp",
  data() {
    return {};
  },
  methods: {
    async bookNow() {
      const res = await HostelService.bookRoom({
        roomNumber: this.data.roomNumber,
        rollnumber: this.$store.state.user.rollnumber,
      });
      console.log(res);
    },
  },
  props: { data: Object },
};
</script>
<style scoped>
.container-pop {
  border-radius: 20px;
  background-color: rgba(194, 190, 190, 0.825);
  padding: 50px;
  box-shadow: 0 5px 10px rgba(4, 8, 252, 0.5);

  text-align: center;
}

.heading {
  text-shadow: 2px 2px 5px rgba(60, 61, 64, 0.836);
  text-transform: uppercase;
  font-size: 30px;
}
.heading-details {
  color: #277148;
  font-size: 20px;
}
.close {
  right: 2%;
  top: 2%;
  position: absolute;

  font-size: 38px;
  transform: rotate(45deg);
  cursor: pointer;
}
.button {
  outline-color: transparent;
  outline-style: solid;
  box-shadow: 0 0 0 2px rgb(172, 56, 56);
  transition: 0.7s;
  cursor: pointer;
  border-radius: 9px;
  padding: 1% 3%;

  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  background-color: rgb(66, 55, 55);
  color: white;
}
.button:hover {
  background-color: rgb(65, 109, 102);

  color: white;
}
.heading-title {
  color: rgb(24, 25, 26);
}
</style>
