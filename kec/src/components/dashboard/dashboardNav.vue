<template>
  <div v-if="$store.state.isUserLoggedIn">
    <div class="head">
      <div class="col-div-6-logo">
        <p
          class="nav"
          v-if="$store.state.viewer == 'STUDENT'"
          @click="navigateTo({ name: 'homeview' })"
        >
          Kec Hostel
        </p>
        <p
          class="nav"
          v-if="$store.state.viewer == 'STAFF'"
          @click="navigateTo({ name: 'staffDashboard' })"
        >
          Kec Hostel
        </p>
      </div>

      <div v-if="this.$store.state.viewer == 'STUDENT'" class="col-div-6-icon">
        <button @click="navigateTo({ name: 'BookingView' })" class="book-now">
          book now
        </button>
        <span @click="toggleNoti" class="fa fa-bell noti-icon"></span>
        <div v-if="notiPop" class="notification-div">
          <p class="noti-head">
            Notification <span>{{ notification.length }}</span>
          </p>
          <p v-for="no in notification" :key="no.id">
            {{ no.by }}
            <span>{{ no.message }}</span>
          </p>
        </div>

        <div class="profile" @click="togglePop">
          <p>
            {{ $store.state.user.name }}
            <span class="fa fa-ellipsis-v dots" aria-hidden="true"></span>
          </p>
          <div v-if="menuPop" class="profile-div">
            <p @click="navigateTo({ name: 'studentInfo' })">
              <i class="fa fa-user"></i> Profile
            </p>
            <p @click="navigateTo({ name: 'changePassword' })">
              <i class="fa fa-cogs"></i> Settings
            </p>
            <p @click="logout">
              <i class="fa fa-power-off"></i>
              Log Out
            </p>
          </div>
        </div>
      </div>
      <div v-if="this.$store.state.viewer == 'STAFF'" class="col-div-6-icon">
        <span @click="toggleNoti" class="fa fa-bell noti-icon"></span>
        <div v-if="notiPop" class="notification-div">
          <p class="noti-head">
            Notification <span>{{ notification.length }}</span>
          </p>
          <p v-for="no in notification" :key="no.id">
            {{ no.by }}
            <span>{{ no.message }}</span>
          </p>
        </div>

        <div class="profile" @click="togglePop">
          <p>
            {{ $store.state.user.name }}
            <span class="fa fa-ellipsis-v dots" aria-hidden="true"></span>
          </p>
          <div v-if="menuPop" class="profile-div">
            <p @click="navigateTo({ name: 'studentInfo' })">
              <i class="fa fa-user"></i> Profile
            </p>
            <p @click="navigateTo({ name: 'changePassword' })">
              <i class="fa fa-cogs"></i> Settings
            </p>
            <p @click="navigateTo({ name: 'permissionsPage' })">
              <i class="fa fa-cogs"></i> Permissions
            </p>
            <p @click="logout">
              <i class="fa fa-power-off"></i>
              Log Out
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import HostelService from "@/services/HostelServices";

export default {
  name: "dashboardNav",
  data() {
    return {
      menuPop: false,
      notiPop: false,
      notification: null,
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },

    togglePop() {
      console.log("pop");
      this.menuPop = !this.menuPop;
    },
    toggleNoti() {
      this.notiPop = !this.notiPop;
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      localStorage.clear();
      this.$router.push({
        name: "home",
      });
    },
  },
  async created() {
    const noti = await HostelService.getNoti();
    this.notification = noti.data.data;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  padding: 0px 6px;
  border-bottom: 1px solid #d6d6d8b8;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.noti-head {
  display: block;
  margin: 0px;
  color: #6c7293;
}
.noti-head:hover {
  background-color: white !important;
  color: #6c7293 !important;
}
.noti-head span {
  position: absolute;
  right: 8%;
  top: 10%;
  background-color: #5643ff;
  padding: 1px 5px;
  color: white;
  border-radius: 20px;
}

.nav {
  font-size: 30px;
  cursor: pointer;
  color: #6c7293;
  margin: 11px 0px;
}
.book-now {
  background-color: white;
  height: fit-content;
  padding: 13px;
  border-radius: 21px;
  color: #6c7293;
  cursor: pointer;
}
.fa {
  color: orange !important;
}

.hr {
  margin: 0px;
  border: none;
  background-color: #ddd;
  height: 1px;
}

.notification-div {
  background-color: white;
  width: 240px;
  border: 1px solid #ddd;
  padding: 10px 0px;
  right: 16%;
  border-radius: 5px;
  top: 12%;
  position: absolute;
  z-index: 9;
  display: none;
}

.notification-div:after {
  content: "";
  position: absolute;
  height: 10px;
  width: 10px;
  background-color: white;
  top: -6px;
  border-left: 1px solid #ddd;
  border-top: 1px solid #ddd;
  transform: rotate(45deg);
  right: 10%;
}

.noti-head {
  display: block;
  margin: 0px;
  color: #6c7293;
}

.noti-head:hover {
  background-color: white !important;
  color: #6c7293 !important;
}

.noti-head span {
  position: absolute;
  right: 8%;
  top: 10%;
  background-color: #5643ff;
  padding: 1px 5px;
  color: white;
  border-radius: 20px;
}

.hr {
  margin: 0px;
  border: none;
  background-color: #ddd;
  height: 1px;
}

.notification-div p {
  margin: 0px;
  padding: 10px 20px;
  color: #6c7293;
}

.notification-div p span {
  font-size: 11px;
  display: block;
}

.notification-div p:hover {
  margin: 0px;
  padding: 10px 20px;
  background-color: #5643ff;
  border-radius: 0px;
  color: white;
}

.noti-icon {
  background-color: #5643ff;
  padding: 13px;
  border-radius: 21px;
  color: #fff;
  cursor: pointer;
  height: fit-content;
}

.profile {
  display: inline-block;
  height: fit-content;
  width: 200px;
}
.profile p {
  color: #6c7293;
  font-weight: 500;

  font-size: 13.5px;
  background-color: white;
  padding: 10px;
  border-radius: 25px;
  padding-left: 35px;
  cursor: pointer;
}

.profile-div {
  background-color: white;
  width: 140px;
  border: 1px solid #ddd;
  padding: 10px 0px;
  right: 2%;
  border-radius: 5px;
  position: absolute;
  z-index: 9;
}

.profile-div:after {
  content: "";
  position: absolute;
  height: 10px;
  width: 10px;
  background-color: white;
  top: -6px;
  border-left: 1px solid #ddd;
  border-top: 1px solid #ddd;
  transform: rotate(45deg);
  right: 10%;
}

.profile-div p {
  margin: 0px;
  padding: 10px 20px;
}

.profile-div p:hover {
  margin: 0px;
  padding: 10px 20px;
  background-color: #5643ff;
  border-radius: 0px;
  color: white;
}

.clearfix {
  clear: both;
}

.col-div-6-icon {
  display: flex;
  margin: 11px 0px;
  gap: 20px;
}
/* nitification pop */

.notification-div {
  background-color: white;
  width: 240px;
  border: 1px solid #ddd;
  padding: 10px 0px;
  right: 16%;
  border-radius: 5px;
  top: 12%;
  position: absolute;
  z-index: 9;
  display: block;
}

.notification-div:after {
  content: "";
  position: absolute;
  height: 10px;
  width: 10px;
  background-color: white;
  top: -6px;
  border-left: 1px solid #ddd;
  border-top: 1px solid #ddd;
  transform: rotate(45deg);
  right: 10%;
}

.noti-head {
  display: block;
  margin: 0px;
  color: #6c7293;
}

.noti-head:hover {
  background-color: white !important;
  color: #6c7293 !important;
}

.noti-head span {
  position: absolute;
  right: 8%;
  top: 10%;
  background-color: #5643ff;
  padding: 1px 5px;
  color: white;
  border-radius: 20px;
}

.hr {
  margin: 0px;
  border: none;
  background-color: #ddd;
  height: 1px;
}

.notification-div p {
  margin: 0px;
  padding: 10px 20px;
  color: #6c7293;
}

.notification-div p span {
  font-size: 11px;
  display: block;
}

.notification-div p:hover {
  margin: 0px;
  padding: 10px 20px;
  background-color: #5643ff;
  border-radius: 0px;
  color: white;
}
</style>
