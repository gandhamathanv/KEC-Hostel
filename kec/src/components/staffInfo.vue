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
                  <div class="col-lg-4">
                    <div class="card shadow-sm">
                      <div class="card-header">
                        <img
                          class="profile_img"
                          src="https://source.unsplash.com/600x300/?student"
                          alt="student dp"
                        />
                        <h3>Aanandhene</h3>
                      </div>
                      <hr />
                      <div class="card-body">
                        <p class="mb-0">
                          <strong class="pr-1">Designation:</strong
                          >{{ user.Designation }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="card shadow-sm2">
                      <div class="card-header border-0">
                        <h3 class="mb-0">
                          <i class="far fa-clone pr-1"></i>General Information
                        </h3>
                      </div>
                      <div class="card-body pt-0">
                        <table class="table table-bordered" border="0">
                          <tr v-if="user.class">
                            <th width="20%">class</th>
                            <td width="2%">:</td>
                            <td>{{ user.class }}</td>
                          </tr>
                          <tr v-if="user.year">
                            <th width="20%">year</th>
                            <td width="2%">:</td>
                            <td>{{ user.year }}</td>
                          </tr>
                          <tr v-if="user.department">
                            <th width="20%">department</th>
                            <td width="2%">:</td>
                            <td>{{ user.department }}</td>
                          </tr>
                          <tr v-if="user.DOB">
                            <th width="20%">DOB</th>
                            <td width="2%">:</td>
                            <td>{{ user.DOB }}</td>
                          </tr>
                          <tr v-if="user.bloodGroup">
                            <th width="20%">bloodGroup</th>
                            <td width="2%">:</td>
                            <td>{{ user.bloodGroup }}</td>
                          </tr>
                          <tr v-if="user.roomNumber">
                            <th width="20%">roomNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.roomNumber }}</td>
                          </tr>
                          <tr v-if="user.hostelName">
                            <th width="20%">hostelName</th>
                            <td width="2%">:</td>
                            <td>{{ user.hostelName }}</td>
                          </tr>
                          <tr v-if="user.gender">
                            <th width="20%">gender</th>
                            <td width="2%">:</td>
                            <td>{{ user.gender }}</td>
                          </tr>
                          <tr v-if="user.phoneNumber">
                            <th width="20%">phoneNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.phoneNumber }}</td>
                          </tr>
                          <tr v-if="user.whatsappNumber">
                            <th width="20%">whatsappNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.whatsappNumber }}</td>
                          </tr>
                          <tr v-if="user.telegramNumber">
                            <th width="20%">telegramNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.telegramNumber }}</td>
                          </tr>
                          <tr v-if="user.collegeMailID">
                            <th width="20%">collegeMailID</th>
                            <td width="2%">:</td>
                            <td>{{ user.collegeMailID }}</td>
                          </tr>
                          <tr v-if="user.personalMailID">
                            <th width="20%">personalMailID</th>
                            <td width="2%">:</td>
                            <td>{{ user.personalMailID }}</td>
                          </tr>
                          <tr v-if="user.aadharNumber">
                            <th width="20%">aadharNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.aadharNumber }}</td>
                          </tr>
                          <tr v-if="user.fatherName">
                            <th width="20%">fatherName</th>
                            <td width="2%">:</td>
                            <td>{{ user.fatherName }}</td>
                          </tr>
                          <tr v-if="user.fatherMobileNumber">
                            <th width="20%">fatherMobileNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.fatherMobileNumber }}</td>
                          </tr>
                          <tr v-if="user.fatherOccupation">
                            <th width="20%">fatherOccupation</th>
                            <td width="2%">:</td>
                            <td>{{ user.fatherOccupation }}</td>
                          </tr>
                          <tr v-if="user.motherName">
                            <th width="20%">motherName</th>
                            <td width="2%">:</td>
                            <td>{{ user.motherName }}</td>
                          </tr>
                          <tr v-if="user.motherMobileNumber">
                            <th width="20%">motherMobileNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.motherMobileNumber }}</td>
                          </tr>
                          <tr v-if="user.MotherOccupation">
                            <th width="20%">MotherOccupation</th>
                            <td width="2%">:</td>
                            <td>{{ user.MotherOccupation }}</td>
                          </tr>
                          <tr v-if="user.address">
                            <th width="20%">address</th>
                            <td width="2%">:</td>
                            <td>
                              {{ user.address }}
                            </td>
                          </tr>
                          <tr v-if="user.district">
                            <th width="20%">district</th>
                            <td width="2%">:</td>
                            <td>{{ user.district }}</td>
                          </tr>
                          <tr v-if="user.state">
                            <th width="20%">state</th>
                            <td width="2%">:</td>
                            <td>{{ user.state }}</td>
                          </tr>
                          <tr v-if="user.localGuardian">
                            <th width="20%">localGuardian</th>
                            <td width="2%">:</td>
                            <td>{{ user.localGuardian }}</td>
                          </tr>
                          <tr v-if="user.localGuardianPhoneNumber">
                            <th width="20%">localGuardianPhoneNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.localGuardianPhoneNumber }}</td>
                          </tr>
                          <tr v-if="user.accountNumber">
                            <th width="20%">accountNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.accountNumber }}</td>
                          </tr>
                          <tr v-if="user.bankName">
                            <th width="20%">bankName</th>
                            <td width="2%">:</td>
                            <td>{{ user.bankName }}</td>
                          </tr>
                          <tr v-if="user.branch">
                            <th width="20%">branch</th>
                            <td width="2%">:</td>
                            <td>{{ user.branch }}</td>
                          </tr>
                          <tr v-if="user.IFSCcode">
                            <th width="20%">IFSCcode</th>
                            <td width="2%">:</td>
                            <td>{{ user.IFSCcode }}</td>
                          </tr>
                          <tr v-if="user.dateOfEntry">
                            <th width="20%">dateOfEntry</th>
                            <td width="2%">:</td>
                            <td>{{ user.dateOfEntry }}</td>
                          </tr>
                          <tr v-if="user.dateOfVacation">
                            <th width="20%">dateOfVacation</th>
                            <td width="2%">:</td>
                            <td>{{ user.dateOfVacation }}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <!-- <div style="height: 26px"></div> -->
                    <!-- <div class="card shadow-sm">
                      <div class="card-header border-0">
                        <h3 class="mb-0">
                          <i class="far fa-clone pr-1"></i>Other Information
                        </h3>
                      </div>
                      <div class="card-body pt-0">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
            <!-- partial -->
          </div>
        </div>
      </div>
    </section>

    <!-- Analytics -->
  </div>
</template>

<script>
export default {
  name: "staffInfo",
  data() {
    return {
      user: this.$store.state.user,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  padding: 15px;
}

.table {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  border: 2px solid rgb(194, 186, 186);
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
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-content: center;
  padding: 10px;
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
