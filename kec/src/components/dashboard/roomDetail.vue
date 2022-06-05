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
                        <h3 class="mb-0">ROOM INFORMATION</h3>
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
                            <th width="20%">Roll Number</th>
                            <td width="2%">:</td>
                            <td v-if="user.rollnumber">
                              {{ user.rollnumber }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">class</th>
                            <td width="2%">:</td>
                            <td v-if="user.class">{{ user.class }}</td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">year</th>
                            <td width="2%">:</td>
                            <td v-if="user.year">{{ user.year }}</td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">department</th>
                            <td width="2%">:</td>
                            <td v-if="user.department">
                              {{ user.department }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">DOB</th>
                            <td width="2%">:</td>
                            <td v-if="user.DOB">{{ user.DOB }}</td>
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
                            <th width="20%">whatsappNumber</th>
                            <td width="2%">:</td>
                            <td v-if="user.whatsappNumber">
                              {{ user.whatsappNumber }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">telegramNumber</th>
                            <td width="2%">:</td>
                            <td v-if="user.telegramNumber">
                              {{ user.telegramNumber }}
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
                          <tr>
                            <th width="20%">fatherName</th>
                            <td width="2%">:</td>
                            <td v-if="user.fatherName">
                              {{ user.fatherName }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">fatherMobileNumber</th>
                            <td width="2%">:</td>
                            <td v-if="user.fatherMobileNumber">
                              {{ user.fatherMobileNumber }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">fatherOccupation</th>
                            <td width="2%">:</td>
                            <td v-if="user.fatherOccupation">
                              {{ user.fatherOccupation }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">motherName</th>
                            <td width="2%">:</td>
                            <td v-if="user.motherName">
                              {{ user.motherName }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">motherMobileNumber</th>
                            <td width="2%">:</td>
                            <td v-if="user.motherMobileNumber">
                              {{ user.motherMobileNumber }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">MotherOccupation</th>
                            <td width="2%">:</td>
                            <td v-if="user.MotherOccupation">
                              {{ user.MotherOccupation }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">address</th>
                            <td width="2%">:</td>
                            <td v-if="user.address">
                              {{ user.address }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">district</th>
                            <td width="2%">:</td>
                            <td v-if="user.district">{{ user.district }}</td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">state</th>
                            <td width="2%">:</td>
                            <td v-if="user.state">{{ user.state }}</td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">localGuardian</th>
                            <td width="2%">:</td>
                            <td v-if="user.localGuardian">
                              {{ user.localGuardian }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">localGuardianPhoneNumber</th>
                            <td width="2%">:</td>
                            <td v-if="user.localGuardianPhoneNumber">
                              {{ user.localGuardianPhoneNumber }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">accountNumber</th>
                            <td width="2%">:</td>
                            <td v-if="user.accountNumber">
                              {{ user.accountNumber }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">bankName</th>
                            <td width="2%">:</td>
                            <td v-if="user.bankName">{{ user.bankName }}</td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">branch</th>
                            <td width="2%">:</td>
                            <td v-if="user.branch">{{ user.branch }}</td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">IFSCcode</th>
                            <td width="2%">:</td>
                            <td v-if="user.IFSCcode">{{ user.IFSCcode }}</td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">dateOfEntry</th>
                            <td width="2%">:</td>
                            <td v-if="user.dateOfEntry">
                              {{ user.dateOfEntry }}
                            </td>
                            <td v-if="update">
                              <span class="material-symbols-outlined">
                                edit
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th width="20%">dateOfVacation</th>
                            <td width="2%">:</td>
                            <td v-if="user.dateOfVacation">
                              {{ user.dateOfVacation }}
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
export default {
  data() {
    return {
      update: true,
      user: {
        hostelName: "Amaravathi",
        gender: "Female",
        roomNumber: "AMR003",
        year: 2,
        department: "CSE",
        capacity: 4,
        availability: 4,
      },
    };
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
