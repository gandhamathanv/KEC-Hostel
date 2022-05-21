<template>
  <div>
    <div class="button-container">
      <h1 class="button-title">close all</h1>
      <div class="button-group">
        <div v-if="bookingAll != null" class="button-div">
          <h3 class="button-label">booking</h3>
          <label class="switch">
            <input
              type="checkbox"
              :checked="bookingAll"
              @click="closePermission('booking', bookingAll)"
            />
            <span class="slider round"></span>
          </label>
        </div>
        <div v-if="registrationAll != null" class="button-div">
          <h3 class="button-label">registration</h3>
          <label class="switch">
            <input
              type="checkbox"
              :checked="registrationAll"
              @click="closePermission('registration', registrationAll)"
            />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
    <div class="button-sub">
      <div
        v-for="hostel in permissions"
        :key="hostel.hostelName"
        class="button-container"
      >
        <h1 class="button-title">{{ hostel.hostelName }}</h1>
        <div class="button-group">
          <div class="button-div">
            <h3 class="button-label">booking</h3>
            <label class="switch">
              <input
                @click="changePermission(hostel, 'booking', hostel.booking)"
                type="checkbox"
                :checked="hostel.booking"
              />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="button-div">
            <h3 class="button-label">registration</h3>
            <label class="switch">
              <input
                @click="
                  changePermission(hostel, 'registration', hostel.registration)
                "
                type="checkbox"
                :checked="hostel.registration"
              />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ToggleButton from "../components/components/ToggleButton.vue";
import hostelServices from "../services/HostelServices";
export default {
  name: "permissionsPage",
  data() {
    return {
      da: "string",
      bookingAll: null,
      registrationAll: null,
      permissions: null,
    };
  },
  methods: {
    async closePermission(change, value) {
      try {
        const res = await hostelServices.closePermissions({
          change,
          value: !value,
        });
        if (res.data.status == "success") {
          console.log("success");

          if (change == "booking") {
            this.permissions.forEach((ele) => {
              ele.booking = !value;
            });
            this.bookingAll = !value;
          } else if (change == "registration") {
            this.permissions.forEach((ele) => {
              ele.registration = !value;
            });
            this.registrationAll = !value;
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async changePermission(hostel, change, value) {
      try {
        const res = await hostelServices.setPermissions({
          change,
          value: !value,
          hostelName: hostel.hostelName,
        });
        if (res.data.status == "success") {
          console.log("success");
          const name = this.permissions.filter((el) => {
            return el.hostelName == hostel.hostelName;
          });
          if (change == "booking") {
            name[0].booking = !value;
          } else if (change == "registration") {
            name[0].registration = !value;
          }
        }
      } catch (error) {
        console.log("failed");
      }
    },
  },
  async created() {
    if (this.$store.state.level != null) {
      const res = await hostelServices.getPermissions({
        level: this.$store.state.level,
        hostelName: this.$store.state.user.hostelName,
      });
      this.permissions = res.data.data;
    }
  },
  watch: {
    "$store.state.user.hostelName": async function () {
      console.log("storechange");
      const res = await hostelServices.getPermissions({
        level: this.$store.state.level,
        hostelName: this.$store.state.user.hostelName,
      });
      this.permissions = res.data.data;
    },
    permissions: function () {
      this.bookingAll = this.permissions.every((ele) => ele.booking === true);
      this.registrationAll = this.permissions.every(
        (ele) => ele.registration === true
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* The switch - the box around the slider */

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
/* Hide default HTML checkbox */

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
/* The slider */

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Rounded sliders */

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.button-container {
  display: flex;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
}

.button-label {
  padding: 0;
  margin: 0;
}
.button-div {
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 20px;
}
.button-group {
  display: flex;
  gap: 20px;
}
.button-sub {
  width: 80%;
  margin: 0 auto;
}
</style>
