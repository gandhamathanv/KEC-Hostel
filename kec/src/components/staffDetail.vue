<template>
  <div>
    <section>
      <div class="rt-container">
        <div class="col-rt-12">
          <div class="Scriptcontent">
            <!-- Student Profile -->
            <div class="student-profile py-4">
              <div class="container">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="card shadow-sm2">
                      <div class="card-header border-0">
                        <h3 class="mb-0">STAFF INFORMATION</h3>
                      </div>
                      <div class="buttons">
                        <button class="submit">
                          <span class="submit">Update </span>
                        </button>
                        <button class="submit">
                          <span class="submit">Delete </span>
                        </button>
                      </div>
                      <div class="card-body pt-0">
                        <table class="table table-bordered" border="0">
                          <tr>
                            <th width="20%">Name</th>
                            <td width="2%">:</td>
                            <td v-if="user.name">{{ user.name }}</td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>

                          <tr>
                            <th width="20%">bloodGroup</th>
                            <td width="2%">:</td>
                            <td v-if="user.bloodGroup">
                              {{ user.bloodGroup }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">roomNumber</th>
                            <td width="2%">:</td>
                            <td v-if="user.roomNumber">
                              {{ user.roomNumber }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">hostelName</th>
                            <td width="2%">:</td>
                            <td v-if="user.hostelName">
                              {{ user.hostelName }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">gender</th>
                            <td width="2%">:</td>
                            <td v-if="user.gender">{{ user.gender }}</td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">phoneNumber</th>
                            <td width="2%">:</td>
                            <td v-if="user.phoneNumber">
                              {{ user.phoneNumber }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>

                          <tr>
                            <th width="20%">collegeMailID</th>
                            <td width="2%">:</td>
                            <td v-if="user.collegeMailID">
                              {{ user.collegeMailID }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">personalMailID</th>
                            <td width="2%">:</td>
                            <td v-if="user.personalMailID">
                              {{ user.personalMailID }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">aadharNumber</th>
                            <td width="2%">:</td>
                            <td v-if="user.aadharNumber">
                              {{ user.aadharNumber }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- partial -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import getDetails from "@/services/getDetails";
export default {
  data() {
    return {
      update: true,
      user: {
        name: "Jeevitha",
        staffID: "12345",
        designation: "Assistant Professor",
        year: 2,

        hostelName: "Amaravathi",
        roomNumber: "AMR067",
        hostelResponsibility: "Deputy Warden",
        department: "CSE",
        gender: "female",
        bloodGroup: "O+ve",

        phoneNumber: 1234567890,
        whatsappNumber: 23456789056,
        collegeMailID: "jeevithacse@kongu.edu",
        personalMailID: "jeevitha@gmail.com",
        aadharNumber: 23456789067,
      },
    };
  },
  async mounted() {
    console.log("get Data");
    const { data } = await getDetails.getStaff({
      staffID: this.$route.params.staffID,
    });
    this.user = data.data;
  },
};
</script>
<style scoped lang="scss">
.rt-heading {
  margin-top: 80px;
  text-align: center;
  font-family: system-ui;
}

.profile_img {
  border-radius: 100%;
  border: 15px solid rgb(197, 193, 193);
  width: 200px;
  height: 200px;
}

.card {
  width: 400px;
  height: auto;
  position: relative;
  border-radius: 20px;
  background-color: aliceblue;
  box-shadow: 2px 10px 10px gray;
  text-align: center;
  margin-left: 70px;
  font-family: system-ui;
  font-weight: bold;
  padding: 34px;
}

.table {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  // border: 2px solid rgb(194, 186, 186);
}

.shadow-sm2 {
  width: 80%;
  align-items: center;
  text-align: left;
}

table {
  border-collapse: collapse;
}

td,
th + th {
  border-left: 1px solid rgb(107, 109, 106);
}

tr + tr {
  border-top: 1px solid rgb(126, 124, 128);
}

td,
th {
  padding: 10px;
}

tr + tr > td,
tr + tr > th {
  border-top: 1px solid rgb(103, 102, 104);
}

.row {
  width: 50%;
  margin: 0 auto;
  justify-content: center;
  padding: 10px;
}
.submit {
  align-items: center;
  justify-content: center;
  height: 45px;
  max-width: 140px;
  width: 100%;
  border: none;

  color: #fff;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  background-color: #4da6e2;

  margin-right: 14px;
}

@media (max-width: 790px) {
  .row {
    display: grid;
    grid-template-columns: 1fr;
  }
  .profile_img {
    width: 100px;
    height: 200px;
  }
  .card {
    width: 350px;
    height: auto;
    position: relative;
    margin-left: 20px;
    font-family: system-ui;
    font-weight: bold;
    padding: 15px;
  }
}
</style>
