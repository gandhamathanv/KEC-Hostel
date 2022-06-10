<template>
  <!-- <div> -->
  <!-- <LoadingPage v-if="this.$store.state.isLoading"></LoadingPage>
    <div v-else>
      <HeaderNav v-if="!this.$store.state.isUserLoggedIn"></HeaderNav>
      <DashboardNav v-if="this.$store.state.isUserLoggedIn" />
    </div>
 -->
  <div class="dash-container">
    <new-dash></new-dash>
    <div class="app-body">
      <SideBar></SideBar>
      <ContainerContent class="container-view"></ContainerContent>
      <div class="app-body-sidebar">
        <section class="payment-section">
          <h2>New Payment</h2>
          <div class="payment-section-header">
            <p>Choose a card to transfer money</p>
            <div>
              <button class="card-button mastercard">
                <svg
                  width="2001"
                  height="1237"
                  viewBox="0 0 2001 1237"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="a624784f2834e21c94a1c0c9a58bbbaa">
                    <path
                      id="7869b07bea546aa59a5ee138adbcfd5a"
                      d="M1270.57 1104.15H729.71V132.15H1270.58L1270.57 1104.15Z"
                      fill="currentColor"
                    ></path>
                    <path
                      id="b54e3ab4d7044a9f288082bc6b864ae6"
                      d="M764 618.17C764 421 856.32 245.36 1000.08 132.17C891.261 46.3647 756.669 -0.204758 618.09 9.6031e-07C276.72 9.6031e-07 0 276.76 0 618.17C0 959.58 276.72 1236.34 618.09 1236.34C756.672 1236.55 891.268 1189.98 1000.09 1104.17C856.34 991 764 815.35 764 618.17Z"
                      fill="currentColor"
                    ></path>
                    <path
                      id="67f94b4d1b83252a6619ed6e0cc0a3a1"
                      d="M2000.25 618.17C2000.25 959.58 1723.53 1236.34 1382.16 1236.34C1243.56 1236.54 1108.95 1189.97 1000.11 1104.17C1143.91 990.98 1236.23 815.35 1236.23 618.17C1236.23 420.99 1143.91 245.36 1000.11 132.17C1108.95 46.3673 1243.56 -0.201169 1382.15 -2.24915e-05C1723.52 -2.24915e-05 2000.24 276.76 2000.24 618.17"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
              </button>
              <button class="card-button visa active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2500"
                  height="2500"
                  viewBox="0 0 141.732 141.732"
                >
                  <g fill="currentColor">
                    <path
                      d="M62.935 89.571h-9.733l6.083-37.384h9.734zM45.014 52.187L35.735 77.9l-1.098-5.537.001.002-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s4.691.976 10.181 4.273l8.456 32.479h10.141l15.485-37.385H45.014zM121.569 89.571h8.937l-7.792-37.385h-7.824c-3.613 0-4.493 2.786-4.493 2.786L95.881 89.571h10.146l2.029-5.553h12.373l1.14 5.553zm-10.71-13.224l5.114-13.99 2.877 13.99h-7.991zM96.642 61.177l1.389-8.028s-4.286-1.63-8.754-1.63c-4.83 0-16.3 2.111-16.3 12.376 0 9.658 13.462 9.778 13.462 14.851s-12.075 4.164-16.06.965l-1.447 8.394s4.346 2.111 10.986 2.111c6.642 0 16.662-3.439 16.662-12.799 0-9.72-13.583-10.625-13.583-14.851.001-4.227 9.48-3.684 13.645-1.389z"
                    />
                  </g>
                  <path
                    d="M34.638 72.364l-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s7.373 1.528 14.445 7.253c6.762 5.472 8.967 12.292 8.967 12.292z"
                    fill="currentColor"
                  />
                  <path fill="none" d="M0 0h141.732v141.732H0z" />
                </svg>
              </button>
            </div>
          </div>
          <div class="payments">
            <div class="payment">
              <div class="card green">
                <span>01/22</span>
                <span> •••• 4012 </span>
              </div>
              <div class="payment-details">
                <h3>Internet</h3>
                <div>
                  <span>$ 2,110</span>
                  <button class="icon-button">
                    <i class="ph-caret-right-bold"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="payment">
              <div class="card olive">
                <span>12/23</span>
                <span> •••• 2228 </span>
              </div>
              <div class="payment-details">
                <h3>Universal</h3>
                <div>
                  <span>$ 5,621</span>
                  <button class="icon-button">
                    <i class="ph-caret-right-bold"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="payment">
              <div class="card gray">
                <span>03/22</span>
                <span> •••• 5214 </span>
              </div>
              <div class="payment-details">
                <h3>Gold</h3>
                <div>
                  <span>$ 3,473</span>
                  <button class="icon-button">
                    <i class="ph-caret-right-bold"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="faq">
            <p>Most frequently asked questions</p>
            <div>
              <label>Question</label>
              <input type="text" placeholder="Type here" />
            </div>
          </div>
          <div class="payment-section-footer">
            <button class="save-button">Save</button>
            <button class="settings-button">
              <i class="ph-gear"></i>
              <span>More settings</span>
            </button>
          </div>
        </section>
      </div>
    </div>
    <!-- <router-view /> -->
  </div>

  <!-- </div> -->
</template>
<script>
// import HeaderNav from "@/components/HeaderNav.vue";
// import LoadingPage from "@/components/dashboard/loadingPage.vue";
// import DashboardNav from "@/components/dashboard/dashboardNav.vue";
import AuthenticationService from "@/services/AuthenticationServices";
import NewDash from "./components_Dash/NewDash.vue";
import SideBar from "./components_Dash/SideBar.vue";
import ContainerContent from "./components_Dash/ContainerContent.vue";
export default {
  name: "app",

  components: {
    NewDash,
    SideBar,
    ContainerContent,
  },
  // async mounted() {
  //   try {
  //     const res = await AuthenticationService.getData(this.$store.state.token);
  //     console.log(res);
  //     if (res.status == "success") {
  //       this.$store.dispatch("setToken", res.data.token);
  //       this.$store.dispatch("setUser", res.data.data.user);
  //       this.$store.dispatch("setViewer", res.data.data.viewer);
  //     } else {
  //       this.$store.dispatch("setToken", null);
  //       this.$store.dispatch("setUser", null);
  //       this.$store.dispatch("setViewer", null);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     // this.error = error.response.data.error;
  //     alert(error);
  //   }
  // },

  // un comment
  async mounted() {
    this.$store.dispatch("setLoading", true);
    try {
      console.log(localStorage.getItem("jwt"));
      const token = localStorage.getItem("jwt");
      if (token) {
        const res = await AuthenticationService.getData(token);
        console.log(res);
        if (res.data.status == "success") {
          this.$store.dispatch("setToken", res.data.token);
          this.$store.dispatch("setUser", res.data.data.user);
          this.$store.dispatch("setViewer", res.data.data.viewer);
          this.$store.dispatch("setLevel", res.data.data.level);
        } else {
          this.$store.dispatch("setToken", null);
          this.$store.dispatch("setUser", null);
          this.$store.dispatch("setViewer", null);
          this.$store.dispatch("setLevel", null);
          localStorage.removeItem("jwt");
        }
      }
    } catch (error) {
      alert(error);
    }
    this.$store.dispatch("setLoading", false);
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/newDash.css";

.dash-container {
  height: 100%;
}
.container-view {
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
}

//before

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   // text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
